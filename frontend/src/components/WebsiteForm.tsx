import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Palette,
  Share2,
  Sparkles,
  Layout,
  Loader2,
  Users,
  Hash,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ColorPicker } from "./ColorPicker";
const THEME_STYLES = [
  {
    id: "minimal",
    label: "Minimal",
    description: "Clean and simple design",
    preview: "bg-gray-100",
  },
  {
    id: "modern",
    label: "Modern",
    description: "Contemporary and sleek",
    preview: "bg-blue-50",
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
    preview: "bg-purple-50",
  },
];

const websiteSchema = z.object({
  heading: z.string().min(2, "Heading must be at least 2 characters"),
  subheading: z.string().min(10, "Subheading must be at least 10 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  theme: z.object({
    primaryColor: z.string(),
    secondaryColor: z.string(),
    style: z.enum(["minimal", "modern", "classic", "bold"]),
  }),
  socials: z.object({
    twitter: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    discord: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    telegram: z
      .string()
      .url("Must be a valid URL")
      .optional()
      .or(z.literal("")),
  }),
});

export type WebsiteFormData = z.infer<typeof websiteSchema>;

interface WebsiteFormProps {
  onFormDataChange: (data: WebsiteFormData) => void;
  onSubmit?: (data: WebsiteFormData) => Promise<void>;
}

export default function WebsiteForm({
  onFormDataChange,
  onSubmit,
}: WebsiteFormProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<"content" | "styles">("content");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WebsiteFormData>({
    resolver: zodResolver(websiteSchema),
    defaultValues: {
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
    },
  });

  const formData = watch();

  // Watch for changes and notify parent
  useEffect(() => {
    const subscription = watch((value) => {
      onFormDataChange(value as WebsiteFormData);
    });
    return () => subscription.unsubscribe();
  }, [watch, onFormDataChange]);

  const handleFormSubmit = async (data: WebsiteFormData) => {
    setIsGenerating(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default behavior
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Website generated successfully! 🎉");
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("Failed to generate website");
    } finally {
      setIsGenerating(false);
    }
  };

  const socialPlatforms = [
    {
      key: "twitter",
      label: "Twitter",
      icon: Hash,
      placeholder: "https://twitter.com/your-handle",
    },
    {
      key: "discord",
      label: "Discord",
      icon: Users,
      placeholder: "https://discord.gg/your-server",
    },
    {
      key: "telegram",
      label: "Telegram",
      icon: MessageCircle,
      placeholder: "https://t.me/your-channel",
    },
  ];

  return (
    <motion.div
      className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="h-full flex flex-col">
        <div className="relative p-2 bg-white border-b border-slate-200">
          <div className="flex rounded-xl p-1 bg-slate-100 border border-slate-200/70 gap-2">
            <motion.button
              type="button"
              onClick={() => setActiveTab("content")}
              className={`relative flex-1 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 border ${
                activeTab === "content"
                  ? "text-blue-700 bg-white shadow-lg shadow-blue-100/50"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white/20"
              }`}
              whileHover={{ scale: activeTab === "content" ? 1 : 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Layout className="h-4 w-4" />
                <span>Content</span>
              </div>
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActiveTab("styles")}
              className={`relative flex-1 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 border ${
                activeTab === "styles"
                  ? "bg-white border-slate-300 text-slate-900 shadow-sm"
                  : "bg-transparent border-transparent text-slate-500 hover:text-slate-700 hover:bg-white"
              }`}
              whileHover={{ scale: activeTab === "styles" ? 1 : 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Palette className="h-4 w-4" />
                <span>Styling</span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="h-full flex flex-col"
          >
            <div className="flex-1 space-y-6">
              {activeTab === "content" && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Enhanced Content Section */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200/50">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                        <Layout className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Website Content
                      </h3>
                    </div>

                    <div className="space-y-5">
                      <motion.div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Main Heading
                        </label>
                        <input
                          {...register("heading")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                          placeholder="Your Website's Main Heading"
                        />
                        {errors.heading && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.heading.message}
                          </p>
                        )}
                      </motion.div>

                      <motion.div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Subheading
                        </label>
                        <input
                          {...register("subheading")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                          placeholder="A compelling tagline for your community"
                        />
                        {errors.subheading && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.subheading.message}
                          </p>
                        )}
                      </motion.div>

                      <motion.div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Description
                        </label>
                        <textarea
                          {...register("description")}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70 resize-none"
                          placeholder="Describe your community and what makes it special..."
                        />
                        {errors.description && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.description.message}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Enhanced Social Links Section */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200/50">
                      <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                        <Share2 className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Social Links
                      </h3>
                    </div>

                    <div className="grid gap-4">
                      {socialPlatforms.map((platform) => (
                        <motion.div key={platform.key} className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <platform.icon className="h-4 w-4" />
                            {platform.label}
                          </label>
                          <input
                            {...register(`socials.${platform.key}` as any)}
                            type="url"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                            placeholder={platform.placeholder}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "styles" && (
                <motion.div
                  key="styles"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 min-h-[calc(100vh-360px)]"
                >
                  <div className="flex flex-col space-y-5">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200/50">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                        <Palette className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Color Theme
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <ColorPicker
                        label="Primary"
                        register={register}
                        name="theme.primaryColor"
                        value={formData.theme?.primaryColor}
                      />
                      <ColorPicker
                        label="Secondary"
                        register={register}
                        name="theme.secondaryColor"
                        value={formData.theme?.secondaryColor}
                      />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Design Style
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {THEME_STYLES.map((style) => (
                        <motion.label
                          key={style.id}
                          className={`relative flex flex-col rounded-xl border cursor-pointer transition-colors duration-200 overflow-hidden p-4 ${
                            formData.theme?.style === style.id
                              ? "border-blue-600 bg-white shadow-sm ring-1 ring-blue-600/30"
                              : "border-slate-200 bg-white hover:border-blue-400"
                          }`}
                          whileHover={{ scale: 1.015 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {formData.theme?.style === style.id && (
                            <motion.div
                              className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/80 to-blue-100/60"
                              layoutId="selectedStyle"
                              transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.6,
                              }}
                            />
                          )}
                          <div className="relative z-10 flex gap-3 items-start">
                            <input
                              type="radio"
                              value={style.id}
                              {...register("theme.style")}
                              className="mt-1 w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 shrink-0"
                            />
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-slate-900 text-sm tracking-tight">
                                  {style.label}
                                </div>
                              </div>
                              <div className="text-xs text-slate-600 leading-relaxed">
                                {style.description}
                              </div>
                            </div>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70">
              <motion.button
                type="submit"
                disabled={isGenerating}
                className="w-full h-14 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-colors font-semibold text-base shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative"
                whileHover={{ scale: isGenerating ? 1 : 1.015 }}
                whileTap={{ scale: isGenerating ? 1 : 0.97 }}
              >
                <div className="relative flex items-center gap-3">
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Generating Website...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      <span>Generate Website</span>
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
