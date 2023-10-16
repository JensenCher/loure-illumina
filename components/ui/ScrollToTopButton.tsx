"use client";

import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll, useAnimationControls, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";

interface ScrollToOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTopContainerVariants: Variants = {
  hide: {
    // opacity: 0,
    transition: {
      duration: 0.05, // default duration for this transition
    },
    scale: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.15, // default duration for this transition
    },
    scale: 1,
  },
};

const ScrollToTopButton = () => {
  const [yValue, setYValue] = useState(0);
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (yValue == 0 && latestValue == 1) {
        // Prevent initial load show button
        setYValue(0);
        controls.start("hide");
      } else {
        setYValue(latestValue);
        if (yValue > 0.4) {
          controls.start("show");
        } else {
          controls.start("hide");
        }
      }
    });
  });

  return (
    <motion.button
      className="fixed bottom-[3.5rem] z-[100] right-[1.5rem] md:bottom-[5.5rem] md:right-[2.5rem] p-5 text-slate-200 hover:text-slate-100 dark:text-[#323233]
                bg-[#323233] dark:bg-slate-400 dark:hover:bg-slate-200 rounded-full scale-100 hover:scale-110 hover:bg-slate-500 transition duration-300"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
      title="Back to Top"
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default ScrollToTopButton;
