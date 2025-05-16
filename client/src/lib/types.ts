export interface Product {
  id: number;
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  features: ProductFeature[];
  pricing: {
    title: string;
    description: string;
    plans: PricingPlan[];
  };
  testimonials: Testimonial[];
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    note?: string;
  };
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  popular: boolean;
  buttonText: string;
  features: PricingFeature[];
}

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  initials: string;
}

export interface PartnerLogo {
  name: string;
  logo: string;
}

export interface NavLink {
  name: string;
  href: string;
  submenu?: NavLink[];
}

export interface ProductCategory {
  name: string;
  slug: string;
  services: {
    name: string;
    slug: string;
  }[];
}
