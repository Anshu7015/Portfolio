/**
 * Reusable animation transitions and easing presets for Motion.
 * Keeps transitions lightweight and clean across all components.
 */

export const easings = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  premiumEase: [0.16, 1, 0.3, 1], // Premium expo-like custom curve
};

export const transitions = {
  fast: {
    type: "tween",
    ease: easings.premiumEase,
    duration: 0.2,
  },
  default: {
    type: "tween",
    ease: easings.premiumEase,
    duration: 0.35,
  },
  slow: {
    type: "tween",
    ease: easings.premiumEase,
    duration: 0.6,
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
};
