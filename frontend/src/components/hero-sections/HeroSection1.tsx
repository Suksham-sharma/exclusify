import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { WebsiteFormData } from "../WebsiteForm";

interface HeroSectionProps {
  formData: WebsiteFormData;
}

export const HeroSection1 = ({ formData }: HeroSectionProps) => {
  const socialLinks = [
    { key: "twitter", url: formData.socials?.twitter },
    { key: "discord", url: formData.socials?.discord },
    { key: "telegram", url: formData.socials?.telegram },
  ].filter((social) => social.url);

  return (
    <motion.div
      className="h-full flex flex-col justify-center bg-white rounded-lg p-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Minimal Header */}
      <div className="text-center space-y-6">
        <motion.h1
          className="text-3xl font-light text-gray-900 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {formData.heading || "Clean & Simple"}
        </motion.h1>

        <motion.div
          className="w-8 h-px bg-gray-800 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        <motion.p
          className="text-gray-600 text-lg font-light max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {formData.subheading || "Elegantly minimal approach"}
        </motion.p>
      </div>

      {/* Content */}
      <motion.div
        className="mt-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="bg-gray-50 rounded p-4 border-l-2 border-gray-300">
          <p className="text-gray-700 text-sm leading-relaxed">
            {formData.description ||
              "Simple, clean, and focused. Less is more in this beautifully minimal approach to web design."}
          </p>
        </div>

        {/* Minimal Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-6 pt-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.key}
                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Share2 className="h-3 w-3 text-gray-600" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Minimal Stats */}
        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900">1.2K</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900">99%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Uptime
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
