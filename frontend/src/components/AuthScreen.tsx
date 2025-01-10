import { motion } from "framer-motion";
import Button from "./Button";
import { Background } from "./Background";
import { useNavigate } from "react-router-dom";

interface AuthScreenProps {
  heading: string;
  type: "signin" | "signup";
  authComponent: React.ReactNode;
}

export function AuthScreen(props: AuthScreenProps) {
  const navigate = useNavigate();
  console.log(props.heading);
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
            {props.type === "signin" ? "Welcome back to " : "Get started with "}
            <span className="font-serif font-extralight italic text-zinc-600">
              Exclusify
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 mb-8">
            {props.heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <Background styles="hidden md:block" />
          <div className=" hidden md:flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
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
        {props.authComponent}
      </div>
      <motion.p
        className="mt-8 text-center text-sm text-zinc-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {props.type === "signin"
          ? "Don't have an account?"
          : "Already have an account?"}
        <span
          className="text-zinc-800 font-semibold cursor-pointer"
          onClick={() => {
            if (props.type === "signin") {
              navigate("/signup");
            } else {
              navigate("/signin");
            }
          }}
        >
          {props.type === "signin" ? " Sign Up" : " Sign In"}
        </span>
      </motion.p>
    </div>
  );
}
