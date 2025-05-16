import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
];

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  
  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center text-sm font-medium">
          <Globe className="h-4 w-4 mr-2" />
          {currentLanguage.name}
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="cursor-pointer"
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
