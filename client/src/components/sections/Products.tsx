import { ProductCard } from "@/components/ui/product-card";
import { motion } from "framer-motion";
import { Database, Calculator, Cloud, BarChart } from "lucide-react";

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const products = [
    {
      title: "Tally Solutions",
      description: "Complete business solution for accounting, inventory management, and GST compliance.",
      icon: <Database className="h-8 w-8 text-primary" />,
      link: "/product/tally"
    },
    {
      title: "MS Azure",
      description: "Flexible cloud platform for building, testing, deploying, and managing applications.",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      link: "/product/ms-azure"
    },
    {
      title: "Busy Solutions",
      description: "Comprehensive accounting and inventory management software for businesses of all sizes.",
      icon: <Calculator className="h-8 w-8 text-primary" />,
      link: "/product/busy"
    },
    {
      title: "Zoho Solutions",
      description: "Integrated suite of business applications for sales, marketing, support, and operations.",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      link: "/product/zoho"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full opacity-50 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full opacity-50 -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-6 text-gray-900">Our Featured Products</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of industry-leading business software solutions to help your organization succeed.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProductCard 
                title={product.title}
                description={product.description}
                icon={product.icon}
                link={product.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
