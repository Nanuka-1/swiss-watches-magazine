export const categoryHover = {
  container: {
    initial: {},
    hover: {},
  },

  line: {
    initial: {
      width: 0,
      opacity: 0,
    },

    hover: {
      width: 13,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },

    rest: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  text: {
  initial: {
    marginLeft: 0,
    color: "#404040",
  },

  hover: {
    marginLeft: 17,
    color: "#BF985C",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  rest: {
    marginLeft: 0,
    color: "#404040",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
       },
    },
  },
};