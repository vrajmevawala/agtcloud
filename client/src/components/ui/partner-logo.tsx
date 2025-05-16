import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PartnerLogoProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

export function PartnerLogo({ icon, name, className }: PartnerLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "grayscale hover:grayscale-0 transition duration-300 flex items-center justify-center",
        className
      )}
      title={name}
    >
      {icon}
    </motion.div>
  );
}
