const button = {
  default: "#FC5055",
  hover: "#DD434B",
  pressing: "#DC3B43",
  disable: "#F6F7F8",
} as const;

const background = {
  tertiary: "#F6F7F8",
};

const monochrome = {
  white: "#FFF",
  black: "#212121",
};

const secondary = {
  borderGrey: "#E0E0E0",
};
export const palette = { monochrome, button, background, secondary } as const;
