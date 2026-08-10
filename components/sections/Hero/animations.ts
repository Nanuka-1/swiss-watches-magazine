import type { Variants } from "framer-motion";

export const slideInFromLeft: Variants = {
  hidden: {
    x: -600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};