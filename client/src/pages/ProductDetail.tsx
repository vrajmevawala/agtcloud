import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import { Helmet } from "react-helmet";
import { productCategories } from '@/lib/constants';

interface ProductDetailProps {
  slug?: string;
}

const ProductDetail = ({ slug: propSlug }: ProductDetailProps) => {
  const params = useParams();
  const slug = propSlug || params.slug;
  
  const { data: product, isLoading } = useQuery({
    queryKey: [`/api/products/${slug}`],
    staleTime: Infinity,
  });
  
  const defaultProduct = {
    name: "Product",
    title: "Empower Your Business",
    description: "Comprehensive business solution to streamline your operations.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [],
    pricing: {
      title: "Simple, Transparent Pricing",
      description: "Choose the plan that works best for your business needs with no hidden fees."
    },
    cta: {
      title: "Ready to Transform Your Business?",
      description: "Join thousands of businesses that are optimizing their operations and accelerating growth with our solutions.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Free consultation and personalized recommendations for your business."
    }
  };
  
  const productData = product || defaultProduct;
  const productName = slug || "default";
  
  const productTitles = {
    "busy": "Busy Solutions - Accounting & Inventory Software",
    "tally": "Tally Solutions - Business Management Software",
    "ms-azure": "Microsoft Azure - Cloud Computing Services",
    "zoho": "Zoho - Integrated Business Applications"
  };
  
  const productDescriptions = {
    "busy": "Comprehensive accounting and inventory management software for businesses of all sizes.",
    "tally": "Complete business solution for accounting, inventory management, and GST compliance.",
    "ms-azure": "Flexible cloud platform for building, testing, deploying, and managing applications.",
    "zoho": "Integrated suite of business applications for sales, marketing, support, and operations."
  };
  
  const title = productTitles[productName as keyof typeof productTitles] || "Product Details";
  const description = productDescriptions[productName as keyof typeof productDescriptions] || "Business software solution by AccessGlobal Technology.";
  
  // Find the company/category data from productCategories
  const companyData = productCategories.find(cat => cat.slug === slug);

  // Only use the services for this company
  const companyServices = companyData ? companyData.services : [];
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <motion.div
      className="pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{title} | AccessGlobal Technology</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="product" />
      </Helmet>
      
      <Features
        services={companyServices}
        companyName={companyData?.name}
        companyDescription={productDescriptions[productName as keyof typeof productDescriptions]}
      />
      
      <Pricing 
        title={productData.pricing.title}
        description={productData.pricing.description}
        productName={productName}
      />
      
      <Testimonials />
      
      <CallToAction
        title={productData.cta.title}
        description={productData.cta.description}
        primaryButtonText={productData.cta.primaryButtonText}
        primaryButtonLink={productData.cta.primaryButtonLink}
        secondaryButtonText={productData.cta.secondaryButtonText}
        secondaryButtonLink={productData.cta.secondaryButtonLink}
        note={productData.cta.note}
      />
    </motion.div>
  );
};

export default ProductDetail;
