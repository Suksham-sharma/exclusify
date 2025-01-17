import { motion } from "framer-motion";
import Button from "./Button";

export function SetupNotice() {
  return (
    <section className="container h-full flex flex-col items-center justify-center py-16 text-center relative bg-gradient-to-br from-zinc-100 via-white to-blue-300 shadow-lg rounded-xl ">
      <motion.div>
        <h2 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Exclusify Hub!
          </motion.span>
        </h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Complete your community setup to unlock all features and create
          tailored experiences for your NFT holders.
        </motion.p>
      </motion.div>
      <motion.div className="mt-10 flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="rounded-full bg-blue-800 px-8 text-white hover:bg-blue-800">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
