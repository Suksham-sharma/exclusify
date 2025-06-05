import { motion } from "framer-motion";
import { Share2, Crown, Award, Shield } from "lucide-react";
import { WebsiteFormData } from "../WebsiteForm";

interface HeroSectionProps {
  formData: WebsiteFormData;
}

export const HeroSection4 = ({ formData }: HeroSectionProps) => {
  const socialLinks = [
    { key: "twitter", url: formData.socials?.twitter },
    { key: "discord", url: formData.socials?.discord },
    { key: "telegram", url: formData.socials?.telegram },
  ].filter((social) => social.url);

  return (
    <motion.div
      className="h-full relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-lg border-2 border-amber-200"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Classic Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-6 w-32 h-32 border border-amber-200/40 rounded-full" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border border-orange-200/40 rounded-full" />
        <div className="absolute top-1/3 right-12 w-2 h-2 bg-amber-400 rounded-full opacity-60" />
        <div className="absolute bottom-1/3 left-12 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50" />
      </div>

      {/* Classic Ornamental Border */}
      <div className="absolute inset-4 border border-amber-300/30 rounded-lg" />

      <div className="relative z-10 h-full flex flex-col justify-center p-8">
        {/* Classic Header */}
        <div className="text-center space-y-6">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Crown className="h-6 w-6 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-xs text-amber-600 font-medium uppercase tracking-widest">
              ESTABLISHED EXCELLENCE
            </div>
            <h1 className="text-4xl font-serif text-amber-900 leading-tight">
              {formData.heading || "Timeless Elegance"}
            </h1>
            <div className="flex justify-center items-center gap-4">
              <div className="w-8 h-px bg-amber-400" />
              <div className="w-3 h-3 border-2 border-amber-400 rounded-full bg-amber-50" />
              <div className="w-8 h-px bg-amber-400" />
            </div>
          </motion.div>

          <motion.p
            className="text-amber-800 text-lg font-medium max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {formData.subheading || "Where tradition meets sophistication"}
          </motion.p>
        </div>

        {/* Classic Content */}
        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200/50 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <Award className="h-4 w-4 text-amber-600" />
              </div>
              <p className="text-amber-900 leading-relaxed flex-1">
                {formData.description ||
                  "Experience the finest in community craftsmanship. Our classic approach honors tradition while embracing the future of digital connections."}
              </p>
            </div>
          </div>

          {/* Classic Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.key}
                  className="w-10 h-10 bg-white border-2 border-amber-300 rounded-full flex items-center justify-center hover:bg-amber-50 transition-all shadow-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.15 }}
                >
                  <Share2 className="h-4 w-4 text-amber-600" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Classic Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-amber-200">
                <Crown className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-2xl font-serif font-bold text-amber-900">
                2.1K
              </div>
              <div className="text-xs text-amber-700 uppercase tracking-wide">
                Members
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-amber-200">
                <Award className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-2xl font-serif font-bold text-amber-900">
                Est.
              </div>
              <div className="text-xs text-amber-700 uppercase tracking-wide">
                2020
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-amber-200">
                <Shield className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-2xl font-serif font-bold text-amber-900">
                100%
              </div>
              <div className="text-xs text-amber-700 uppercase tracking-wide">
                Trusted
              </div>
            </motion.div>
          </div>

          {/* Classic Badge */}
          <motion.div
            className="flex justify-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-300/50">
              <Crown className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">
                Premium Quality
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
