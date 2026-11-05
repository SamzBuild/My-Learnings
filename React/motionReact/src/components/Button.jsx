import { motion } from "motion/react";
import React from "react";

const Button = () => {
  return (
    <motion.button whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} transition={{type:"spring", stiffness: 200, damping: 5}}>
      Click
    </motion.button>
  );
};

export default Button;
