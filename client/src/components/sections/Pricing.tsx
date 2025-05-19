import { PricingCard } from "@/components/ui/pricing-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check, Cloud, User, Cpu, MemoryStick, HardDrive, RefreshCcw, Clock, Phone } from "lucide-react";
import React, { useState, Suspense, lazy } from "react";
import { productCategories } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

interface PricingProductProps {
  title: string;
  description: string;
  productName: string;
  selectedTallyService?: string;
  setSelectedTallyService?: (slug: string) => void;
  selectedBusyCategory?: string;
  setSelectedBusyCategory?: (slug: string) => void;
}

const durationTabs = [
  { key: "1_month", label: "1 Month" },
  { key: "3_months", label: "3 Months" },
  { key: "12_months", label: "12 Months" },
  { key: "lifetime", label: "Lifetime" }
] as const;

type TallyDuration = typeof durationTabs[number]["key"];

const busyTabs = [
  { key: "perpetual", label: "Perpetual" },
  { key: "subscription", label: "Subscription" }
] as const;
type BusyTab = typeof busyTabs[number]["key"];
const busyUserTypes = [
  { key: "single", label: "Single User" },
  { key: "multi", label: "Multi-User" }
] as const;
type BusyUserType = typeof busyUserTypes[number]["key"];

const zohoPricing = {
  starter: {
    yearly: [
      {
        name: 'Standard',
        description: 'Efficiently organize your transactions, accounts, reports, and books',
        oldPrice: '₹899',
        price: '₹749',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Free +', bold: true },
          { name: 'Manage e-invoices and payments', included: true },
          { name: 'Progress invoicing', included: true, badge: 'NEW' },
          { name: 'Track expenses and bills', included: true },
          { name: 'Automate payment reminders', included: true },
        ]
      },
      {
        name: 'Professional',
        description: 'Confidently take on projects, track your inventory, and handle purchases',
        oldPrice: '₹1,799',
        price: '₹1,499',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        mostPopular: true,
        features: [
          { name: 'Everything in Standard +', bold: true },
          { name: 'Bill timesheets', included: true },
          { name: 'Project profitability', included: true },
          { name: 'Manage retainers', included: true },
          { name: 'Create price lists', included: true },
          { name: 'Setup sales and purchase approvals', included: true },
        ]
      },
      {
        name: 'Premium',
        description: 'Enhanced customization and automation to streamline business processes',
        oldPrice: '₹3,599',
        price: '₹2,999',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Professional +', bold: true },
          { name: 'Fixed asset management', included: true, badge: 'NEW' },
          { name: 'Manage payroll', included: true },
          { name: 'Prepare and review budgets', included: true },
          { name: 'Cashflow forecasting', included: true },
          { name: 'Enable self-service vendor portal', included: true },
        ]
      },
      {
        name: 'Elite',
        description: 'Advanced accounting bundled with full-fledged inventory management',
        oldPrice: '₹5,999',
        price: '₹4,999',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Premium +', bold: true },
          { name: 'Dashboard customization', included: true },
          { name: 'Advanced Inventory Control', included: false, italic: true },
          { name: 'Manage warehouses', included: true },
          { name: 'Composite items', included: true },
          { name: 'Track serial numbers', included: true },
        ]
      }
    ],
    monthly: [
      {
        name: 'Standard',
        description: 'Efficiently organize your transactions, accounts, reports, and books',
        oldPrice: '₹899',
        price: '₹899',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Free +', bold: true },
          { name: 'Manage e-invoices and payments', included: true },
          { name: 'Progress invoicing', included: true, badge: 'NEW' },
          { name: 'Track expenses and bills', included: true },
          { name: 'Automate payment reminders', included: true },
        ]
      },
      {
        name: 'Professional',
        description: 'Confidently take on projects, track your inventory, and handle purchases',
        oldPrice: '₹1,799',
        price: '₹1,799',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        mostPopular: true,
        features: [
          { name: 'Everything in Standard +', bold: true },
          { name: 'Bill timesheets', included: true },
          { name: 'Project profitability', included: true },
          { name: 'Manage retainers', included: true },
          { name: 'Create price lists', included: true },
          { name: 'Setup sales and purchase approvals', included: true },
        ]
      },
      {
        name: 'Premium',
        description: 'Enhanced customization and automation to streamline business processes',
        oldPrice: '₹3,599',
        price: '₹3,599',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Professional +', bold: true },
          { name: 'Fixed asset management', included: true, badge: 'NEW' },
          { name: 'Manage payroll', included: true },
          { name: 'Prepare and review budgets', included: true },
          { name: 'Cashflow forecasting', included: true },
          { name: 'Enable self-service vendor portal', included: true },
        ]
      },
      {
        name: 'Elite',
        description: 'Advanced accounting bundled with full-fledged inventory management',
        oldPrice: '₹5,999',
        price: '₹5,999',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Premium +', bold: true },
          { name: 'Dashboard customization', included: true },
          { name: 'Advanced Inventory Control', included: false, italic: true },
          { name: 'Manage warehouses', included: true },
          { name: 'Composite items', included: true },
          { name: 'Track serial numbers', included: true },
        ]
      }
    ]
  },
  beyond: {
    yearly: [
      {
        name: 'Professional',
        description: 'Confidently take on projects, track your inventory, and handle purchases',
        oldPrice: '₹1,799',
        price: '₹1,499',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        mostPopular: true,
        features: [
          { name: 'Everything in Standard +', bold: true },
          { name: 'Bill timesheets', included: true },
          { name: 'Project profitability', included: true },
          { name: 'Manage retainers', included: true },
          { name: 'Create price lists', included: true },
          { name: 'Setup sales and purchase approvals', included: true },
        ]
      },
      {
        name: 'Premium',
        description: 'Enhanced customization and automation to streamline business processes',
        oldPrice: '₹3,599',
        price: '₹2,999',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Professional +', bold: true },
          { name: 'Fixed asset management', included: true, badge: 'NEW' },
          { name: 'Manage payroll', included: true },
          { name: 'Prepare and review budgets', included: true },
          { name: 'Cashflow forecasting', included: true },
          { name: 'Enable self-service vendor portal', included: true },
        ]
      },
      {
        name: 'Elite',
        description: 'Advanced accounting bundled with full-fledged inventory management',
        oldPrice: '₹5,999',
        price: '₹4,999',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Premium +', bold: true },
          { name: 'Dashboard customization', included: true },
          { name: 'Advanced Inventory Control', included: false, italic: true },
          { name: 'Manage warehouses', included: true },
          { name: 'Composite items', included: true },
          { name: 'Track serial numbers', included: true },
        ]
      },
      {
        name: 'Ultimate',
        description: 'Gain deeper insights with advanced business intelligence capabilities',
        oldPrice: '₹9,599',
        price: '₹7,999',
        priceDescription: 'Price/Org/Month Billed Annually',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Elite +', bold: true },
          { name: 'Advanced analytics', included: true },
          { name: 'Custom dashboards', included: true },
          { name: 'Data warehousing', included: true },
          { name: 'AI-powered insights', included: true },
        ]
      }
    ],
    monthly: [
      {
        name: 'Professional',
        description: 'Confidently take on projects, track your inventory, and handle purchases',
        oldPrice: '₹1,799',
        price: '₹1,799',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        mostPopular: true,
        features: [
          { name: 'Everything in Standard +', bold: true },
          { name: 'Bill timesheets', included: true },
          { name: 'Project profitability', included: true },
          { name: 'Manage retainers', included: true },
          { name: 'Create price lists', included: true },
          { name: 'Setup sales and purchase approvals', included: true },
        ]
      },
      {
        name: 'Premium',
        description: 'Enhanced customization and automation to streamline business processes',
        oldPrice: '₹3,599',
        price: '₹3,599',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Professional +', bold: true },
          { name: 'Fixed asset management', included: true, badge: 'NEW' },
          { name: 'Manage payroll', included: true },
          { name: 'Prepare and review budgets', included: true },
          { name: 'Cashflow forecasting', included: true },
          { name: 'Enable self-service vendor portal', included: true },
        ]
      },
      {
        name: 'Elite',
        description: 'Advanced accounting bundled with full-fledged inventory management',
        oldPrice: '₹5,999',
        price: '₹5,999',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Premium +', bold: true },
          { name: 'Dashboard customization', included: true },
          { name: 'Advanced Inventory Control', included: false, italic: true },
          { name: 'Manage warehouses', included: true },
          { name: 'Composite items', included: true },
          { name: 'Track serial numbers', included: true },
        ]
      },
      {
        name: 'Ultimate',
        description: 'Gain deeper insights with advanced business intelligence capabilities',
        oldPrice: '₹9,599',
        price: '₹9,599',
        priceDescription: 'Price/Org/Month',
        buttonText: 'Contact Us',
        compare: true,
        features: [
          { name: 'Everything in Elite +', bold: true },
          { name: 'Advanced analytics', included: true },
          { name: 'Custom dashboards', included: true },
          { name: 'Data warehousing', included: true },
          { name: 'AI-powered insights', included: true },
        ]
      }
    ]
  }
};

