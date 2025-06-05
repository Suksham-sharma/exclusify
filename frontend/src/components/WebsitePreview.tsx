import { Eye } from "lucide-react";
import { getHeroSection } from "./hero-sections";
import { WebsiteFormData } from "./WebsiteForm";

const THEME_STYLES = [
  {
    id: "minimal",
    label: "Minimal",
    description: "Clean and simple design",
    preview: "bg-gray-50",
  },
  {
    id: "modern",
    label: "Modern",
    description: "Contemporary and sleek",
    preview: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
  {
    id: "classic",
    label: "Classic",
    description: "Timeless and traditional",
    preview: "bg-amber-50",
  },
  {
    id: "bold",
    label: "Bold",
    description: "Strong and impactful",
    preview: "bg-gradient-to-br from-purple-100 to-pink-100",
  },
];

interface WebsitePreviewProps {
  formData: WebsiteFormData;
  selectedStyle: string;
}

export const WebsitePreview = ({
  formData,
  selectedStyle,
}: WebsitePreviewProps) => {
  // Get the appropriate hero section component based on the selected style
  const HeroSectionComponent = getHeroSection(selectedStyle);

  return (
    <div className="h-full flex flex-col">
      {/* Enhanced Browser Bar */}
      <div className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200/50 shadow-sm">
        <Eye className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Live Preview</span>
        <div className="ml-auto flex gap-1">
          <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm" />
          <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm" />
        </div>
      </div>

      {/* Dynamic Hero Section */}
      <div className="flex-1 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
        <HeroSectionComponent formData={formData} />
      </div>
    </div>
  );
};

export { THEME_STYLES };
