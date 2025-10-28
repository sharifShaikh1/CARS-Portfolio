import { motion } from "framer-motion";

const AnimatedPiston = () => {
  return (
    <motion.div
      className="w-4 h-16 bg-gray-600 rounded-t-md"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

export default AnimatedPiston;