const handleAzureCalculator = () => {
  window.open('https://azure.microsoft.com/en-in/pricing/calculator/?ef_id=k_Cj0KCQjwxJvBBhDuARIsAGUgNfgGwGYCrvY_Hz2fz8J6JvXJgQjn3-BP09vP6lniV8VypWw3G6A96nEaAniLEALw_wcB_k&OCID=AIDcmmf1elj9v5_SEM_k_Cj0KCQjwxJvBBhDuARIsAGUgNfgGwGYCrvY_Hz2fz8J6JvXJgQjn3-BP09vP6lniV8VypWw3G6A96nEaAniLEALw_wcB_k&gad_source=1&gad_campaignid=1634424385&gbraid=0AAAAADcJh_tGlntVhs1tru7qE9QWmzcHf&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfgGwGYCrvY_Hz2fz8J6JvXJgQjn3-BP09vP6lniV8VypWw3G6A96nEaAniLEALw_wcB', '_blank');
};

const handleTrial = () => {
  console.log("Start free trial clicked");
};

const handleContactSales = () => {
  console.log("Contact sales clicked");
};

const plans = {
  busy: {
    desktop: {
      perpetual: {
        single: [
          {
            name: "BASIC",
            price: "₹9,999",
            buttonText: "Contact Us",
            features: [
              "Create Accounting Vouchers: Unlimited Invoices, Unlimited – Receipts, Inventory, JVs etc",
              "Billing / Invoicing: Digitally Sign Invoices & Reports*, Fully User-Configurable Invoicing",
              "Accounting: Ledger Reconciliation, All Books of Accounts and Final Results, Multi Company / Multi Financial Year",
              "Inventory: Multiple Godown Inventory",
              "Receivables & Payables: Configurable Payment Reminders",
              "Data Security & User-wise Rights"
            ]
          },
          {
            name: "STANDARD",
            price: "₹14,999",
            buttonText: "Contact Us",
            mostPopular: true,
            features: [
              "All Features of BASIC",
              "GST: GST e-returns in JSON, Direct Upload of GSTR-1/ IFF, Auto E-Invoice & E-Way Bill Generation*, Auto Download & Reconcile GSTR 1/3B/2A/2B*, Check Party Return Status*",
              "Billing/Invoicing: Orders, Quotations, Dynamic Payment QR Code, POS Screen for Fast Billing"
            ]
          },
          {
            name: "ENTERPRISE",
            price: "₹19,999",
            buttonText: "Contact Us",
            features: [
              "All Features of STANDARD",
              "Data Security: Voucher/Master Approval & Rejection",
              "Other Features: Message Center, Payroll Management, Indent Management, Call Management",
              "GST-Segment: Managing Multiple GSTINs"
            ]
          }
        ],
        multi: [
          {
            name: "BASIC",
            price: "₹24,999",
            buttonText: "Contact Us",
            features: [
              "Create Accounting Vouchers: Unlimited Invoices, Unlimited – Receipts, Inventory, JVs etc",
              "Billing / Invoicing: Digitally Sign Invoices & Reports*, Fully User-Configurable Invoicing",
              "Accounting: Ledger Reconciliation, All Books of Accounts and Final Results, Multi Company / Multi Financial Year",
              "Inventory: Multiple Godown Inventory",
              "Receivables & Payables: Configurable Payment Reminders",
              "Data Security & User-wise Rights"
            ]
          },
          {
            name: "STANDARD",
            price: "₹39,999",
            buttonText: "Contact Us",
            mostPopular: true,
            features: [
              "All Features of BASIC",
              "GST: GST e-returns in JSON, Direct Upload of GSTR-1/ IFF, Auto E-Invoice & E-Way Bill Generation*, Auto Download & Reconcile GSTR 1/3B/2A/2B*, Check Party Return Status*",
              "Billing/Invoicing: Orders, Quotations, Dynamic Payment QR Code, POS Screen for Fast Billing"
            ]
          },
          {
            name: "ENTERPRISE",
            price: "₹57,999",
            buttonText: "Contact Us",
            features: [
              "All Features of STANDARD",
              "Data Security: Voucher/Master Approval & Rejection",
              "Other Features: Message Center, Payroll Management, Indent Management, Call Management",
              "GST-Segment: Managing Multiple GSTINs"
            ]
          }
        ]
      },
      subscription: {
        single: [
          {
            name: "BLUE",
            price: "₹4,999/year",
            buttonText: "Contact Us",
            features: [
              "Create Accounting Vouchers: Unlimited Invoices, Unlimited – Receipts, Inventory, JVs etc",
              "Billing / Invoicing: Digitally Sign Invoices & Reports*, Fully User-Configurable Invoicing",
              "Accounting: Ledger Reconciliation, All Books of Accounts and Final Results, Multi Company / Multi Financial Year",
              "Inventory: Multiple Godown Inventory",
              "Receivables & Payables: Configurable Payment Reminders",
              "Data Security & User-wise Rights"
            ]
          },
          {
            name: "SAFFRON",
            price: "₹6,999/year",
            buttonText: "Contact Us",
            mostPopular: true,
            features: [
              "All Features of BLUE",
              "GST: GST e-returns in JSON, Direct Upload of GSTR-1/ IFF, Auto E-Invoice & E-Way Bill Generation*, Auto Download & Reconcile GSTR 1/3B/2A/2B*, Check Party Return Status*",
              "Billing/Invoicing: Orders, Quotations, Dynamic Payment QR Code, POS Screen for Fast Billing"
            ]
          },
          {
            name: "EMERALD",
            price: "₹9,999/year",
            buttonText: "Contact Us",
            features: [
              "All Features of SAFFRON",
              "Data Security: Voucher/Master Approval & Rejection",
              "Other Features: Message Center, Payroll Management, Indent Management, Call Management",
              "GST-Segment: Managing Multiple GSTINs"
            ]
          }
        ],
        multi: [
          {
            name: "BLUE",
            price: "₹12,499/year",
            buttonText: "Contact Us",
            features: [
              "Create Accounting Vouchers: Unlimited Invoices, Unlimited – Receipts, Inventory, JVs etc",
              "Billing / Invoicing: Digitally Sign Invoices & Reports*, Fully User-Configurable Invoicing",
              "Accounting: Ledger Reconciliation, All Books of Accounts and Final Results, Multi Company / Multi Financial Year",
              "Inventory: Multiple Godown Inventory",
              "Receivables & Payables: Configurable Payment Reminders",
              "Data Security & User-wise Rights"
            ]
          },
          {
            name: "SAFFRON",
            price: "₹17,999/year",
            buttonText: "Contact Us",
            mostPopular: true,
            features: [
              "All Features of BLUE",
              "GST: GST e-returns in JSON, Direct Upload of GSTR-1/ IFF, Auto E-Invoice & E-Way Bill Generation*, Auto Download & Reconcile GSTR 1/3B/2A/2B*, Check Party Return Status*",
              "Billing/Invoicing: Orders, Quotations, Dynamic Payment QR Code, POS Screen for Fast Billing"
            ]
          },
          {
            name: "EMERALD",
            price: "₹24,999/year",
            buttonText: "Contact Us",
            features: [
              "All Features of SAFFRON",
              "Data Security: Voucher/Master Approval & Rejection",
              "Other Features: Message Center, Payroll Management, Indent Management, Call Management",
              "GST-Segment: Managing Multiple GSTINs"
            ]
          }
        ]
      }
    },
    mobile: [
      {
        name: "Mobile (1-4 Devices)",
        description: "BUSY Mobile App for 1-4 Devices",
        price: "₹2,499/year",
        features: [
          "Order taking & invoicing on the go",
          "Ledger sharing",
          "WhatsApp sharing",
          "Barcode/QR code billing",
          "Auto cloud sync",
          "Collect payments on the go"
        ]
      },
      {
        name: "Mobile (5+ Devices)",
        description: "BUSY Mobile App for 5 & More Devices",
        price: "₹1,999/year",
        features: [
          "Order taking & invoicing on the go",
          "Ledger sharing",
          "WhatsApp sharing",
          "Barcode/QR code billing",
          "Auto cloud sync",
          "Collect payments on the go"
        ]
      }
    ],
    online: {
      access: {
        annually: {
          price: "₹10,800",
          additionalCompany: "₹7,200",
          buttonText: "Contact Us"
        },
        quarterly: {
          price: "₹4,500",
          additionalCompany: "₹2,250",
          buttonText: "Contact Us"
        }
      },
      sql: {
        annually: {
          price: "₹16,800",
          additionalCompany: "₹13,200",
          buttonText: "Contact Us"
        },
        quarterly: {
          price: "₹5,250",
          additionalCompany: "₹3,750",
          buttonText: "Contact Us"
        }
      }
    },
    recom: [
      {
        name: "Recom (Orders up to 12,000)",
        description: "BUSY Recom for up to 12,000 orders/year",
        price: "₹36,000/year",
        features: [
          "E-commerce reconciliation",
          "Order/return/payment tracking",
          "GST management",
          "Integrated accounting",
          "Inventory management",
          "Business reports"
        ]
      },
      {
        name: "Recom (Orders up to 30,000)",
        description: "BUSY Recom for up to 30,000 orders/year",
        price: "₹60,000/year",
        features: [
          "E-commerce reconciliation",
          "Order/return/payment tracking",
          "GST management",
          "Integrated accounting",
          "Inventory management",
          "Business reports"
        ]
      },
      {
        name: "Recom (Orders up to 60,000)",
        description: "BUSY Recom for up to 60,000 orders/year",
        price: "₹96,000/year",
        features: [
          "E-commerce reconciliation",
          "Order/return/payment tracking",
          "GST management",
          "Integrated accounting",
          "Inventory management",
          "Business reports"
        ]
      },
      {
        name: "Recom (Orders up to 1,20,000)",
        description: "BUSY Recom for up to 1,20,000 orders/year",
        price: "₹1,44,000/year",
        features: [
          "E-commerce reconciliation",
          "Order/return/payment tracking",
          "GST management",
          "Integrated accounting",
          "Inventory management",
          "Business reports"
        ]
      }
    ]
  },
  tally: {
    "aws": [
      {
        name: "Personal Pack",
        description: "1 user, 2 vCPU, 4GB RAM, 5GB storage, 5GB backup, Unlimited hours",
        price: "₹600",
        features: [
          "1 user allowed",
          "2 Virtual CPUs",
          "4GB RAM",
          "5GB Storage space",
          "5GB Backup storage",
          "Unlimited hours per month",
          "₹600 per user/month"
        ]
      },
      {
        name: "Regular Pack",
        description: "2 users, 2 vCPU, 4GB RAM, 5GB storage, 5GB backup, Unlimited hours",
        price: "₹600",
        features: [
          "2 users allowed",
          "2 Virtual CPUs",
          "4GB RAM",
          "5GB Storage space",
          "5GB Backup storage",
          "Unlimited hours per month",
          "₹600 per user/month"
        ]
      },
      {
        name: "Regular Plus Pack",
        description: "4 users, 2 vCPU, 8GB RAM, 10GB storage, 10GB backup, Unlimited hours",
        price: "₹600",
        features: [
          "4 users allowed",
          "2 Virtual CPUs",
          "8GB RAM",
          "10GB Storage space",
          "10GB Backup storage",
          "Unlimited hours per month",
          "₹600 per user/month"
        ]
      },
      {
        name: "Regular Pro Pack",
        description: "8 users, 4 vCPU, 16GB RAM, 20GB storage, 20GB backup, Unlimited hours",
        price: "₹600",
        features: [
          "8 users allowed",
          "4 Virtual CPUs",
          "16GB RAM",
          "20GB Storage space",
          "20GB Backup storage",
          "Unlimited hours per month",
          "₹600 per user/month"
        ]
      },
      {
        name: "Performance Pack",
        description: "12 users, 8 vCPU, 32GB RAM, 40GB storage, 40GB backup, Unlimited hours",
        price: "₹450",
        features: [
          "12 users allowed",
          "8 Virtual CPUs",
          "32GB RAM",
          "40GB Storage space",
          "40GB Backup storage",
          "Unlimited hours per month",
          "₹450 per user/month"
        ]
      },
      {
        name: "Performance Plus Pack",
        description: "16 users, 8 vCPU, 32GB RAM, 40GB storage, 40GB backup, Unlimited hours",
        price: "₹450",
        features: [
          "16 users allowed",
          "8 Virtual CPUs",
          "32GB RAM",
          "40GB Storage space",
          "40GB Backup storage",
          "Unlimited hours per month",
          "₹450 per user/month"
        ]
      }
    ],
    "new-products": [
      {
        name: "TallyPrime Silver",
        description: "Suitable for businesses that need TallyPrime on a single PC",
        price: "₹ 22,500",
        oldPrice: "₹ 18,000",
        discount: "Get 10% off",
        effective: "Effective price 675/Month",
        gst: "+18% GST (₹ 1,458)",
        buyNow: true,
        features: [
          "Fully loaded with all Features",
          "Free access to TSS Features",
          "Invoicing & Accounting",
          "Inventory Management",
          "GST and Compliance",
          "Banking and Cashflow",
          "e-Invoicing and e-way bills",
          "Connected Services"
        ]
      },
      {
        name: "TallyPrime Gold",
        description: "Perfect for businesses needing multi-user access on multiple PCs",
        price: "₹ 67,500",
        oldPrice: "₹ 54,000",
        discount: "Get 10% off",
        effective: "Effective price 2025/Month",
        gst: "+18% GST (₹ 4,374)",
        buyNow: true,
        features: [
          "Fully loaded with all Features",
          "Free access to TSS Features",
          "Invoicing & Accounting",
          "Inventory Management",
          "GST and Compliance",
          "Banking and Cashflow",
          "e-Invoicing and e-way bills",
          "Connected Services"
        ]
      },
      {
        name: "TallyPrime Server",
        description: "Enterprise-grade solution for large organizations",
        price: "₹ 2,70,000",
        oldPrice: "₹ 2,70,000",
        discount: "Get 10% off",
        effective: "Effective price 4050/Month",
        gst: "+18% GST (₹ 8,748)",
        buyNow: true,
        features: [
          "All features of TallyPrime Gold",
          "Unlimited users",
          "Centralized data management",
          "Advanced security features",
          "24/7 technical support",
          "Custom reporting",
          "API integration",
          "Cloud backup"
        ]
      }
    ],
    "software-services": [
      {
        name: "Tally Software Services - Silver",
        description: "Basic software services package",
        price: "₹ 4,500",
        gst: "+18% GST (₹ 900)",
        buyNow: true,
        features: [
          "Basic installation support",
          "Email support",
          "Software updates",
          "Basic training",
          "Data backup assistance",
          "GST compliance support"
        ]
      },
      {
        name: "Tally Software Services - Gold",
        description: "Comprehensive software services package",
        price: "₹ 13,500",
        gst: "+18% GST (₹ 1,800)",
        buyNow: true,
        features: [
          "Priority installation support",
          "24/7 phone support",
          "Software updates",
          "Advanced training",
          "Data backup & recovery",
          "GST compliance support",
          "Custom report creation",
          "Performance optimization"
        ]
      },
      {
        name: "Tally Software Services - Auditors Edition",
        description: "Specialized services for auditors",
        price: "₹ 6,750",
        gst: "+18% GST (₹ 2,700)",
        buyNow: true,
        features: [
          "All Gold features",
          "Audit trail support",
          "Custom audit reports",
          "Data analysis tools",
          "Compliance verification",
          "Training for audit teams",
          "Dedicated support manager"
        ]
      }
    ],
    "upgrades": [
      {
        name: "Pre Tally.ERP 9 Silver to TallyPrime Silver",
        description: "Upgrade to TallyPrime Silver",
        price: "₹ 9,000",
        gst: "+18% GST (₹ 729)",
        buyNow: true,
        features: [
          "Latest features",
          "Data migration",
          "Basic training",
          "Email support",
          "Software updates"
        ]
      },
      {
        name: "Pre Tally.ERP 9 Gold to TallyPrime Gold",
        description: "Upgrade to TallyPrime Gold",
        price: "₹ 27,000",
        gst: "+18% GST (₹ 2,187)",
        buyNow: true,
        features: [
          "Latest features",
          "Data migration",
          "Advanced training",
          "Priority support",
          "Software updates"
        ]
      },
      {
        name: "Pre Tally.ERP 9 Silver to TallyPrime Gold",
        description: "Upgrade to TallyPrime Gold",
        price: "₹ 4,95,000",
        gst: "+18% GST (₹ 2,916)",
        buyNow: true,
        features: [
          "Multi-user access",
          "Data migration",
          "Advanced training",
          "Priority support",
          "Software updates"
        ]
      },
      {
        name: "TallyPrime Silver to TallyPrime Gold",
        description: "Upgrade from Prime Silver to Prime Gold",
        price: "₹ 45,000",
        gst: "+18% GST (₹ 2,916)",
        buyNow: true,
        features: [
          "Multi-user access",
          "Data migration",
          "Advanced training",
          "Priority support",
          "Software updates"
        ]
      }
    ],
    "rental": [
      {
        name: "TallyPrime Silver",
        description: "Monthly Rental",
        price: "₹ 750",
        gst: "+18% GST (₹ 135)",
        buyNow: true,
        features: [
          "Single user access",
          "All Silver features",
          "Cloud backup",
          "Email support",
          "Software updates"
        ]
      },
      {
        name: "TallyPrime Gold",
        description: "Monthly Rental",
        price: "₹ 2,250",
        gst: "+18% GST (₹ 405)",
        buyNow: true,
        features: [
          "Multi-user access",
          "All Gold features",
          "Cloud backup",
          "Priority support",
          "Software updates"
        ]
      },
      {
        name: "Shopper 9 Diamond",
        description: "Monthly Rental",
        price: "₹ 1,500",
        gst: "+18% GST (₹ 270)",
        buyNow: true,
        features: [
          "Retail-specific features",
          "Inventory management",
          "Billing & invoicing",
          "Customer management",
          "Basic support"
        ]
      }
    ],
    "virtual-user": [
      {
        name: "Tally Virtual User",
        description: "Virtual user solution for remote access",
        price: "₹ 1,200",
        gst: "+18% GST (₹ 270)",
        buyNow: true,
        features: [
          "Remote access",
          "Secure connection",
          "Data synchronization",
          "Basic support",
          "Software updates"
        ]
      }
    ]
  },
  "ms-azure": [
    {
      name: "Basic",
      description: "For startups",
      price: "$50",
      period: "/month",
      popular: false,
      buttonText: "Contact Us",
      buttonAction: handleTrial,
      features: [
        { name: "2 Virtual CPUs", included: true },
        { name: "8 GB RAM", included: true },
        { name: "100 GB Storage", included: true },
        { name: "Basic Support", included: true },
        { name: "Advanced Networking", included: false },
        { name: "Dedicated Support", included: false },
      ]
    },
    {
      name: "Standard",
      description: "For growing companies",
      price: "$100",
      period: "/month",
      popular: true,
      buttonText: "Contact Us",
      buttonAction: handleTrial,
      features: [
        { name: "4 Virtual CPUs", included: true },
        { name: "16 GB RAM", included: true },
        { name: "250 GB Storage", included: true },
        { name: "Standard Support", included: true },
        { name: "Advanced Networking", included: true },
        { name: "Dedicated Support", included: false },
      ]
    },
    {
      name: "Premium",
      description: "For enterprises",
      price: "$200",
      period: "/month",
      popular: false,
      buttonText: "Contact Us",
      buttonAction: handleContactSales,
      features: [
        { name: "8 Virtual CPUs", included: true },
        { name: "32 GB RAM", included: true },
        { name: "500 GB Storage", included: true },
        { name: "Priority Support", included: true },
        { name: "Advanced Networking", included: true },
        { name: "Dedicated Support", included: true },
      ]
    }
  ],
  "zoho": [
    {
      name: "Standard",
      description: "Efficiently organize your transactions, accounts, reports, and books",
      oldPrice: "₹899",
      price: "₹749",
      priceDescription: "Price/Org/Month Billed Annually",
      buttonText: "Contact Us",
      compare: true,
      features: [
        { name: "Everything in Free +", bold: true },
        { name: "Manage e-invoices and payments", included: true },
        { name: "Progress invoicing", included: true, badge: 'NEW' },
        { name: "Track expenses and bills", included: true },
        { name: "Automate payment reminders", included: true },
      ]
    },
    {
      name: "Professional",
      description: "Confidently take on projects, track your inventory, and handle purchases",
      oldPrice: "₹1,799",
      price: "₹1,499",
      priceDescription: "Price/Org/Month Billed Annually",
      buttonText: "Contact Us",
      compare: true,
      mostPopular: true,
      features: [
        { name: "Everything in Standard +", bold: true },
        { name: "Bill timesheets", included: true },
        { name: "Project profitability", included: true },
        { name: "Manage retainers", included: true },
        { name: "Create price lists", included: true },
        { name: "Setup sales and purchase approvals", included: true },
      ]
    },
    {
      name: "Premium",
      description: "Enhanced customization and automation to streamline business processes",
      oldPrice: "₹3,599",
      price: "₹2,999",
      priceDescription: "Price/Org/Month Billed Annually",
      buttonText: "Contact Us",
      compare: true,
      features: [
        { name: "Everything in Professional +", bold: true },
        { name: "Fixed asset management", included: true, badge: 'NEW' },
        { name: "Manage payroll", included: true },
        { name: "Prepare and review budgets", included: true },
        { name: "Cashflow forecasting", included: true },
        { name: "Enable self-service vendor portal", included: true },
      ]
    },
    {
      name: "Elite",
      description: "Advanced accounting bundled with full-fledged inventory management",
      oldPrice: "₹5,999",
      price: "₹4,999",
      priceDescription: "Price/Org/Month Billed Annually",
      buttonText: "Contact Us",
      compare: true,
      features: [
        { name: "Everything in Premium +", bold: true },
        { name: "Dashboard customization", included: true },
        { name: "Advanced Inventory Control", included: false, italic: true },
        { name: "Manage warehouses", included: true },
        { name: "Composite items", included: true },
        { name: "Track serial numbers", included: true },
      ]
    }
  ],
  default: [
    {
      name: "Starter",
      description: "For individuals",
      price: "$29",
      period: "/month",
      popular: false,
      buttonText: "Contact Us",
      buttonAction: handleTrial,
      features: [
        { name: "Core Features", included: true },
        { name: "Limited Storage", included: true },
        { name: "Basic Support", included: true },
        { name: "2 Projects", included: true },
        { name: "Advanced Tools", included: false },
        { name: "API Access", included: false },
      ]
    },
    {
      name: "Professional",
      description: "For small teams",
      price: "$99",
      period: "/month",
      popular: true,
      buttonText: "Contact Us",
      buttonAction: handleTrial,
      features: [
        { name: "All Features", included: true },
        { name: "Unlimited Storage", included: true },
        { name: "Priority Support", included: true },
        { name: "10 Projects", included: true },
        { name: "Advanced Tools", included: true },
        { name: "API Access", included: true },
      ]
    },
    {
      name: "Enterprise",
      description: "For large teams",
      price: "$299",
      period: "/month",
      popular: false,
      buttonText: "Contact Us",
      buttonAction: handleContactSales,
      features: [
        { name: "All Features", included: true },
        { name: "Unlimited Storage", included: true },
        { name: "Dedicated Support", included: true },
        { name: "Unlimited Projects", included: true },
        { name: "Advanced Tools", included: true },
        { name: "API Access", included: true },
      ]
    }
  ]
};

