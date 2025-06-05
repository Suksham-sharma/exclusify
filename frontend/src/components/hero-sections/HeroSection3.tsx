import { motion } from "framer-motion";
import { Share2, ArrowRight, Sparkles, Globe } from "lucide-react";
import { WebsiteFormData } from "../WebsiteForm";

interface HeroSectionProps {
  formData: WebsiteFormData;
}

export const HeroSection3 = ({ formData }: HeroSectionProps) => {
  const socialLinks = [
    { key: "twitter", url: formData.socials?.twitter },
    { key: "discord", url: formData.socials?.discord },
    { key: "telegram", url: formData.socials?.telegram },
  ].filter((social) => social.url);

  return (
    <motion.div
      className="h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-pink-400/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-8 right-8 w-4 h-4 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-12 left-12 w-3 h-3 bg-purple-400 rounded-full opacity-80"
          animate={{
            x: [0, 10, 0],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center p-8 text-white">
        {/* Modern Header */}
        <div className="space-y-8">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <span className="text-blue-200 text-sm font-medium tracking-wide uppercase">
              Next Generation
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {formData.heading || (
              <>
                Modern{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Community
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            className="text-slate-300 text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {formData.subheading ||
              "Cutting-edge technology meets elegant design"}
          </motion.p>

          {/* Modern CTA */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium">Join the Future</span>
              <ArrowRight className="h-4 w-4 text-blue-300" />
            </div>
          </motion.div>
        </div>

        {/* Modern Content */}
        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <p className="text-slate-200 leading-relaxed">
              {formData.description ||
                "Experience the perfect blend of innovation and sophistication. Our modern approach redefines what community engagement can be."}
            </p>
          </div>

          {/* Modern Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.key}
                  className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 hover:border-white/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Share2 className="h-4 w-4 text-blue-200" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Modern Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-2xl font-bold text-white mb-1">3.8K</div>
              <div className="text-sm text-slate-400">Active Users</div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-400 to-purple-500 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ delay: 1.6, duration: 1 }}
                />
              </div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-2xl font-bold text-white mb-1">96%</div>
              <div className="text-sm text-slate-400">Satisfaction</div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-400 to-pink-500 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "96%" }}
                  transition={{ delay: 1.7, duration: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
