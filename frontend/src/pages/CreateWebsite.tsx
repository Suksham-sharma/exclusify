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
      primaryColor: "#1E3A8A",
      secondaryColor: "#3B82F6",
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
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <motion.header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-200 shadow-sm"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <motion.div
              className="relative h-14 w-14 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg ring-1 ring-blue-500/30"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Globe className="h-7 w-7" />
              <motion.span
                className="absolute inset-0 rounded-2xl border border-white/20"
                animate={{ opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            <div className="space-y-0.5">
              <motion.h1
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Website Builder
              </motion.h1>
              <motion.p
                className="text-sm md:text-base text-slate-500 font-medium flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                Build polished pages in minutes
                <span className="inline-flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-blue-500/70"
                      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </span>
              </motion.p>
            </div>
          </div>
          {/* Status */}
          <motion.div
            className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium shadow-sm"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="relative flex h-2.5 w-2.5"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </motion.span>
            Live Preview
          </motion.div>
        </div>
      </motion.header>

      {/* Main Grid */}
      <main className="max-w-9xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[calc(100vh-160px)]">
          <motion.section
            className="bg-white rounded-2xl shadow-md border border-slate-200/70 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <WebsiteForm
              onFormDataChange={handleFormDataChange}
              onSubmit={handleSubmit}
            />
          </motion.section>

          {/* Preview Panel */}
          <motion.section
            className="bg-white rounded-2xl shadow-md border border-slate-200/70 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="p-6 h-full">
              <WebsitePreview
                formData={formData}
                selectedStyle={formData.theme?.style || "modern"}
              />
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
