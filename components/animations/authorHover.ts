export const authorHover = {
  container: {
    default: {},
    hover: {},
  },

  line: {
    default: {
      rotate: 0,
      backgroundColor: "#404040",
    },

    hover: {
      rotate: 90,
      backgroundColor: "#BF985C",
    },
  },

  text: {
    default: {
      x: 0,
      color: "#404040",
    },

    hover: {
      x: 15,
      color: "#BF985C",
    },
  },

  transition: {
    duration: 0.45,
    ease: [0.4, 0, 0.2, 1] as const,
  },
};