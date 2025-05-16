import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-red-50 p-4 rounded-full mb-6"
          >
            <AlertCircle className="h-16 w-16 text-red-500" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            404 - Page Not Found
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-xl mx-auto"
          >
            Sorry, the page you're looking for doesn't exist or has been moved.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 hover:bg-gray-100 flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Need help? <Link href="/contact"><span className="text-primary hover:underline cursor-pointer">Contact our support team</span></Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
