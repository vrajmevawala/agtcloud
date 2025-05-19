import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  CloudCog, 
  Server, 
  Database, 
  Shield, 
  Globe, 
  TrendingUp,
  CheckCircle,
  CreditCard,
  Infinity,
  FastForward,
  Smile,
  BarChart3,
  UploadCloud,
  Printer,
  LogIn,
  Settings2,
  FileCheck2
} from "lucide-react";

interface Service {
  name: string;
  slug: string;
  description?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug?: string;
}

interface FeaturesProps {
  services?: Service[];
  companyName?: string;
  companyDescription?: string;
  onServiceSelect?: (slug: string) => void;
  reasons?: Feature[];
  featuresList?: Feature[];
}

const serviceIcons: Record<string, JSX.Element> = {
  "cloud-services": <CloudCog className="h-8 w-8 text-primary" />,
  "virtual-machines": <Server className="h-8 w-8 text-primary" />,
  "database": <Database className="h-8 w-8 text-primary" />,
  "devops": <TrendingUp className="h-8 w-8 text-primary" />,
  "accounting": <CheckCircle className="h-8 w-8 text-primary" />,
  "inventory": <CheckCircle className="h-8 w-8 text-primary" />,
  "gst": <CheckCircle className="h-8 w-8 text-primary" />,
  "payroll": <CheckCircle className="h-8 w-8 text-primary" />,
  "prime": <CheckCircle className="h-8 w-8 text-primary" />,
  "server": <Server className="h-8 w-8 text-primary" />,
  "developer": <CheckCircle className="h-8 w-8 text-primary" />,
  "customization": <CheckCircle className="h-8 w-8 text-primary" />,
  "crm": <CheckCircle className="h-8 w-8 text-primary" />,
  "books": <CheckCircle className="h-8 w-8 text-primary" />,
  "campaigns": <CheckCircle className="h-8 w-8 text-primary" />,
  "mail": <CheckCircle className="h-8 w-8 text-primary" />
};

export const agtCloudReasons = [
  {
    icon: <Shield className="h-8 w-8 text-red-500" />,
    title: "Fully Compliant & Secure",
    description: "Your business data is protected with enterprise-grade security and compliance standards."
  },
  {
    icon: <Server className="h-8 w-8 text-red-500" />,
    title: "Reliable Cloud Hosting",
    description: "Hosted on robust infrastructure for maximum uptime and seamless access."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-red-500" />,
    title: "Transparent Pricing",
    description: "Simple, honest pricing with no hidden fees. Focus on your business, not your bills."
  }
];

export const agtCloudFeatures = [
  {
    icon: <CloudCog className="h-8 w-8 text-primary" />,
    title: "Instant Access",
    description: "Connect to your apps and data from anywhere, anytime, on any device."
  },
  {
    icon: <UploadCloud className="h-8 w-8 text-primary" />,
    title: "Effortless Data Uploads",
    description: "Easily upload and sync your files to the cloud with a few clicks."
  },
  {
    icon: <Printer className="h-8 w-8 text-primary" />,
    title: "Cloud Printing",
    description: "Print documents from the cloud to any connected printer, hassle-free."
  },
  {
    icon: <LogIn className="h-8 w-8 text-primary" />,
    title: "Activity Logs",
    description: "Track user and admin actions for full transparency and accountability."
  },
  {
    icon: <FileCheck2 className="h-8 w-8 text-primary" />,
    title: "Automated Backups",
    description: "Scheduled backups keep your data safe and recoverable at all times."
  },
  {
    icon: <Settings2 className="h-8 w-8 text-primary" />,
    title: "Smart Management",
    description: "Easily manage users, permissions, and resources with intuitive controls."
  }
];

const Features = ({ services, companyName, companyDescription, onServiceSelect, reasons, featuresList }: FeaturesProps) => {
  const defaultFeatures: Feature[] = [
    {
      title: "Cloud Computing",
      description: "Access your applications and data from anywhere with secure cloud infrastructure.",
      icon: <CloudCog className="h-8 w-8 text-primary" />
    },
    {
      title: "Virtual Servers",
      description: "Deploy scalable virtual machines optimized for your specific workloads.",
      icon: <Server className="h-8 w-8 text-primary" />
    },
    {
      title: "Database Management",
      description: "Reliable, secure and scalable database solutions for your business data.",
      icon: <Database className="h-8 w-8 text-primary" />
    },
    {
      title: "Security Solutions",
      description: "Advanced security features to protect your data and applications from threats.",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      title: "Global Availability",
      description: "Deploy your applications globally with high availability and low latency.",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      title: "Performance Analytics",
      description: "Detailed insights into your application performance and resource utilization.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    }
  ];

  const excludedSlugs = [
    "cloud-services",
    "virtual-machines",
    "database",
    "ms-dynamic-365"
  ];

  // Scroll handler
  const handleLearnMoreClick = (slug: string) => {
    if (!excludedSlugs.includes(slug) && onServiceSelect) {
      console.log('Learn More clicked for slug:', slug); // Debug
      onServiceSelect(slug);
    }
  };

  const featuresToShow = featuresList
    ? featuresList
    : services && services.length > 0
      ? services.map(service => ({
          icon: serviceIcons[service.slug] || <CheckCircle className="h-8 w-8 text-primary" />,
          title: service.name,
          description: service.description || '',
          slug: service.slug,
        }))
      : defaultFeatures;

  if (reasons && reasons.length > 0 && featuresList && featuresList.length > 0) {
    // Special AGT Cloud UI
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center text-red-600">Why Choose AGT Cloud?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Experience secure, affordable, and scalable cloud solutions designed for modern businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl flex flex-col items-center p-8 border-t-4 border-red-400">
                <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </div>
            ))}
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center text-red-600">Key Features of AGT Cloud</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Discover powerful features that streamline operations, enhance security, and boost your business performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl flex flex-col items-center p-8 border-t-4 border-red-400"
              >
                <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center mb-0">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Render reasons if provided */}
        {reasons && reasons.length > 0 && (
          <>
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center text-red-600">Why Choose AGT Cloud?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Experience secure, affordable, and scalable cloud solutions designed for modern businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {reasons.map((reason, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 transition duration-300 border border-red-200">
                  <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">{reason.title}</h3>
                  <p className="text-gray-600 text-center">{reason.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {/* Features section as before */}
        <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center">
          {featuresToShow.length > 0 && companyName && !reasons
            ? `${companyName} Services`
            : !reasons ? "Enterprise Cloud Features" : "Key Features of AGT Cloud"}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          {featuresToShow.length > 0 && companyDescription && !reasons
            ? companyDescription
            : !reasons ? "Our cloud services offer enterprise-grade features to power your business applications and infrastructure." : "Discover powerful features that streamline operations, enhance security, and boost your business performance."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresToShow.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 transition duration-300"
            >
              <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center mb-6">{feature.description}</p>
              {feature.slug ? (
                <button
                  className="mt-auto w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
                  onClick={() => feature.slug && handleLearnMoreClick(feature.slug)}
                >
                  Know Pricing
                </button>
              ) : (
                <button className="mt-auto w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition">
                  Know Pricing
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;