import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  CloudCog, 
  Server, 
  Database, 
  Shield, 
  Globe, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

interface Service {
  name: string;
  slug: string;
  description?: string;
}

interface FeaturesProps {
  services?: Service[];
  companyName?: string;
  companyDescription?: string;
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

const Features = ({ services, companyName, companyDescription }: FeaturesProps) => {
  const defaultFeatures = [
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

  const featuresToShow = services && services.length > 0
    ? services.map(service => ({
        icon: serviceIcons[service.slug] || <CheckCircle className="h-8 w-8 text-primary" />,
        title: service.name,
        description: service.description || '',
      }))
    : defaultFeatures;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center">
          {featuresToShow.length > 0 && companyName
            ? `${companyName} Services`
            : "Enterprise Cloud Features"}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          {featuresToShow.length > 0 && companyDescription
            ? companyDescription
            : "Our cloud services offer enterprise-grade features to power your business applications and infrastructure."}
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
              <button className="mt-auto w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
