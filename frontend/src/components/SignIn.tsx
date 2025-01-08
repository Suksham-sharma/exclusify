import { motion } from "framer-motion";
import Button from "./Button";
import { Background } from "./Background";

export function SignIn() {
  return (
    <section className="container flex flex-col items-center justify-center py-24 text-center lg:py-32 relative">
      <Background />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <h2 className="text-4xl font-medium tracking-tight mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome back to your
          </motion.span>{" "}
          <motion.span
            className="font-serif italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            exclusive space
          </motion.span>
        </h2>
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-600 text-left"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md text-sm shadow-sm placeholder-zinc-400
                         focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-600 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md text-sm shadow-sm placeholder-zinc-400
                         focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full rounded-full bg-zinc-900 px-8 text-white hover:bg-zinc-800">
              Sign In
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
      <motion.p
        className="mt-8 text-sm text-zinc-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Don't have an account?{" "}
        <a href="/signup" className="font-medium text-zinc-900 hover:underline">
          Sign up
        </a>
      </motion.p>
    </section>
  );
}
