import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Palette,
  Share2,
  Sparkles,
  Globe,
  Layout,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FormSection } from "../components/FormSection";
import { InputField } from "../components/InputField";
import { ColorPicker } from "../components/ColorPicker";
import { WebsitePreview, THEME_STYLES } from "../components/WebsitePreview";

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

type WebsiteFormData = z.infer<typeof websiteSchema>;

export default function CreateWebsite() {
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

  // Watch form data for live preview
  const formData = watch();

  const onSubmit = async () => {
    setIsGenerating(true);
    try {
      // TODO: Add API call to generate website
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Website generated successfully! 🎉");
    } catch (error: unknown) {
      console.log(error);
      toast.error("Failed to generate website");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30">
      {/* Header */}
      <motion.div
        className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Website Builder
                </h1>
                <p className="text-sm text-gray-600">
                  Create your community website in minutes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="h-4 w-4" />
              <span>Live Preview Active</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-9xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-120px)]">
          {/* Left Panel - Form */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full flex flex-col">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 bg-gray-50/50 rounded-t-2xl">
                <button
                  type="button"
                  onClick={() => setActiveTab("content")}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 ${
                    activeTab === "content"
                      ? "text-indigo-600 border-b-2 border-indigo-600 bg-white"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Layout className="h-4 w-4" />
                    Content
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("styles")}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 ${
                    activeTab === "styles"
                      ? "text-indigo-600 border-b-2 border-indigo-600 bg-white"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Palette className="h-4 w-4" />
                    Styles
                  </div>
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-8 overflow-y-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="h-full flex flex-col"
                >
                  <div className="flex-1 space-y-8">
                    {activeTab === "content" && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        {/* Basic Content Section */}
                        <FormSection title="Website Content" icon={Layout}>
                          <div className="space-y-6">
                            <InputField
                              label="Website Heading"
                              error={errors.heading?.message}
                            >
                              <input
                                {...register("heading")}
                                className="form-input-style"
                                placeholder="Your Website's Main Heading"
                              />
                            </InputField>

                            <InputField
                              label="Subheading"
                              error={errors.subheading?.message}
                            >
                              <input
                                {...register("subheading")}
                                className="form-input-style"
                                placeholder="A compelling tagline for your community"
                              />
                            </InputField>

                            <InputField
                              label="Description"
                              error={errors.description?.message}
                            >
                              <textarea
                                {...register("description")}
                                rows={6}
                                className="form-input-style resize-none"
                                placeholder="Describe your community and what makes it special. Tell visitors about your unique features, benefits, and what they can expect when they join..."
                              />
                            </InputField>
                          </div>
                        </FormSection>
                      </motion.div>
                    )}

                    {activeTab === "styles" && (
                      <motion.div
                        key="styles"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        {/* Theme Section */}
                        <FormSection title="Theme & Colors" icon={Palette}>
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <ColorPicker
                                label="Primary Color"
                                register={register}
                                name="theme.primaryColor"
                                value={formData.theme?.primaryColor}
                              />
                              <ColorPicker
                                label="Secondary Color"
                                register={register}
                                name="theme.secondaryColor"
                                value={formData.theme?.secondaryColor}
                              />
                            </div>

                            <div className="space-y-3">
                              <label className="block text-sm font-medium text-gray-700">
                                Style Theme
                              </label>
                              <div className="grid grid-cols-2 gap-3">
                                {THEME_STYLES.map((style) => (
                                  <motion.label
                                    key={style.id}
                                    className="relative flex items-start p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-indigo-500 transition-all duration-200"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <input
                                      type="radio"
                                      value={style.id}
                                      {...register("theme.style")}
                                      className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                    />
                                    <div className="ml-3 flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium text-gray-900">
                                          {style.label}
                                        </span>
                                        <div
                                          className={`w-4 h-4 rounded-full ${style.preview}`}
                                        />
                                      </div>
                                      <span className="text-xs text-gray-500">
                                        {style.description}
                                      </span>
                                    </div>
                                  </motion.label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </FormSection>

                        {/* Social Links Section */}
                        <FormSection title="Social Links" icon={Share2}>
                          <div className="space-y-4">
                            {["twitter", "discord", "telegram"].map(
                              (social) => (
                                <InputField
                                  key={social}
                                  label={
                                    social.charAt(0).toUpperCase() +
                                    social.slice(1)
                                  }
                                >
                                  <input
                                    {...register(`socials.${social}` as any)}
                                    type="url"
                                    className="form-input-style"
                                    placeholder={`https://${social}.com/your-profile`}
                                  />
                                </InputField>
                              )
                            )}
                          </div>
                        </FormSection>
                      </motion.div>
                    )}
                  </div>

                  {/* Generate Button - Always visible */}
                  <div className="pt-6 border-t border-gray-200 mt-8">
                    <motion.button
                      type="submit"
                      disabled={isGenerating}
                      className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl 
                               hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                               focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 
                               font-semibold shadow-lg shadow-indigo-500/25 disabled:opacity-70 
                               disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      whileHover={{ scale: isGenerating ? 1 : 1.02 }}
                      whileTap={{ scale: isGenerating ? 1 : 0.98 }}
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Generating Your Website...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-5 w-5" />
                          <span>Generate Website</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Preview */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden"
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
