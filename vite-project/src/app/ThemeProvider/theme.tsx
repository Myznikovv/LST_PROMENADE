import { createTheme } from "@mui/material";
import InterRegular from "/fonts/Inter-Regular.ttf";
import InterMedium from "/fonts/Inter-Medium.ttf";
import InterBold from "/fonts/Inter-Bold.ttf";
export const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 700,
      lineHeight: "125%",
      fontSize: "32px",
    },
    h2: {
      fontWeight: 700,
      lineHeight: "125%",
      fontSize: "24px",
    },
    body1: {
      fontWeight: 400,
      lineHeight: "125%",
      fontSize: "16px",
    },
    caption: {
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
    },
    button: {
      fontWeight: 500,
      lineHeight: "100%",
      fontSize: "20px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterRegular}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: "Inter";
          font-style: medium;
          font-display: swap;
          font-weight: 500;
          src: local('Inter'), local('Inter-Medium'), url(${InterMedium}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: "Inter";
          font-style: bold;
          font-display: swap;
          font-weight: 700;
          src: local('Inter'), local('Inter-Bold'), url(${InterBold}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
