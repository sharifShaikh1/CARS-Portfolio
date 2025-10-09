import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {/* Speed Line Effect on Entry */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary origin-left z-50"
      />
      
      {children}
    </motion.div>
  );
};

export default PageTransition;
