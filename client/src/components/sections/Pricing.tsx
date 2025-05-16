import { PricingCard } from "@/components/ui/pricing-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check, Cloud, User, Cpu, MemoryStick, HardDrive, RefreshCcw, Clock } from "lucide-react";
import React, { useState, Suspense, lazy } from "react";
import { productCategories } from "@/lib/constants";

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
      },
      {
        name: "TallyPrime Server",
        description: "Enterprise-grade solution for large organizations",
        price: "₹ 48,600",
        oldPrice: "₹ 54,000",
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
        price: "₹ 5,000",
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
        price: "₹ 10,000",
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
        price: "₹ 15,000",
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
        name: "Silver to Silver",
        description: "Upgrade to latest Silver version",
        price: "₹ 4,050",
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
        name: "Gold to Gold",
        description: "Upgrade to latest Gold version",
        price: "₹ 12,150",
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
        name: "Silver to Gold",
        description: "Upgrade from Silver to Gold",
        price: "₹ 16,200",
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
        name: "Prime Silver to Prime Gold",
        description: "Upgrade from Prime Silver to Prime Gold",
        price: "₹ 16,200",
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
        name: "Tally Prime Rental Silver",
        description: "Monthly rental for single user",
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
        name: "Tally Prime Rental Gold",
        description: "Monthly rental for multiple users",
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
        description: "Special retail edition",
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
        name: "TVU",
        description: "Virtual user solution for remote access",
        price: "₹ 1,500",
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

const Pricing = ({ title, description, productName }: PricingProductProps) => {
  const [selectedDuration, setSelectedDuration] = useState<TallyDuration>("1_month");
  const [busyTab, setBusyTab] = useState<BusyTab>("perpetual");
  const [busyUserType, setBusyUserType] = useState<BusyUserType>("single");
  const [zohoPlanGroup, setZohoPlanGroup] = useState<'starter' | 'beyond'>('starter');
  const [zohoBilling, setZohoBilling] = useState<'yearly' | 'monthly'>('yearly');
  const [selectedTallyService, setSelectedTallyService] = useState<string>("new-products");

  let currentPlans: any[] = [];
  if (productName === 'zoho') {
    currentPlans = zohoPricing[zohoPlanGroup][zohoBilling];
  } else if (productName === 'tally') {
    currentPlans = (plans.tally as { [key: string]: any[] })[selectedTallyService] || [];
  } else if (productName === 'busy') {
    currentPlans = (plans.busy as any)[busyTab][busyUserType] || [];
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
    <section id="pricing-section" className="py-20 bg-gray-50">
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
                  <button className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-red-700 transition">
                    {plan.buttonText || 'Get Started'}
                  </button>
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
