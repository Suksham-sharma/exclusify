import { motion } from "framer-motion";

interface FormSectionProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

export const FormSection = ({
  title,
  icon: Icon,
  children,
}: FormSectionProps) => (
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
      <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    {children}
  </motion.div>
);
