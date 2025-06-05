import { motion } from "framer-motion";
import { Share2, Zap, Users, Star } from "lucide-react";
import { WebsiteFormData } from "../WebsiteForm";

interface HeroSectionProps {
  formData: WebsiteFormData;
}

export const HeroSection2 = ({ formData }: HeroSectionProps) => {
  const socialLinks = [
    { key: "twitter", url: formData.socials?.twitter },
    { key: "discord", url: formData.socials?.discord },
    { key: "telegram", url: formData.socials?.telegram },
  ].filter((social) => social.url);

  return (
    <motion.div
      className="h-full relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-4 right-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-6 left-6 w-16 h-16 bg-blue-400/40 rounded-full blur-lg"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center p-8 text-white">
        {/* Bold Header */}
        <div className="text-center space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Zap className="h-4 w-4 text-yellow-300" />
            <span>POWER MODE</span>
          </motion.div>

          <motion.h1
            className="text-4xl font-black text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {formData.heading || "BOLD & FEARLESS"}
          </motion.h1>

          <motion.p
            className="text-white/90 text-xl font-bold max-w-sm mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {formData.subheading || "Making waves in the digital space"}
          </motion.p>
        </div>

        {/* Bold Content */}
        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
            <p className="text-white/95 font-medium leading-relaxed">
              {formData.description ||
                "Bold moves, big results. We're not here to play it safe - we're here to revolutionize your community experience!"}
            </p>
          </div>

          {/* Bold Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.key}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <Share2 className="h-5 w-5 text-white" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Bold Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <motion.div
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Users className="h-6 w-6 text-yellow-300 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">5.2K</div>
              <div className="text-xs text-white/80 font-bold uppercase">
                MEMBERS
              </div>
            </motion.div>
            <motion.div
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <Star className="h-6 w-6 text-yellow-300 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">4.9</div>
              <div className="text-xs text-white/80 font-bold uppercase">
                RATING
              </div>
            </motion.div>
            <motion.div
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Zap className="h-6 w-6 text-yellow-300 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-xs text-white/80 font-bold uppercase">
                ENERGY
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
