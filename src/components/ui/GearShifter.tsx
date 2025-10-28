import { motion } from "framer-motion";

const GearShifter = ({ isOpen }) => {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.3 }}
      className="w-6 h-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 L12 22" />
        <path d="M12 6 L6 6" />
        <path d="M12 12 L18 12" />
        <path d="M12 18 L6 18" />
      </svg>
    </motion.div>
  );
};

export default GearShifter;
