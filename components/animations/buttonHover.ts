export const buttonHover = {
  container: {
    initial: {},
    hover: {},
    rest: {},
  },

  line: {
    initial: {
      width: 12,
    },

    hover: {
      width: 24,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },

    rest: {
      width: 12,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  text: {
    initial: {
      marginLeft: 13,
    },

    hover: {
      marginLeft: 18,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },

    rest: {
      marginLeft: 13,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  border: {
    initial: {
      borderColor: "#BF985C",
    },

    hover: {
      borderColor: "#BF985C",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },

    rest: {
      borderColor: "#BF985C",
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },
};