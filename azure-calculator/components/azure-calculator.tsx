"use client"

import { useState, useEffect, useRef } from "react"
import { Calculator, X, ChevronDown, ChevronUp, Download, Share2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { azureServices, azurePricing, currencyRates } from "../lib/azure-data"
import jsPDF from "jspdf"

interface AzureCalculatorProps {
  hideHeaderFooter?: boolean;
}

interface AzureService {
  id: string;
  name: string;
  icon: string;
  category: string;
  type: string;
}

interface AzureServiceCategory {
  id: string;
  name: string;
}

interface AzureServices {
  categories: AzureServiceCategory[];
  services: AzureService[];
}

interface AzurePricingOption {
  name: string;
  price: number;
}

interface AzurePricingTier {
  name: string;
  price: number;
}

interface AzurePricingSize {
  name: string;
  price: number;
}

interface AzurePricingConfig {
  region: string;
  size?: string;
  os?: string;
  quantity?: number;
  hours?: number;
  tier?: string;
  storage?: number;
  bandwidth?: number;
  options?: Record<string, boolean>;
}

interface AzurePricingService {
  basePrice: number;
  hasSizes?: boolean;
  hasOS?: boolean;
  hasHours?: boolean;
  hasTiers?: boolean;
  hasStorage?: boolean;
  hasBandwidth?: boolean;
  hasOptions?: boolean;
  defaultConfig: AzurePricingConfig;
  osOptions?: { id: string; name: string }[];
  sizes?: Record<string, AzurePricingSize>;
  tiers?: Record<string, AzurePricingTier>;
  storage?: { price: number };
  bandwidth?: { price: number };
  options?: Record<string, AzurePricingOption>;
}

interface AzurePricing {
  regions: { id: string; name: string }[];
  [key: string]: any;
}

interface CurrencyRates {
  [key: string]: number;
}

interface SelectedService extends AzurePricingConfig {
  id: string;
  name: string;
  type: string;
  price: number;
  [key: string]: any;
}

interface Estimate {
  id: number;
  name: string;
  services: SelectedService[];
  total: number;
  currency: string;
  billingTerm: string;
  date: string;
}

export default function AzureCalculator({ hideHeaderFooter }: AzureCalculatorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("compute")
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])
  const [totalEstimate, setTotalEstimate] = useState<number>(0)
  const [currency, setCurrency] = useState<string>("USD")
  const [billingTerm, setBillingTerm] = useState<string>("monthly")
  const [expandedServices, setExpandedServices] = useState<Record<number, boolean>>({})
  const [showSummary, setShowSummary] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [isExportDialogOpen, setIsExportDialogOpen] = useState<boolean>(false)
  const [isShareDialogOpen, setIsShareDialogOpen] = useState<boolean>(false)
  const [exportFormat, setExportFormat] = useState<string>("pdf")
  const [shareEmail, setShareEmail] = useState<string>("")
  const [estimateName, setEstimateName] = useState<string>("My Azure Estimate")
  const [savedEstimates, setSavedEstimates] = useState<Estimate[]>([])
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState<boolean>(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const estimateRef = useRef<HTMLDivElement | null>(null)

  let Header: any = null;
  let Footer: any = null;
  if (!hideHeaderFooter) {
    try {
      Header = require("@/components/header").default;
      Footer = require("@/components/footer").default;
    } catch (e) {
      // If not found, just skip rendering
      Header = null;
      Footer = null;
    }
  }

  // Calculate total estimate whenever selected services change
  useEffect(() => {
    const total = selectedServices.reduce((acc, service) => {
      return acc + calculateServiceCost(service)
    }, 0)
    setTotalEstimate(total)
  }, [selectedServices, billingTerm, currency])

  // Load saved estimates from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("azureSavedEstimates");
    if (stored) {
      setSavedEstimates(JSON.parse(stored));
    }
  }, []);

  // Save estimates to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("azureSavedEstimates", JSON.stringify(savedEstimates));
  }, [savedEstimates]);

  const azurePricingAny = azurePricing as any;

  const calculateServiceCost = (service: SelectedService): number => {
    // Get the base price for the service
    const basePrice = service.price || 0

    // Apply any tier-based pricing
    let tierPrice = basePrice
    if (service.tier && azurePricingAny[service.type]?.tiers?.[service.tier]) {
      tierPrice = azurePricingAny[service.type].tiers[service.tier].price
    }

    // Apply any size-based pricing
    if (service.size && azurePricingAny[service.type]?.sizes?.[service.size]) {
      tierPrice = azurePricingAny[service.type].sizes[service.size].price
    }

    // Calculate based on quantity, hours, and other factors
    let cost = tierPrice * (service.quantity || 1)

    // Apply hours if applicable
    if (service.hours) {
      cost = cost * service.hours
    }

    // Apply days per month if monthly billing
    if (billingTerm === "monthly") {
      cost = cost * 730 // Average hours in a month (365 * 24 / 12)
    }

    // Apply any storage calculations
    if (service.storage) {
      const storagePrice = azurePricingAny[service.type]?.storage?.price || 0
      cost += service.storage * storagePrice
    }

    // Apply any bandwidth calculations
    if (service.bandwidth) {
      const bandwidthPrice = azurePricingAny[service.type]?.bandwidth?.price || 0
      cost += service.bandwidth * bandwidthPrice
    }

    // Apply any additional options
    if (service.options) {
      Object.entries(service.options).forEach(([option, enabled]) => {
        if (enabled && azurePricingAny[service.type]?.options?.[option]) {
          cost += azurePricingAny[service.type].options[option].price
        }
      })
    }

    // Convert to selected currency
    if (currency !== "USD") {
      cost = cost * ((currencyRates as CurrencyRates)[currency] || 1)
    }

    return cost
  }

  const addService = (serviceId: string, serviceName: string, serviceType: string): void => {
    // Get default configuration for this service type
    const defaultConfig = azurePricingAny[serviceType]?.defaultConfig || {}

    const newService: SelectedService = {
      id: serviceId,
      name: serviceName,
      type: serviceType,
      region: defaultConfig.region || "eastus",
      tier: defaultConfig.tier || "basic",
      size: defaultConfig.size || "small",
      quantity: defaultConfig.quantity || 1,
      hours: defaultConfig.hours || 24,
      storage: defaultConfig.storage || 0,
      bandwidth: defaultConfig.bandwidth || 0,
      options: defaultConfig.options || {},
      price: azurePricingAny[serviceType]?.basePrice || 0.01, // Ensure no zero prices
    }

    setSelectedServices([...selectedServices, newService])

    // Auto-expand the newly added service
    setExpandedServices({
      ...expandedServices,
      [selectedServices.length]: true,
    })
  }

  const removeService = (index: number): void => {
    const updatedServices = [...selectedServices]
    updatedServices.splice(index, 1)
    setSelectedServices(updatedServices)

    // Update expanded services
    const newExpandedServices: Record<number, boolean> = {}
    Object.keys(expandedServices).forEach((key) => {
      const keyNum = Number.parseInt(key)
      if (keyNum < index) {
        newExpandedServices[keyNum] = expandedServices[keyNum]
      } else if (keyNum > index) {
        newExpandedServices[keyNum - 1] = expandedServices[keyNum]
      }
    })
    setExpandedServices(newExpandedServices)
  }

  const updateService = (index: number, field: string, value: any): void => {
    const updatedServices = [...selectedServices]

    // Handle nested fields (options)
    if (field.includes(".")) {
      const [parent, child] = field.split(".")
      updatedServices[index][parent] = {
        ...(updatedServices[index][parent] as object),
        [child]: value,
      }
    } else {
      (updatedServices[index] as SelectedService)[field] = value;
    }

    // Update price if tier or size changes
    if (field === "tier" && azurePricingAny[updatedServices[index].type]?.tiers?.[value]) {
      updatedServices[index].price = azurePricingAny[updatedServices[index].type].tiers[value].price
    }

    if (field === "size" && azurePricingAny[updatedServices[index].type]?.sizes?.[value]) {
      updatedServices[index].price = azurePricingAny[updatedServices[index].type].sizes[value].price
    }

    setSelectedServices(updatedServices)
  }

  const toggleServiceExpansion = (index: number): void => {
    setExpandedServices({
      ...expandedServices,
      [index]: !expandedServices[index],
    })
  }

  const formatCurrency = (amount: number): string => {
    const currencySymbols: Record<string, string> = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      INR: "₹",
      JPY: "¥",
      AUD: "A$",
      CAD: "C$",
      CHF: "CHF",
      CNY: "¥",
      SEK: "kr",
      NZD: "NZ$",
      MXN: "Mex$",
      SGD: "S$",
      HKD: "HK$",
      NOK: "kr",
      KRW: "₩",
      TRY: "₺",
      RUB: "₽",
      BRL: "R$",
      ZAR: "R",
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      currencyDisplay: "symbol",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const handleExport = () => {
    const estimate = getCurrentEstimate();
    if (exportFormat === "pdf") {
      const doc = generatePDF(estimate);
      doc.save(`${estimate.name}.pdf`);
    } else if (exportFormat === "csv") {
      const csv = generateCSV(estimate);
      downloadFile(`${estimate.name}.csv`, csv, "text/csv");
    } else if (exportFormat === "excel") {
      const tsv = generateExcel(estimate);
      downloadFile(`${estimate.name}.xls`, tsv, "application/vnd.ms-excel");
    }
    setIsExportDialogOpen(false);
    setToastMessage("Estimate exported!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleShare = () => {
    const estimate = getCurrentEstimate();
    let body = `Estimate: ${estimate.name}%0D%0A`;
    body += `Total: ${formatCurrency(estimate.total)} (${estimate.currency})%0D%0A`;
    body += `Billing Term: ${estimate.billingTerm}%0D%0A`;
    body += `Services:%0D%0A`;
    estimate.services.forEach((s: SelectedService, i: number) => {
      body += `${i + 1}. ${s.name} | ${s.type} | ${s.region} | ${s.tier} | ${s.size} | Qty: ${s.quantity} | Hours: ${s.hours} | Storage: ${s.storage} | Bandwidth: ${s.bandwidth} | ${formatCurrency(calculateServiceCost(s))}%0D%0A`;
    });
    const mailto = `mailto:${shareEmail}?subject=Azure Estimate: ${encodeURIComponent(estimate.name)}&body=${body}`;
    window.open(mailto, "_blank");
    setIsShareDialogOpen(false);
    setToastMessage("Mail client opened to share estimate.");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSaveEstimate = () => {
    const newEstimate = {
      id: Date.now(),
      name: estimateName,
      services: [...selectedServices],
      total: totalEstimate,
      currency: currency,
      billingTerm: billingTerm,
      date: new Date().toISOString(),
    }
    setSavedEstimates([...savedEstimates, newEstimate])
    setIsSaveDialogOpen(false)
    setToastMessage(`Estimate "${estimateName}" has been saved!`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const loadEstimate = (estimate: Estimate) => {
    setSelectedServices(estimate.services)
    setCurrency(estimate.currency)
    setBillingTerm(estimate.billingTerm)
    setEstimateName(estimate.name)
  }

  const renderServiceConfiguration = (service: SelectedService, index: number) => {
    const serviceConfig = azurePricingAny[service.type] || {}

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Common configurations for all services */}
        <div className="space-y-2">
          <Label htmlFor={`region-${index}`}>Region</Label>
          <Select value={service.region} onValueChange={(value) => updateService(index, "region", value)}>
            <SelectTrigger id={`region-${index}`}>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {azurePricingAny.regions.map((region: { id: string; name: string }) => (
                <SelectItem key={region.id} value={region.id}>
                  {region.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Quantity field for all services */}
        <div className="space-y-2">
          <Label htmlFor={`quantity-${index}`}>Quantity</Label>
          <Input
            id={`quantity-${index}`}
            type="number"
            min="1"
            value={service.quantity}
            onChange={(e) => updateService(index, "quantity", Number.parseInt(e.target.value) || 1)}
          />
        </div>

        {/* Service-specific configurations */}
        {serviceConfig.hasTiers && (
          <div className="space-y-2">
            <Label htmlFor={`tier-${index}`}>Tier</Label>
            <Select value={service.tier} onValueChange={(value) => updateService(index, "tier", value)}>
              <SelectTrigger id={`tier-${index}`}>
                <SelectValue placeholder="Select tier" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(serviceConfig.tiers || {}).map(([tierId, tier]) => {
                  const t = tier as AzurePricingTier;
                  return (
                    <SelectItem key={tierId} value={tierId}>
                      {t.name} ({formatCurrency(t.price * ((currencyRates as CurrencyRates)[currency] || 1))}/hr)
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        )}

        {serviceConfig.hasSizes && (
          <div className="space-y-2">
            <Label htmlFor={`size-${index}`}>Size</Label>
            <Select value={service.size} onValueChange={(value) => updateService(index, "size", value)}>
              <SelectTrigger id={`size-${index}`}>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(serviceConfig.sizes || {}).map(([sizeId, size]) => {
                  const s = size as AzurePricingSize;
                  return (
                    <SelectItem key={sizeId} value={sizeId}>
                      {s.name} ({formatCurrency(s.price * ((currencyRates as CurrencyRates)[currency] || 1))}/hr)
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        )}

        {serviceConfig.hasOS && (
          <div className="space-y-2">
            <Label htmlFor={`os-${index}`}>Operating System</Label>
            <Select value={service.os} onValueChange={(value) => updateService(index, "os", value)}>
              <SelectTrigger id={`os-${index}`}>
                <SelectValue placeholder="Select OS" />
              </SelectTrigger>
              <SelectContent>
                {serviceConfig.osOptions && serviceConfig.osOptions.map((os: { id: string; name: string }) => (
                  <SelectItem key={os.id} value={os.id}>
                    {os.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {serviceConfig.hasHours && (
          <div className="space-y-2">
            <Label htmlFor={`hours-${index}`}>Hours per day</Label>
            <Input
              id={`hours-${index}`}
              type="number"
              min="1"
              max="24"
              value={service.hours}
              onChange={(e) => updateService(index, "hours", Number.parseInt(e.target.value) || 1)}
            />
          </div>
        )}

        {serviceConfig.hasStorage && (
          <div className="space-y-2">
            <Label htmlFor={`storage-${index}`}>Storage (GB)</Label>
            <Input
              id={`storage-${index}`}
              type="number"
              min="0"
              value={service.storage}
              onChange={(e) => updateService(index, "storage", Number.parseInt(e.target.value) || 0)}
            />
          </div>
        )}

        {serviceConfig.hasBandwidth && (
          <div className="space-y-2">
            <Label htmlFor={`bandwidth-${index}`}>Bandwidth (GB)</Label>
            <Input
              id={`bandwidth-${index}`}
              type="number"
              min="0"
              value={service.bandwidth}
              onChange={(e) => updateService(index, "bandwidth", Number.parseInt(e.target.value) || 0)}
            />
          </div>
        )}

        {/* Options as checkboxes if available */}
        {serviceConfig.hasOptions &&
          Object.entries(serviceConfig.options || {}).map(([optionId, option]) => {
            const opt = option as AzurePricingOption;
            return (
              <div key={optionId} className="flex items-center space-x-2">
                <Checkbox
                  id={`option-${index}-${optionId}`}
                  checked={service.options?.[optionId] || false}
                  onCheckedChange={(checked) => updateService(index, `options.${optionId}`, checked)}
                />
                <Label htmlFor={`option-${index}-${optionId}`} className="cursor-pointer">
                  {opt.name} ({formatCurrency(opt.price * ((currencyRates as CurrencyRates)[currency] || 1))})
                </Label>
              </div>
            );
          })}

        {/* Estimated cost display */}
        <div className="space-y-2 col-span-full">
          <Label>Estimated Cost</Label>
          <div className="h-10 flex items-center font-medium text-lg">
            {formatCurrency(calculateServiceCost(service))}
            <span className="text-sm font-normal ml-1">{billingTerm === "monthly" ? "/month" : "/hour"}</span>
          </div>
        </div>
      </div>
    )
  }

  const filteredServices = azureServices.services.filter((service) => {
    if (searchTerm) {
      return service.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
    return service.category === selectedCategory
  })

  // Helper: Generate CSV from estimate
  function generateCSV(estimate: Estimate): string {
    const header = ["Service Name", "Type", "Region", "Tier", "Size", "Quantity", "Hours", "Storage", "Bandwidth", "Cost"];
    const rows = estimate.services.map((s: SelectedService) => [
      s.name,
      s.type,
      s.region,
      s.tier,
      s.size,
      s.quantity,
      s.hours,
      s.storage,
      s.bandwidth,
      formatCurrency(calculateServiceCost(s))
    ]);
    const csv = [header, ...rows].map(row => row.join(",")).join("\n");
    return csv;
  }

  // Helper: Generate Excel (TSV) from estimate
  function generateExcel(estimate: Estimate): string {
    const header = ["Service Name", "Type", "Region", "Tier", "Size", "Quantity", "Hours", "Storage", "Bandwidth", "Cost"];
    const rows = estimate.services.map((s: SelectedService) => [
      s.name,
      s.type,
      s.region,
      s.tier,
      s.size,
      s.quantity,
      s.hours,
      s.storage,
      s.bandwidth,
      formatCurrency(calculateServiceCost(s))
    ]);
    const tsv = [header, ...rows].map(row => row.join("\t")).join("\n");
    return tsv;
  }

  // Helper: Generate PDF from estimate
  function generatePDF(estimate: Estimate): jsPDF {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(estimate.name, 10, 10);
    doc.setFontSize(12);
    doc.text(`Total: ${formatCurrency(estimate.total)} (${estimate.currency})`, 10, 20);
    let y = 30;
    doc.text("Services:", 10, y);
    y += 8;
    estimate.services.forEach((s: SelectedService, i: number) => {
      doc.text(
        `${i + 1}. ${s.name} | ${s.type} | ${s.region} | ${s.tier} | ${s.size} | Qty: ${s.quantity} | Hours: ${s.hours} | Storage: ${s.storage} | Bandwidth: ${s.bandwidth} | ${formatCurrency(calculateServiceCost(s))}`,
        10,
        y
      );
      y += 8;
      if (y > 270) { doc.addPage(); y = 10; }
    });
    return doc;
  }

  // Helper: Download file
  function downloadFile(filename: string, content: string, type: string): void {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }

  // Helper: Get current estimate for export/share
  function getCurrentEstimate(): Estimate {
    return {
      name: estimateName,
      services: [...selectedServices],
      total: totalEstimate,
      currency,
      billingTerm,
      date: new Date().toISOString(),
      id: Date.now(),
    };
  }

  return (
    <div className="flex min-h-screen">
      {!hideHeaderFooter && Header && <Header />}

      <aside className="w-64 bg-white border-r h-screen sticky top-0 flex flex-col overflow-y-auto">
        <div className="space-y-2">
          {azureServices.categories.map((category) => {
            const isCategorySelected = selectedCategory === category.id || selectedServices.some(s => azureServices.services.find(svc => svc.id === s.id)?.category === category.id);
            return (
              <Button
                key={category.id}
                variant={isCategorySelected ? 'default' : 'outline'}
                className={`w-full justify-start rounded-lg ${isCategorySelected ? 'bg-red-600 text-white' : 'hover:bg-[#fbe9e7]'}`}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setSearchTerm("")
                }}
              >
                {category.name}
              </Button>
            );
          })}
        </div>

        {savedEstimates.length > 0 && (
          <div className="mt-8">
            <h3 className="font-medium mb-2">Saved Estimates</h3>
            <div className="space-y-2">
              {savedEstimates.map((estimate) => (
                <div key={estimate.id} className="flex items-center w-full gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 flex items-center justify-between min-w-0 pr-2"
                    onClick={() => loadEstimate(estimate)}
                  >
                    <span className="flex-1 min-w-0 text-left">
                      <span className="block max-w-[120px] truncate text-ellipsis whitespace-nowrap">{estimate.name}</span>
                      <span className="block text-xs text-gray-500">{new Date(estimate.date).toLocaleDateString()}</span>
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-1 text-red-500 hover:bg-red-50 flex-shrink-0"
                    aria-label="Delete Estimate"
                    onClick={() => {
                      setSavedEstimates(savedEstimates.filter(e => e.id !== estimate.id));
                      setToastMessage(`Estimate "${estimate.name}" deleted.`);
                      setShowToast(true);
                      setTimeout(() => setShowToast(false), 3000);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>

      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className={`cursor-pointer rounded-lg transition-colors border border-gray-200 ${selectedServices.some(s => s.id === service.id) ? 'bg-red-600 text-white' : 'hover:border-[#d32f2f] hover:bg-[#fbe9e7] text-gray-900'}`}
            >
              <CardContent className="p-6" onClick={() => addService(service.id, service.name, service.type)}>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{service.icon}</div>
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="text-sm text-gray-500">Click to add</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8 px-6 py-4 rounded-lg shadow-sm border border-gray-200 bg-white" ref={estimateRef}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Estimate</CardTitle>
            <div className="flex space-x-2">
              <Dialog open={isExportDialogOpen} onOpenChange={setIsExportDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Export Estimate</DialogTitle>
                    <DialogDescription>Choose a format to export your estimate.</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <input
                        type="radio"
                        id="pdf-format"
                        name="format"
                        value="pdf"
                        checked={exportFormat === "pdf"}
                        onChange={() => setExportFormat("pdf")}
                      />
                      <Label htmlFor="pdf-format">PDF Document</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <input
                        type="radio"
                        id="csv-format"
                        name="format"
                        value="csv"
                        checked={exportFormat === "csv"}
                        onChange={() => setExportFormat("csv")}
                      />
                      <Label htmlFor="csv-format">CSV Spreadsheet</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="excel-format"
                        name="format"
                        value="excel"
                        checked={exportFormat === "excel"}
                        onChange={() => setExportFormat("excel")}
                      />
                      <Label htmlFor="excel-format">Excel Spreadsheet</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsExportDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleExport}>
                      Export
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Share Estimate</DialogTitle>
                    <DialogDescription>Enter an email address to share this estimate.</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Label htmlFor="share-email" className="mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="share-email"
                      type="email"
                      value={shareEmail}
                      onChange={(e) => setShareEmail(e.target.value)}
                      placeholder="colleague@example.com"
                    />
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsShareDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button  onClick={handleShare}>
                      Share
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Save Estimate Dialog */}
              <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Estimate</DialogTitle>
                    <DialogDescription>Enter a name for your estimate.</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Label htmlFor="estimate-name" className="mb-2 block">
                      Estimate Name
                    </Label>
                    <Input
                      id="estimate-name"
                      type="text"
                      value={estimateName}
                      onChange={(e) => setEstimateName(e.target.value)}
                      placeholder="My Azure Estimate"
                    />
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsSaveDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button  onClick={handleSaveEstimate}>
                      Save
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {selectedServices.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Calculator className="mx-auto h-12 w-12 mb-4" />
                <p>Your estimate is empty. Add a service to get started.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {selectedServices.map((service, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardHeader className="bg-gray-50 flex flex-row items-center justify-between p-4">
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mr-2 p-0 h-8 w-8"
                          onClick={() => toggleServiceExpansion(index)}
                        >
                          {expandedServices[index] ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                        <CardTitle className="text-lg font-medium">{service.name}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-medium">
                          {formatCurrency(calculateServiceCost(service))}
                          <span className="text-xs font-normal ml-1">
                            {billingTerm === "monthly" ? "/month" : "/hour"}
                          </span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeService(index)}
                          className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    {expandedServices[index] && (
                      <CardContent className="p-6">{renderServiceConfiguration(service, index)}</CardContent>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-gray-50 border-t flex items-center gap-4 justify-between w-full">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => setShowSummary(!showSummary)}>
                {showSummary ? "Hide Summary" : "Show Summary"}
              </Button>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="min-h-[48px] min-w-[160px]">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                  <SelectItem value="INR">INR (₹)</SelectItem>
                  <SelectItem value="JPY">JPY (¥)</SelectItem>
                  <SelectItem value="AUD">AUD (A$)</SelectItem>
                  <SelectItem value="CAD">CAD (C$)</SelectItem>
                  <SelectItem value="CHF">CHF (Fr)</SelectItem>
                  <SelectItem value="CNY">CNY (¥)</SelectItem>
                  <SelectItem value="SEK">SEK (kr)</SelectItem>
                </SelectContent>
              </Select>
              <Select value={billingTerm} onValueChange={setBillingTerm}>
                <SelectTrigger className="min-h-[48px] min-w-[160px]">
                  <SelectValue placeholder="Billing term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
              <Button
                className="disabled:opacity-50 pointer-events-none"
                onClick={() => setIsSaveDialogOpen(true)}
                disabled={selectedServices.length === 0}
              >
                Save Estimate
              </Button>
            </div>
            <div className="text-xl font-bold">
              Total: {formatCurrency(totalEstimate)}
              <span className="text-sm font-normal ml-1">{billingTerm === "monthly" ? "/month" : "/hour"}</span>
            </div>
          </CardFooter>
        </Card>

        {showSummary && (
          <Card className="mb-8 px-6 py-4 rounded-lg shadow-sm border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle>Cost Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedServices.map((service, index) => (
                  <div key={index} className="flex justify-between py-2 border-b">
                    <div>{service.name}</div>
                    <div className="font-medium">
                      {formatCurrency(calculateServiceCost(service))}
                      <span className="text-xs font-normal ml-1">
                        {billingTerm === "monthly" ? "/month" : "/hour"}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between pt-4 font-bold">
                  <div>Total</div>
                  <div>
                    {formatCurrency(totalEstimate)}
                    <span className="text-xs font-normal ml-1">
                      {billingTerm === "monthly" ? "/month" : "/hour"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {!hideHeaderFooter && Footer && <Footer />}

      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          {toastMessage}
        </div>
      )}
    </div>
  )
}
