import { Eye, Share2 } from "lucide-react";

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
  formData: any;
  selectedStyle: string;
}

export const WebsitePreview = ({
  formData,
  selectedStyle,
}: WebsitePreviewProps) => {
  const themeStyle =
    THEME_STYLES.find((style) => style.id === selectedStyle) || THEME_STYLES[1];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4 p-3 bg-gray-100 rounded-lg">
        <Eye className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Live Preview</span>
        <div className="ml-auto flex gap-1">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>
      </div>

      <div
        className={`flex-1 rounded-xl overflow-hidden border-2 border-gray-200 ${themeStyle.preview}`}
      >
        <div className="h-full p-6 flex flex-col">
          {/* Preview Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {formData.heading || "Your Website Heading"}
            </h1>
            <p className="text-gray-600 mb-4">
              {formData.subheading || "Your compelling subheading goes here"}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Preview Content */}
          <div className="flex-1 space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 text-sm leading-relaxed">
                {formData.description ||
                  "Your detailed description will appear here, explaining what your community offers and why visitors should join."}
              </p>
            </div>

            {/* Social Links Preview */}
            <div className="flex gap-3 justify-center">
              {["twitter", "discord", "telegram"].map((social) => (
                <div
                  key={social}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    formData.socials?.[social]
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <Share2 className="h-4 w-4" />
                </div>
              ))}
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-3 bg-white/50 rounded-lg">
                <div className="text-lg font-bold text-gray-900">1.2K</div>
                <div className="text-xs text-gray-600">Members</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg">
                <div className="text-lg font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { THEME_STYLES };
