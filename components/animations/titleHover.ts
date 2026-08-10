export const titleHover = {
  initial: {
    color: "#090909",
  },

  hover: {
    color: "#BF985C",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  rest: {
    color: "#090909",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};