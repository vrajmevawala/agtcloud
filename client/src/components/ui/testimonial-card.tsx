import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  initials: string;
}

export function TestimonialCard({ quote, author, role, rating, initials }: TestimonialCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
      <CardContent className="p-8 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center mb-4">
            <div className="text-[#FFCC00]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`inline-block h-4 w-4 ${i < rating ? 'fill-current' : 'stroke-current fill-none'}`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-6">{quote}</p>
        </div>
        <div className="flex items-center mt-auto">
          <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
            <span className="font-medium text-gray-800">{initials}</span>
          </div>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}