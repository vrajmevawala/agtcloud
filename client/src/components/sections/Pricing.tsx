import { PricingCard } from "@/components/ui/pricing-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import React, { useState, Suspense, lazy } from "react";

interface PricingProductProps {
  title: string;
  description: string;
  productName: string;
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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
        buttonText: 'Start my free trial',
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

const AzureCalculator = lazy(() => import('../../../../azure-calculator/components/azure-calculator'));

const Pricing = ({ title, description, productName }: PricingProductProps) => {
  const handleTrial = () => {
    console.log("Start free trial clicked");
  };
  
  const handleContactSales = () => {
    console.log("Contact sales clicked");
  };
  
  const plans = {
    busy: {
      perpetual: {
        single: [
          {
            name: "EXPRESS",
            price: "Free",
            buttonText: "Download Now",
            features: [
              "100% Free Billing & Accounting",
              "Create Accounting Vouchers: Invoices, Receipts, Inventory, JVs etc.",
              "Accounting for Multiple Companies, Multiple Financial Years",
              "MIS Reports: Ledgers, Receivables & Payables, Sales / Inventory / Profitability Analysis",
              "Financial Statements: P&L, Balance Sheet"
            ]
          },
          {
            name: "BASIC",
            price: "₹9,999",
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
            name: "EXPRESS",
            price: "Free",
            buttonText: "Download Now",
            features: [
              "100% Free Billing & Accounting",
              "Create Accounting Vouchers: Invoices, Receipts, Inventory, JVs etc.",
              "Accounting for Multiple Companies, Multiple Financial Years",
              "MIS Reports: Ledgers, Receivables & Payables, Sales / Inventory / Profitability Analysis",
              "Financial Statements: P&L, Balance Sheet"
            ]
          },
          {
            name: "BASIC",
            price: "₹24,999",
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
            name: "EXPRESS",
            price: "Free",
            buttonText: "Download Now",
            features: [
              "100% Free Billing & Accounting",
              "Create Accounting Vouchers: Invoices, Receipts, Inventory, JVs etc.",
              "Accounting for Multiple Companies, Multiple Financial Years",
              "MIS Reports: Ledgers, Receivables & Payables, Sales / Inventory / Profitability Analysis",
              "Financial Statements: P&L, Balance Sheet"
            ]
          },
          {
            name: "BLUE",
            price: "₹4,999/year",
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
            name: "EXPRESS",
            price: "Free",
            buttonText: "Download Now",
            features: [
              "100% Free Billing & Accounting",
              "Create Accounting Vouchers: Invoices, Receipts, Inventory, JVs etc.",
              "Accounting for Multiple Companies, Multiple Financial Years",
              "MIS Reports: Ledgers, Receivables & Payables, Sales / Inventory / Profitability Analysis",
              "Financial Statements: P&L, Balance Sheet"
            ]
          },
          {
            name: "BLUE",
            price: "₹12,499/year",
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
            buttonText: "Get Free Demo",
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
    tally: {
      "1_month": [
        {
          name: "TallyPrime Silver",
          description: "Suitable for businesses that need TallyPrime on a single PC",
          price: "₹ 750",
          gst: "+18% GST (₹ 135)",
          buyNow: true,
          features: [
            "Fully loaded with all Features",
            "Free access to TSS Features",
            "Invoicing & Accounting",
            "Inventory Management",
            "GST and Compliance",
            "Banking and Cashflow",
            "e-Invoicing and e-way bills",
            "Connected Services",
            "Business Operation"
          ]
        },
        {
          name: "TallyPrime Gold",
          description: "Perfect for businesses needing multi-user access on multiple PCs",
          price: "₹ 2,250",
          gst: "+18% GST (₹ 405)",
          buyNow: true,
          features: [
            "Fully loaded with all Features",
            "Free access to TSS Features",
            "Invoicing & Accounting",
            "Inventory Management",
            "GST and Compliance",
            "Banking and Cashflow",
            "e-Invoicing and e-way bills",
            "Connected Services",
            "Business Operation"
          ]
        }
      ],
      "3_months": [
        {
          name: "TallyPrime Silver",
          description: "Suitable for businesses that need TallyPrime on a single PC",
          price: "₹ 2,138",
          oldPrice: "₹ 2,250",
          discount: "Get 5% off",
          effective: "Effective price 712.5/Month",
          gst: "+18% GST (₹ 385)",
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
          price: "₹ 6,413",
          oldPrice: "₹ 6,750",
          discount: "Get 5% off",
          effective: "Effective price 2137.5/Month",
          gst: "+18% GST (₹ 1,154)",
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
        }
      ],
      "12_months": [
        {
          name: "TallyPrime Silver",
          description: "Suitable for businesses that need TallyPrime on a single PC",
          price: "₹ 8,100",
          oldPrice: "₹ 9,000",
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
          price: "₹ 24,300",
          oldPrice: "₹ 27,000",
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
        }
      ],
      "lifetime": [
        {
          name: "TallyPrime Silver",
          description: "Suitable for businesses that need TallyPrime on a single PC",
          price: "₹ 22,500",
          gst: "+18% GST (₹ 4,050)",
          buyNow: true,
          features: [
            "1-Year Free TSS",
            "Invoicing & Accounting",
            "Inventory Management",
            "GST and Compliance",
            "Banking and Cashflow",
            "e-Invoicing and e-way bills",
            "Connected Services",
            "Business Operation",
            "Zero cost EMI available"
          ]
        },
        {
          name: "TallyPrime Gold",
          description: "Perfect for businesses needing multi-user access on multiple PCs",
          price: "₹ 67,500",
          gst: "+18% GST (₹ 12,150)",
          buyNow: true,
          features: [
            "1-Year Free TSS",
            "Invoicing & Accounting",
            "Inventory Management",
            "GST and Compliance",
            "Banking and Cashflow",
            "e-Invoicing and e-way bills",
            "Connected Services",
            "Business Operation",
            "Zero cost EMI available"
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
        buttonText: "Start Free Trial",
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
        buttonText: "Start Free Trial",
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
        buttonText: "Contact Sales",
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
        buttonText: "Start my free trial",
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
        buttonText: "Start my free trial",
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
        buttonText: "Start my free trial",
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
        buttonText: "Start my free trial",
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
        buttonText: "Start Free Trial",
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
        buttonText: "Start Free Trial",
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
        buttonText: "Contact Sales",
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
  
  const [selectedDuration, setSelectedDuration] = useState<TallyDuration>("1_month");
  const [busyTab, setBusyTab] = useState<BusyTab>("perpetual");
  const [busyUserType, setBusyUserType] = useState<BusyUserType>("single");
  const [zohoPlanGroup, setZohoPlanGroup] = useState<'starter' | 'beyond'>('starter');
  const [zohoBilling, setZohoBilling] = useState<'yearly' | 'monthly'>('yearly');

  let currentPlans: any[] = [];
  if (productName === 'zoho') {
    currentPlans = zohoPricing[zohoPlanGroup][zohoBilling];
  } else if (productName === 'tally') {
    currentPlans = Array.isArray(plans.tally[selectedDuration]) ? plans.tally[selectedDuration] : [];
  } else if (productName === 'busy') {
    currentPlans = plans.busy[busyTab][busyUserType] || [];
  } else if (productName === 'ms-azure') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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
            className="text-lg mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
          {/* Only the calculator UI, not its header/footer */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <Suspense fallback={<div>Loading Azure Calculator...</div>}>
              <AzureCalculator hideHeaderFooter />
            </Suspense>
          </div>
        </div>
      </section>
    );
  } else {
    const arr = plans[productName as keyof typeof plans] || plans.default;
    currentPlans = Array.isArray(arr) ? arr : [];
  }

  // Before rendering currentPlans, ensure only one plan has mostPopular: true
  if (currentPlans.length > 0 && !currentPlans.some(p => p.mostPopular)) {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Busy Tabs and Toggle */}
        {productName === "busy" && (
          <div className="flex flex-col items-center mb-8 gap-4">
            <div className="flex gap-2">
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
            {/* Toggle Switch for Single/Multi-User */}
            <div className="flex items-center gap-4">
              <span className={`font-semibold transition-colors duration-300 ${busyUserType === "single" ? "text-red-600" : "text-gray-500"}`}>Single User</span>
              <button
                type="button"
                className={`relative inline-flex h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none bg-red-600`}
                onClick={() => setBusyUserType(busyUserType === "single" ? "multi" : "single")}
                aria-pressed={busyUserType === "multi"}
              >
                <span
                  className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-lg ring-1 ring-black/5 transform transition-transform duration-300
                    ${busyUserType === "multi" ? "translate-x-8" : "translate-x-0"}`}
                />
              </button>
              <span className={`font-semibold transition-colors duration-300 ${busyUserType === "multi" ? "text-red-600" : "text-gray-500"}`}>Multi-User</span>
            </div>
          </div>
        )}
        {/* Tally Tabs */}
        {productName === "tally" && (
          <div className="flex justify-center mb-8 gap-2">
            {durationTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setSelectedDuration(tab.key)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedDuration === tab.key
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
        {productName === "zoho" && (
          <div className="flex flex-col items-center mb-8 gap-4">
            {/* Tabs */}
            <div className="flex justify-center gap-0 mb-4">
              <button
                className={`px-6 py-2 rounded-tl-full rounded-bl-full font-semibold border border-gray-200 ${zohoPlanGroup === 'starter' ? 'bg-red-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setZohoPlanGroup('starter')}
              >
                Plans to get you started
              </button>
              <button
                className={`px-6 py-2 rounded-tr-full rounded-br-full font-semibold border border-gray-200 ${zohoPlanGroup === 'beyond' ? 'bg-red-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setZohoPlanGroup('beyond')}
              >
                Plans that go beyond the basic
              </button>
            </div>
            {/* Billing Toggle */}
            <div className="flex items-center gap-4">
              <span
                className={`font-semibold transition-colors duration-300 ${
                  zohoBilling === 'monthly' ? 'text-red-600' : 'text-gray-500'
                }`}
              >
                Monthly
              </span>
              <button
                className={`relative inline-flex h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none bg-red-600`}
                onClick={() => setZohoBilling(zohoBilling === 'yearly' ? 'monthly' : 'yearly')}
                aria-pressed={zohoBilling === 'monthly'}
              >
                <span
                  className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-lg ring-1 ring-black/5 transform transition-transform duration-300 ${
                    zohoBilling === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                className={`font-semibold transition-colors duration-300 ${
                  zohoBilling === 'yearly' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                Yearly
              </span>
            </div>
          </div>
        )}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>
        
        <div className={`w-full flex justify-center`}>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${currentPlans.length < 4 ? currentPlans.length : 4} gap-8 max-w-7xl mx-auto`}>
            {currentPlans.map((plan: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col bg-white rounded-xl border border-gray-200 shadow-md p-8 pt-10 min-h-[600px] transition-all duration-300 hover:shadow-xl relative`}
                style={{ height: '100%' }}
              >
                {/* Most Popular Floating Badge */}
                {plan.mostPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max flex justify-center z-20">
                    <span className="bg-yellow-400 text-white text-xs font-bold px-6 py-1 rounded-full shadow-lg border-2 border-white">Most Popular</span>
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-2xl">{plan.name}</h3>
                  </div>
                  <p className="text-gray-500 mb-4">{plan.description}</p>
                  <div className="flex items-end mb-2 gap-2">
                    {plan.oldPrice && (
                      <span className="text-gray-400 line-through text-lg">{plan.oldPrice}</span>
                    )}
                    <span className="font-bold text-4xl">{plan.price}</span>
                  </div>
                  {plan.discount && (
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">{plan.discount}</span>
                  )}
                  {plan.effective && (
                    <div className="text-blue-600 text-sm font-medium mb-1">{plan.effective}</div>
                  )}
                  {plan.gst && (
                    <div className="text-gray-500 text-sm mb-2">{plan.gst}</div>
                  )}
                  {plan.buttonText && (
                    <Button className="w-full bg-[#FFCC00] text-gray-900 font-bold hover:bg-yellow-400 mt-2">{plan.buttonText}</Button>
                  )}
                  <div className="flex-grow">
                    <div className="font-semibold mb-2">What you get :</div>
                    <ul className="space-y-2">
                      {plan.features.map((feature: any, idx: number) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          {typeof feature === 'string' ? (
                            <>
                              <span className="inline-block w-5 text-green-600">✔</span>
                              <span>{feature}</span>
                            </>
                          ) : (
                            <>
                              <span className={`inline-block w-5 ${feature.included ? 'text-green-600' : 'text-gray-400'}`}>{feature.included ? '✔' : '✖'}</span>
                              <span>{feature.name}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6">All plans include a 14-day free trial. No credit card required to start.</p>
          <Link href="/pricing/compare">
            <Button variant="link" className="text-primary hover:text-gray-800 transition duration-300">
              View Full Plan Comparison <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
