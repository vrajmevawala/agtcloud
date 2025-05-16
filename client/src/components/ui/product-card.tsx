import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export function ProductCard({ title, description, icon, link }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="service-card h-full"
    >
      <Card className="h-full shadow-lg transition-all duration-300 hover:shadow-xl border-0 bg-white overflow-hidden">
        <CardContent className="p-0">
          <div className="p-8 flex flex-col h-full">
            <div className="bg-primary/10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 text-primary">
              {icon}
            </div>
            <h3 className="font-semibold text-xl mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-8 flex-grow">{description}</p>
            <Link href={link} className="w-full mt-auto">
              <div className="border-t border-gray-100 -mx-8 px-8 pt-5 pb-1">
                <Button 
                  variant="outline" 
                  className="w-full group bg-transparent border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Learn More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="transform transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
