import { useState } from "react";
import { Globe } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import WebsiteForm, { type WebsiteFormData } from "../components/WebsiteForm";
import { WebsitePreview } from "../components/WebsitePreview";

export default function CreateWebsite() {
  const [formData, setFormData] = useState<WebsiteFormData>({
    heading: "",
    subheading: "",
    description: "",
    theme: {
      primaryColor: "#4F46E5",
      secondaryColor: "#818CF8",
      style: "modern",
    },
    socials: {
      twitter: "",
      discord: "",
      telegram: "",
    },
  });

  const handleFormDataChange = (data: WebsiteFormData) => {
    setFormData(data);
  };

  const handleSubmit = async (data: WebsiteFormData) => {
    // Custom submit logic can be added here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Website generated successfully! 🎉");
    console.log("Generated website with data:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Enhanced Header */}
      <motion.div
        className="bg-gradient-to-r from-white/90 via-blue-50/80 to-indigo-50/90 backdrop-blur-xl border-b border-gray-200/30 sticky top-0 z-40 shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-2xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Enhanced Icon */}
              <motion.div
                className="relative p-4 bg-blue-600 rounded-3xl shadow-xl"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div>
                  <Globe className="h-8 w-8 text-white drop-shadow-sm" />
                </motion.div>

                {/* Floating sparkles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                />
              </motion.div>

              {/* Enhanced Title Section */}
              <div className="space-y-2">
                <motion.h1
                  className="text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Website Builder
                  <motion.span
                    className="inline-block ml-2 text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    ✨
                  </motion.span>
                </motion.h1>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-slate-600 font-medium">
                    Create stunning websites in
                    <span className="text-blue-600 font-bold"> minutes</span>,
                    not hours
                  </p>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Status Section */}
            <div className="flex items-center gap-4">
              {/* Enhanced Live Preview */}
              <motion.div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/60 shadow-lg backdrop-blur-sm">
                <div className="relative">
                  <motion.div
                    className="w-3 h-3 bg-emerald-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(16, 185, 129, 0.4)",
                        "0 0 0 8px rgba(16, 185, 129, 0)",
                        "0 0 0 0 rgba(16, 185, 129, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-emerald-800">
                  Live Preview
                </span>
                <div className="text-emerald-600">⚡</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-160px)]">
          {/* Left Panel - Form */}
          <WebsiteForm
            onFormDataChange={handleFormDataChange}
            onSubmit={handleSubmit}
          />

          {/* Right Panel - Preview */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 h-full">
              <WebsitePreview
                formData={formData}
                selectedStyle={formData.theme?.style || "modern"}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
