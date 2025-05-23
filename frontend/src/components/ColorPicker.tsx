import { Palette } from "lucide-react";
import { useState } from "react";

interface ColorPickerProps {
  label: string;
  register: any;
  name: string;
  value?: string;
}

export const ColorPicker = ({
  label,
  register,
  name,
  value,
}: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(value || "#4F46E5");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(e.target.value);
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <Palette className="h-4 w-4 text-gray-500" />
        {label}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-14 rounded-xl border-2 border-gray-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 bg-white shadow-sm hover:shadow-md group overflow-hidden"
        >
          <div className="flex items-center justify-between p-3 h-full">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg border-2 border-white shadow-sm ring-1 ring-gray-200 group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: currentColor }}
              />

              <div className="text-left">
                <div className="text-sm font-medium text-gray-900">
                  {currentColor.toUpperCase()}
                </div>
                <div className="text-xs text-gray-500">Click to change</div>
              </div>
            </div>

            <div
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </button>

        <input
          {...register(name)}
          type="color"
          value={currentColor}
          onChange={handleColorChange}
          className="absolute opacity-0 pointer-events-none"
          style={{ top: "-9999px" }}
        />

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg z-50 p-4">
            <div className="space-y-4">
              {/* Color Input */}
              <div className="relative">
                <input
                  type="color"
                  value={currentColor}
                  onChange={handleColorChange}
                  className="w-full h-20 rounded-lg cursor-pointer transition-colors bg-transparent"
                />
              </div>

              {/* Preset Colors */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-600">
                  Quick Colors
                </div>
                <div className="grid grid-cols-8 gap-2">
                  {[
                    "#4F46E5",
                    "#7C3AED",
                    "#EC4899",
                    "#EF4444",
                    "#F59E0B",
                    "#10B981",
                  ].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => {
                        setCurrentColor(color);
                        setIsOpen(false);
                      }}
                      className="w-8 h-8 rounded-lg border-2 border-white shadow-sm ring-1 ring-gray-200 hover:scale-110 transition-transform duration-150"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};
