import { HeroSection1 } from "./HeroSection1";
import { HeroSection2 } from "./HeroSection2";
import { HeroSection3 } from "./HeroSection3";
import { HeroSection4 } from "./HeroSection4";
import { WebsiteFormData } from "../WebsiteForm";

export interface HeroSectionProps {
  formData: WebsiteFormData;
}

// Hero Section Components
export { HeroSection1, HeroSection2, HeroSection3, HeroSection4 };

// Mapping between style IDs and their corresponding hero sections
export const HERO_SECTION_MAP = {
  minimal: HeroSection1,
  bold: HeroSection2,
  modern: HeroSection3,
  classic: HeroSection4,
} as const;

// Type for valid style keys
export type StyleKey = keyof typeof HERO_SECTION_MAP;

// Helper function to get the appropriate hero section component
export const getHeroSection = (style: string) => {
  const normalizedStyle = style as StyleKey;
  return HERO_SECTION_MAP[normalizedStyle] || HERO_SECTION_MAP.modern;
};
