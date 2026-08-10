export const imageHover = {
  initial: {
    scale: 1,
  },

  hover: {
    scale: 1.11,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  rest: {
    scale: 1,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};