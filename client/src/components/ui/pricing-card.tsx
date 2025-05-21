import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  buttonText: string;
  buttonAction: () => void;
  popular?: boolean;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  buttonText,
  buttonAction,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-xl",
        popular && "transform scale-105 border-primary shadow-xl relative z-10",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-5 translate-y-3">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <CardHeader className={cn(
        "p-6 border-b",
        popular && "bg-gradient-to-r from-primary to-red-700 text-white"
      )}>
        {popular && (
          <div className="absolute top-0 left-0 w-full bg-primary text-white text-center py-1 text-sm font-semibold">
            MOST POPULAR
          </div>
        )}
        <div className={cn(popular && "mt-6")}>
          <h3 className="font-bold text-2xl mb-1">{name}</h3>
          <p className={cn(
            "text-gray-500 mb-4",
            popular && "text-gray-100"
          )}>
            {description}
          </p>
          <div className="flex items-end mb-4">
            <span className="font-bold text-4xl">{price}</span>
            <span className={cn(
              "text-gray-500 ml-1",
              popular && "text-gray-100"
            )}>
              {period}
            </span>
          </div>
          <Button 
            onClick={buttonAction}
            className={cn(
              "w-full",
              popular 
                ? "bg-white text-primary hover:bg-[#FFCC00] hover:text-gray-800" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            )}
          >
            {buttonText}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <>
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  <span>{feature.name}</span>
                </>
              ) : (
                <>
                  <X className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-gray-400">{feature.name}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
