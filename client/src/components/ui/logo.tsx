import React from "react";
import agtLogoPath from "@assets/agt-logo.png";
import logoPath from "@assets/logo.png";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = "default", className = "h-12" }) => {
  // Use different logos based on variant
  const logoSrc = variant === "white" ? logoPath : agtLogoPath;
  return (
    <img src={logoSrc} alt="AGT - AccessGlobal Technology" className={className} />
  );
};
