import { Card, CardContent } from "@/components/ui/card";
import { CloudCog, Server, Database, Shield, Globe, TrendingUp } from "lucide-react";

const homeFeatures = [
  {
    title: "Cloud Computing",
    description: "Access your applications and data from anywhere with secure, scalable cloud infrastructure — ideal for remote work and hybrid environments.",
    icon: <CloudCog className="h-8 w-8 text-red-400" />
  },
  {
    title: "Virtual Servers",
    description: "Deploy high-performance virtual machines tailored to your business needs. Enjoy cost-efficient cloud hosting with seamless scalability.",
    icon: <Server className="h-8 w-8 text-red-400" />
  },
  {
    title: "Database Management",
    description: "Get reliable and secure database solutions with automated backups, performance tuning, and enterprise-grade data management.",
    icon: <Database className="h-8 w-8 text-red-400" />
  },
  {
    title: "Security Solutions",
    description: "Protect your cloud environment with advanced cybersecurity, data encryption, and real-time threat detection.",
    icon: <Shield className="h-8 w-8 text-red-400" />
  },
  {
    title: "Global Availability",
    description: "Ensure high availability and low-latency access with globally distributed data centers for seamless user experience anywhere in the world.",
    icon: <Globe className="h-8 w-8 text-red-400" />
  },
  {
    title: "Performance Analytics",
    description: "Unlock real-time performance monitoring, resource optimization, and actionable cloud analytics for better decision-making.",
    icon: <TrendingUp className="h-8 w-8 text-red-400" />
  }
];

const HomeFeatures = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center">Enterprise Cloud Features</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Our cloud services offer enterprise-grade features to power your business applications and infrastructure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow flex flex-col items-start p-8 transition duration-300 border border-gray-100"
          >
            <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFeatures; 