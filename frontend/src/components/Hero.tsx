import { motion } from "framer-motion";
import Button from "./Button";
import { Background } from "./Background";

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center py-24 text-center lg:py-32 relative">
      <Background />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="max-w-4xl text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Exclusive spaces <br />
          </motion.span>
          <motion.span
            className="font-serif italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            powered by your NFTs.
          </motion.span>
        </h1>
      </motion.div>
      <motion.p
        className="mx-auto mt-10 max-w-2xl text-lg text-zinc-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Empower your NFT holders with exclusive access to tailored content and
        vibrant communities. Our platform makes it simple to create dynamic,
        token-gated experiences that foster engagement and loyalty.
      </motion.p>
      <motion.div
        className="mt-10 flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="rounded-full bg-zinc-900 px-8 text-white hover:bg-zinc-800">
            <a href="/register">Sign up free →</a>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className=" border-black border-2 px-3 py-2 hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] rounded-full">
            Try it Live
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
