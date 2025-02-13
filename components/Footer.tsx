"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Made with{" "}
          <motion.span
            className="inline-block text-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
          >
            <FaHeart />
          </motion.span>{" "}
          by{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 animate-pulse">
            ILYOSBEK
          </span>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
