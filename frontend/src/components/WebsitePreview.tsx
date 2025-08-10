import { getHeroSection } from "./hero-sections";
import { WebsiteFormData } from "./WebsiteForm";
import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

interface WebsitePreviewProps {
  formData: WebsiteFormData;
  selectedStyle: string;
}

export const WebsitePreview = ({
  formData,
  selectedStyle,
}: WebsitePreviewProps) => {
  const HeroSectionComponent = getHeroSection(selectedStyle);
  const [isExpanded, setIsExpanded] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!isExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isExpanded]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200/50 shadow-sm">
        <span className="text-sm font-medium text-gray-700">Live Preview</span>
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="ml-auto inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow hover:bg-gray-50 active:scale-[.98] transition"
          aria-label="Expand preview"
        >
          <Maximize2 className="w-4 h-4" />
          Expand
        </button>
      </div>

      <div className="flex-1 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
        <HeroSectionComponent formData={formData} />
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative w-[95%] h-[95%] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50/80 backdrop-blur-sm">
              <span className="text-sm font-medium text-gray-700">Preview</span>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-1 rounded-md bg-gray-800 text-white px-3 py-1.5 text-xs font-medium shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                aria-label="Close expanded preview"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 bg-white">
              <div className="h-full rounded-md border border-gray-200">
                <HeroSectionComponent formData={formData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
