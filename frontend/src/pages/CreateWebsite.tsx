import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Palette, Share2, Layout } from "lucide-react";
import { toast } from "sonner";

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
  features: z.array(z.string()),
});

type WebsiteFormData = z.infer<typeof websiteSchema>;

const THEME_STYLES = [
  { id: "minimal", label: "Minimal", description: "Clean and simple design" },
  { id: "modern", label: "Modern", description: "Contemporary and sleek" },
  { id: "classic", label: "Classic", description: "Timeless and traditional" },
  { id: "bold", label: "Bold", description: "Strong and impactful" },
];

const FEATURE_OPTIONS = [
  { id: "blog", label: "Blog Section", icon: Layout },
  { id: "events", label: "Events Calendar", icon: Layout },
  { id: "gallery", label: "NFT Gallery", icon: Layout },
  { id: "forum", label: "Community Forum", icon: Layout },
  { id: "rewards", label: "Rewards Program", icon: Layout },
];

export default function CreateWebsite() {
  const [isGenerating, setIsGenerating] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<WebsiteFormData>({
    resolver: zodResolver(websiteSchema),
    defaultValues: {
      theme: {
        primaryColor: "#4F46E5",
        secondaryColor: "#818CF8",
        style: "modern",
      },
      features: [],
    },
  });

  const onSubmit = async (data: WebsiteFormData) => {
    setIsGenerating(true);
    try {
      // TODO: Add API call to generate website
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Website generation started!");
    } catch (error: unknown) {
      console.log(error);
      toast.error("Failed to start website generation");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/20 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-indigo-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[85vh]">
            {/* Left Panel */}
            <div className="col-span-2 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              </div>
              <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-white tracking-tight">
                    Create Your Website
                  </h1>
                  <p className="text-lg text-indigo-100 leading-relaxed">
                    Generate a custom website for your community in minutes.
                    Choose your style, add your content, and let AI do the rest.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-indigo-100">
                      <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Palette className="h-5 w-5" />
                      </div>
                      <span>Customizable themes and styles</span>
                    </div>
                    <div className="flex items-center gap-3 text-indigo-100">
                      <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Share2 className="h-5 w-5" />
                      </div>
                      <span>Integrated social links</span>
                    </div>
                    <div className="flex items-center gap-3 text-indigo-100">
                      <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Layout className="h-5 w-5" />
                      </div>
                      <span>Modular feature selection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="col-span-3 p-8 lg:p-12 bg-white/50 backdrop-blur-sm">
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                  {/* Basic Content */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Website Heading
                        </label>
                        <input
                          {...register("heading")}
                          className="form-input-style"
                          placeholder="Your Website's Main Heading"
                        />
                        {errors.heading && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.heading.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Subheading
                        </label>
                        <input
                          {...register("subheading")}
                          className="form-input-style"
                          placeholder="A brief tagline for your website"
                        />
                        {errors.subheading && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.subheading.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Description
                        </label>
                        <textarea
                          {...register("description")}
                          rows={4}
                          className="form-input-style resize-none"
                          placeholder="Describe your community and what visitors can expect..."
                        />
                        {errors.description && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.description.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Theme Selection */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                      <Palette className="h-5 w-5 text-indigo-600" />
                      <h3 className="text-lg font-medium text-gray-900">
                        Theme Settings
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Primary Color
                        </label>
                        <div className="relative">
                          <input
                            {...register("theme.primaryColor")}
                            type="color"
                            className="h-12 w-full rounded-xl cursor-pointer border-2 border-gray-200 focus:border-indigo-500 transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Secondary Color
                        </label>
                        <input
                          {...register("theme.secondaryColor")}
                          type="color"
                          className="h-12 w-full rounded-xl cursor-pointer border-2 border-gray-200 focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {THEME_STYLES.map((style) => (
                        <label
                          key={style.id}
                          className="relative flex items-start p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-indigo-500 transition-colors"
                        >
                          <input
                            type="radio"
                            value={style.id}
                            {...register("theme.style")}
                            className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                          />
                          <div className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">
                              {style.label}
                            </span>
                            <span className="block text-sm text-gray-500">
                              {style.description}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                      <Share2 className="h-5 w-5" />
                      Social Links
                    </h3>
                    <div className="grid gap-4">
                      {["twitter", "discord", "telegram"].map((social) => (
                        <div key={social}>
                          <label className="block text-sm font-medium text-gray-700 capitalize">
                            {social}
                          </label>
                          <input
                            {...register(`socials.${social}` as any)}
                            type="url"
                            className="form-input-style mt-1"
                            placeholder={`https://${social}.com/...`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                      <Layout className="h-5 w-5" />
                      Features
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {FEATURE_OPTIONS.map((feature) => (
                        <label
                          key={feature.id}
                          className="relative flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            value={feature.id}
                            {...register("features")}
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600"
                          />
                          <span className="text-sm font-medium text-gray-900">
                            {feature.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl 
                             hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                             focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 
                             font-medium shadow-lg shadow-indigo-500/25 disabled:opacity-70 
                             disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Generating Your Website...</span>
                      </>
                    ) : (
                      "Generate Website"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
