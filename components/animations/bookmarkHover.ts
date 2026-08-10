export const bookmarkHover = {
  container: {
    initial: {},
    hover: {},
    rest: {},
  },

  filledIcon: {
    initial: {
      opacity: 0,
    },

    hover: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },

    rest: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  outlineIcon: {
    initial: {
      opacity: 1,
    },

    hover: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },

    rest: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  tooltip: {
    initial: {
      opacity: 0,
      y: -4,
      pointerEvents: "none" as const,
    },

    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },

    rest: {
      opacity: 0,
      y: -4,
      pointerEvents: "none" as const,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },
};