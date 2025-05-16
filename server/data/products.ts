import { Product } from "@shared/schema";

export const products: Product[] = [
  {
    id: 2,
    slug: "tally",
    name: "Tally Solutions",
    title: "Comprehensive Business Management Solution",
    description: "Complete business solution for accounting, inventory management, and GST compliance designed for Indian businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "Financial Accounting",
        description: "Powerful accounting features with multi-location and multi-currency support.",
        icon: "dollar-sign"
      },
      {
        title: "Inventory Management",
        description: "Comprehensive inventory tracking with batch and serial number management.",
        icon: "package"
      },
      {
        title: "Statutory Compliance",
        description: "Built-in compliance for GST, TDS, and other Indian tax requirements.",
        icon: "shield"
      },
      {
        title: "Business Intelligence",
        description: "Advanced reporting and analytics for informed decision-making.",
        icon: "bar-chart-2"
      }
    ],
    pricing: {
      title: "Tally Pricing Plans",
      description: "Select the ideal Tally solution for your business requirements.",
      plans: []
    },
    testimonials: [
      {
        quote: "Tally has been the backbone of our financial operations for years. The transition to GST was seamless thanks to Tally's features.",
        author: "Sunil Mehta",
        role: "CEO, XYZ Enterprises",
        rating: 5,
        initials: "SM"
      }
    ],
    cta: {
      title: "Ready to Optimize Your Business Operations?",
      description: "Join over a million businesses that rely on Tally for their financial and inventory management.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Expert support and implementation services available."
    }
  },
  {
    id: 3,
    slug: "ms-azure",
    name: "MS Azure",
    title: "Power Your Digital Transformation",
    description: "Flexible cloud platform for building, testing, deploying, and managing applications with global scale and reliability.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "Cloud Infrastructure",
        description: "Scalable and secure infrastructure with global data center coverage.",
        icon: "server"
      },
      {
        title: "App Development",
        description: "Comprehensive tools for building and deploying applications in the cloud.",
        icon: "code"
      },
      {
        title: "Data Services",
        description: "Powerful database solutions with built-in intelligence and analytics.",
        icon: "database"
      },
      {
        title: "AI and Machine Learning",
        description: "Advanced AI capabilities to build intelligent applications at scale.",
        icon: "cpu"
      }
    ],
    pricing: {
      title: "MS Azure Pricing",
      description: "Flexible pay-as-you-go pricing with options for reserved instances.",
      plans: []
    },
    testimonials: [
      {
        quote: "Moving our infrastructure to Azure through AGT was the best decision we made. We've seen significant cost savings and improved performance.",
        author: "Priya Sharma",
        role: "CTO, Tech Innovations",
        rating: 5,
        initials: "PS"
      }
    ],
    cta: {
      title: "Ready to Move to the Cloud?",
      description: "Accelerate your cloud journey with our expert Azure implementation services.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Consultation",
      secondaryButtonLink: "/demo",
      note: "Free cloud readiness assessment available."
    }
  },
  {
    id: 1,
    slug: "busy",
    name: "Busy Solutions",
    title: "Streamline Your Finance & Inventory Management",
    description: "Comprehensive accounting and inventory management software designed specifically for Indian businesses with complete GST compliance.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "Accounting",
        description: "Complete financial accounting with multi-currency support and automated bank reconciliation.",
        icon: "calculator"
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking with batch management and barcode integration.",
        icon: "box"
      },
      {
        title: "GST Compliance",
        description: "Fully GST-compliant with automatic tax calculation and e-filing capabilities.",
        icon: "file-text"
      },
      {
        title: "Payroll",
        description: "Comprehensive payroll management with tax calculation and statutory compliance.",
        icon: "credit-card"
      }
    ],
    pricing: {
      title: "Busy Pricing Plans",
      description: "Choose the right Busy plan for your business needs.",
      plans: []
    },
    testimonials: [
      {
        quote: "Busy has completely transformed our accounting processes. The GST compliance features alone save us countless hours every month.",
        author: "Rajesh Kumar",
        role: "Finance Director, ABC Corporation",
        rating: 5,
        initials: "RK"
      }
    ],
    cta: {
      title: "Ready to Transform Your Finance Operations?",
      description: "Join thousands of businesses that are streamlining their accounting and inventory management with Busy.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Free consultation and personalized recommendations for your business."
    }
  },
  {
    id: 4,
    slug: "zoho",
    name: "Zoho",
    title: "Unified Business Operating System",
    description: "Integrated suite of over 40 business applications for sales, marketing, support, and operations.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "CRM & Sales",
        description: "Complete customer relationship management with sales automation.",
        icon: "users"
      },
      {
        title: "Marketing",
        description: "End-to-end marketing platform with campaign management and analytics.",
        icon: "send"
      },
      {
        title: "Finance",
        description: "Comprehensive accounting and financial management applications.",
        icon: "briefcase"
      },
      {
        title: "HR & Collaboration",
        description: "Tools for HR management, productivity, and team collaboration.",
        icon: "headphones"
      }
    ],
    pricing: {
      title: "Zoho Pricing",
      description: "All-in-one pricing for access to the complete Zoho suite of applications.",
      plans: []
    },
    testimonials: [
      {
        quote: "Zoho has transformed how we operate. Having all our tools in one integrated system has improved efficiency across all departments.",
        author: "Vikram Singh",
        role: "Operations Manager, Global Solutions",
        rating: 4.5,
        initials: "VS"
      }
    ],
    cta: {
      title: "Ready for an Integrated Business Solution?",
      description: "Experience the power of having all your business applications in one unified platform.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Personalized implementation and training available."
    }
  }
];
