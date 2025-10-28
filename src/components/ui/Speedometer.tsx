import { motion, useScroll } from "framer-motion";

const Speedometer = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-24 h-12 bg-gray-800 rounded-full flex items-center justify-center">
      <motion.div
        className="w-2 h-8 bg-red-500 rounded-full"
        style={{ rotate: scrollYProgress * 180 }}
      />
    </div>
  );
};

export default Speedometer;
