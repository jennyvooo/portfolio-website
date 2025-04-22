import { motion } from "framer-motion";
import bgImage from "../assets/bg-image.jpg";

export default function Home() {
  return (
    <motion.div
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-white text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-black/60 p-8 rounded-md backdrop-blur-sm max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Jenny Vo 👋</h1>
        <p className="text-lg">
          I'm a digital media student at the University of Central Florida. I love creating user-friendly and visually engaging digital experiences through design and development.
        </p>
      </div>
    </motion.div>
  );
}