// 1. Define a helper to get icons for features (for all cards)
const featureIcon = (feature: string, idx: number) => {
  if (feature.toLowerCase().includes('user')) return <User className="h-4 w-4 text-red-500" />;
  if (feature.toLowerCase().includes('cpu')) return <Cpu className="h-4 w-4 text-red-500" />;
  if (feature.toLowerCase().includes('ram')) return <MemoryStick className="h-4 w-4 text-red-500" />;
  if (feature.toLowerCase().includes('storage')) return <HardDrive className="h-4 w-4 text-red-500" />;
  if (feature.toLowerCase().includes('backup')) return <RefreshCcw className="h-4 w-4 text-red-500" />;
  if (feature.toLowerCase().includes('hour')) return <Clock className="h-4 w-4 text-red-500" />;
  return <Check className="h-4 w-4 text-green-500" />;
};

const Pricing = ({ title, description, productName, selectedTallyService: controlledTallyService, setSelectedTallyService: setControlledTallyService, selectedBusyCategory: controlledBusyCategory, setSelectedBusyCategory: setControlledBusyCategory }: PricingProductProps) => {
  const [selectedDuration, setSelectedDuration] = useState<TallyDuration>("1_month");
  const [busyTab, setBusyTab] = useState<BusyTab>("perpetual");
  const [busyUserType, setBusyUserType] = useState<BusyUserType>("single");
  const [zohoPlanGroup, setZohoPlanGroup] = useState<'starter' | 'beyond'>('starter');
  const [zohoBilling, setZohoBilling] = useState<'yearly' | 'monthly'>('yearly');
  const [internalTallyService, setInternalTallyService] = useState<string>("new-products");
  const [internalBusyCategory, setInternalBusyCategory] = useState<string>("desktop");
  const [busyOnlineType, setBusyOnlineType] = useState<'access' | 'sql'>('access');
  const [busyOnlineBilling, setBusyOnlineBilling] = useState<'annually' | 'quarterly'>('annually');

  // Use controlled or internal state
  const selectedTallyService = controlledTallyService !== undefined ? controlledTallyService : internalTallyService;
  const setSelectedTallyService = setControlledTallyService !== undefined ? setControlledTallyService : setInternalTallyService;
  const selectedBusyCategory = controlledBusyCategory !== undefined ? controlledBusyCategory : internalBusyCategory;
  const setSelectedBusyCategory = setControlledBusyCategory !== undefined ? setControlledBusyCategory : setInternalBusyCategory;

  // Debug logs
  console.log('Pricing selectedTallyService:', selectedTallyService);
  console.log('Pricing selectedBusyCategory:', selectedBusyCategory);

  let currentPlans: any[] = [];
  if (productName === 'zoho') {
    currentPlans = zohoPricing[zohoPlanGroup][zohoBilling];
  } else if (productName === 'tally') {
    currentPlans = (plans.tally as { [key: string]: any[] })[selectedTallyService] || [];
  } else if (productName === 'busy') {
    const busyPlans = (plans.busy as any)[selectedBusyCategory || 'desktop'];
    if (selectedBusyCategory === 'desktop') {
      // For desktop, we need to handle the nested structure
      if (busyPlans && busyPlans[busyTab] && busyPlans[busyTab][busyUserType]) {
        currentPlans = busyPlans[busyTab][busyUserType];
      }
    } else if (selectedBusyCategory === 'online') {
      // For online, use the new structure
      const onlinePlan = busyPlans[busyOnlineType][busyOnlineBilling];
      currentPlans = [
        {
          name: `Online (${busyOnlineType === 'access' ? 'Access' : 'SQL'})`,
          price: onlinePlan.price + (busyOnlineBilling === 'annually' ? '/Yearly' : '/Quarterly'),
          buttonText: onlinePlan.buttonText,
          features: [
            `₹${onlinePlan.additionalCompany}/- For Additional Company`,
            '*GST to be added to the price'
          ]
        }
      ];
    } else {
      // For other categories, it's a direct array
      currentPlans = Array.isArray(busyPlans) ? busyPlans : [];
    }
  } else if (productName === 'ms-azure') {
    return (
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="font-bold text-3xl md:text-4xl mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center gap-6">
            <p className="text-lg text-gray-700 text-center">
              Calculate your estimation with Azure Pricing Calculator
            </p>
            <Button
              onClick={handleAzureCalculator}
              className="bg-red-600 hover:bg-red-400 text-white px-8 py-3 rounded-lg flex items-center gap-2"
            >
              <Cloud className="h-5 w-5" />
              Open Azure Pricing Calculator
            </Button>
          </div>
        </div>
      </section>
    );
  } else if (productName === 'agt-cloud') {
    return (
      <section id="pricing-section" className= "bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <motion.h2 
            className="font-bold text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center gap-6">
            <p className="text-2xl font-bold text-gray-800 text-center">
              Starting from <span className="text-red-600">₹5000</span> / month only
            </p>
            <a
              href="https://wa.me/919558803148?text=Hi%2C%20I'm%20interested%20in%20AgtPrivateCloud%20product!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-400 text-white px-8 py-3 rounded-lg flex items-center gap-2"
            >
              Contact Us
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    const arr = plans[productName as keyof typeof plans] || plans.default;
    currentPlans = Array.isArray(arr) ? arr : [];
  }

  // Before rendering currentPlans, ensure only one plan has mostPopular: true
  if (Array.isArray(currentPlans) && currentPlans.length > 0) {
    if (!currentPlans.some(p => p.mostPopular)) {
      if (currentPlans.length > 1) {
        currentPlans[1].mostPopular = true;
      } else {
        currentPlans[0].mostPopular = true;
      }
    } else if (currentPlans.filter(p => p.mostPopular).length > 1) {
      // If more than one, keep only the first
      let found = false;
      currentPlans.forEach(p => {
        if (p.mostPopular) {
          if (!found) found = true;
          else p.mostPopular = false;
        }
      });
    }
  }

  return (
    <section id="pricing-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Busy Category Selection */}
        {productName === "busy" && (
          <div className="flex flex-col items-center gap-4 mb-8">
            {/* Category Selection */}
            <div className="flex justify-center gap-2">
              {[{key: 'desktop', label: 'Desktop'}, {key: 'mobile', label: 'Mobile'}, {key: 'online', label: 'Online'}, {key: 'recom', label: 'Recom'}].map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedBusyCategory(cat.key)}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    selectedBusyCategory === cat.key
                      ? "bg-primary text-white"
                      : "bg-white text-primary border border-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Desktop Mode Selection */}
            {selectedBusyCategory === 'desktop' && (
              <>
                {/* Perpetual/Subscription Toggle */}
                <div className="flex justify-center gap-2">
                  {busyTabs.map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setBusyTab(tab.key)}
                      className={`px-4 py-2 rounded-full font-semibold transition ${
                        busyTab === tab.key
                          ? "bg-primary text-white"
                          : "bg-white text-primary border border-primary"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Single/Multi User Toggle Switch */}
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      busyUserType === 'single' ? 'text-red-600' : 'text-gray-500'
                    }`}
                  >
                    Single User
                  </span>
                  <button
                    className={`relative inline-flex h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none bg-red-600`}
                    onClick={() => setBusyUserType(busyUserType === 'single' ? 'multi' : 'single')}
                    aria-pressed={busyUserType === 'multi'}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-lg ring-1 ring-black/5 transform transition-transform duration-300 ${
                        busyUserType === 'multi' ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      busyUserType === 'multi' ? 'text-red-600' : 'text-gray-500'
                    }`}
                  >
                    Multi User
                  </span>
                </div>
              </>
            )}
            {/* Online Mode Selection */}
            {selectedBusyCategory === 'online' && (
              <>
                {/* Access/SQL Toggle */}
                <div className="flex justify-center gap-2">
                  {['access', 'sql'].map(type => (
                    <button
                      key={type}
                      onClick={() => setBusyOnlineType(type as 'access' | 'sql')}
                      className={`px-4 py-2 rounded-full font-semibold transition ${
                        busyOnlineType === type
                          ? "bg-primary text-white"
                          : "bg-white text-primary border border-primary"
                      }`}
                    >
                      {type === 'access' ? 'Access' : 'SQL'}
                    </button>
                  ))}
                </div>
                {/* Annually/Quarterly Toggle */}
                <div className="flex items-center gap-4 mt-2">
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      busyOnlineBilling === 'annually' ? 'text-red-600' : 'text-gray-500'
                    }`}
                  >
                    Annually
                  </span>
                  <button
                    className={`relative inline-flex h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none bg-red-600`}
                    onClick={() => setBusyOnlineBilling(busyOnlineBilling === 'annually' ? 'quarterly' : 'annually')}
                    aria-pressed={busyOnlineBilling === 'quarterly'}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-lg ring-1 ring-black/5 transform transition-transform duration-300 ${
                        busyOnlineBilling === 'quarterly' ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      busyOnlineBilling === 'quarterly' ? 'text-red-600' : 'text-gray-500'
                    }`}
                  >
                    Quarterly
                  </span>
                </div>
              </>
            )}
          </div>
        )}
        
        {/* Tally Service Selection */}
        {productName === "tally" && (
          <div className="flex justify-center mb-8 gap-2">
            {productCategories.find(cat => cat.slug === "tally")?.services.map(service => (
              <button
                key={service.slug}
                onClick={() => setSelectedTallyService(service.slug)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedTallyService === service.slug
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        )}

        {/* Zoho Tabs and Toggle */}
        {productName === "zoho" && (
          <div className="flex flex-col items-center mb-8 gap-4">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0 mb-4">
              <button
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold border border-gray-200 ${
                  zohoPlanGroup === 'starter' 
                    ? 'bg-red-600 text-white rounded-lg sm:rounded-tl-full sm:rounded-bl-full sm:rounded-tr-none sm:rounded-br-none' 
                    : 'bg-white text-gray-700 rounded-lg sm:rounded-tl-full sm:rounded-bl-full sm:rounded-tr-none sm:rounded-br-none'
                }`}
                onClick={() => setZohoPlanGroup('starter')}
              >
                Plans to get you started
              </button>
              <button
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold border border-gray-200 ${
                  zohoPlanGroup === 'beyond' 
                    ? 'bg-red-600 text-white rounded-lg sm:rounded-tr-full sm:rounded-br-full sm:rounded-tl-none sm:rounded-bl-none' 
                    : 'bg-white text-gray-700 rounded-lg sm:rounded-tr-full sm:rounded-br-full sm:rounded-tl-none sm:rounded-bl-none'
                }`}
                onClick={() => setZohoPlanGroup('beyond')}
              >
                Plans that go beyond the basic
              </button>
            </div>
            {/* Billing Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span
                className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  zohoBilling === 'monthly' ? 'text-red-600' : 'text-gray-500'
                }`}
              >
                Monthly
              </span>
              <button
                className={`relative inline-flex h-6 w-12 sm:h-8 sm:w-16 rounded-full transition-colors duration-300 focus:outline-none bg-red-600`}
                onClick={() => setZohoBilling(zohoBilling === 'yearly' ? 'monthly' : 'yearly')}
                aria-pressed={zohoBilling === 'monthly'}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white shadow-lg ring-1 ring-black/5 transform transition-transform duration-300 ${
                    zohoBilling === 'yearly' ? 'translate-x-6 sm:translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  zohoBilling === 'yearly' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                Yearly
              </span>
            </div>
          </div>
        )}

        <div className="w-full flex justify-center">
          <div
            className={`grid gap-6 max-w-7xl mx-auto place-items-center ${
              currentPlans.length === 1
                ? 'grid-cols-1'
                : currentPlans.length === 2
                ? 'grid-cols-1 sm:grid-cols-2'
                : currentPlans.length === 3
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}
          >
            {currentPlans.map((plan: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg border border-red-100 p-6 flex flex-col h-[560px] w-[320px] overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Content Wrapper */}
                <div className="flex flex-col flex-1">
                  {/* Header Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <Cloud className="h-6 w-6 text-red-400" />
                    <span className="text-xl font-bold text-red-700">{plan.name}</span>
                  </div>

                  {/* Description */}
                  {plan.description && (
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  )}

                  {/* Price Section */}
                  <div className="mb-6">
                    {plan.oldPrice && (
                      <span className="text-gray-400 line-through text-lg block">{plan.oldPrice}</span>
                    )}
                    <div className="text-3xl font-extrabold text-red-900">
                      {plan.price}
                      {plan.period && <span className="text-base font-medium text-gray-500">{plan.period}</span>}
                    </div>
                    {plan.priceDescription && (
                      <span className="text-sm text-gray-500 block mt-1">{plan.priceDescription}</span>
                    )}
                    {plan.effective && (
                      <span className="text-sm text-red-600 block mt-1">{plan.effective}</span>
                    )}
                    {plan.gst && (
                      <span className="text-sm text-gray-500 block mt-1">{plan.gst}</span>
                    )}
                  </div>

                  {/* Features Section */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-3">
                      {plan.features && plan.features.slice(0, 6).map((feature: any, idx: number) => (
                        <div className="flex items-center gap-2" key={idx}>
                          {featureIcon(typeof feature === 'string' ? feature : feature.name, idx)}
                          <span className="text-sm text-gray-700">
                            {typeof feature === 'string' ? feature : feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Button Section - Always at bottom, inside card */}
                <div className="mt-6">
                  <Link href="/contact">
                    <button className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      {plan.buttonText || 'Contact Us'}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;