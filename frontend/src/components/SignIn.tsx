import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { Background } from "./Background";

export function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen max-h-screen h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <Background styles="-left-52 top-48 " />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-800 mb-6">
            Welcome back to your{" "}
            <span className="font-serif font-extralight italic text-zinc-600">
              exclusive space
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 mb-8">
            Sign in to access your personalized dashboard, connect with
            like-minded individuals, and explore a world of possibilities.
          </p>
          <Background styles="hidden md:block" />
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-zinc-800 text-white hover:bg-zinc-700 px-6 py-3 rounded-full">
                Learn More
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-zinc-800 hover:bg-zinc-100 px-6 py-3 rounded-full border border-zinc-300">
                Take a Tour
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-zinc-800 mb-6 text-center">
            Sign In
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400
                           focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400
                           focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-300 text-zinc-600 focus:ring-zinc-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-zinc-700"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-zinc-600 hover:text-zinc-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full rounded-md bg-zinc-800 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {isLoading ? (
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="h-5 w-5 rounded-full border-t-2 border-r-2 border-white"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-zinc-500"></span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3"></div>
          </div>
        </motion.div>
      </div>
      <motion.p
        className="mt-8 text-center text-sm text-zinc-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Don't have an account?{" "}
        <a
          href="/signup"
          className="font-medium text-zinc-800 hover:underline focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
        >
          Sign up now
        </a>
      </motion.p>
    </div>
  );
}
