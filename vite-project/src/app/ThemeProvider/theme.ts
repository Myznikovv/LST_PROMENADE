import { createTheme } from "@mui/material";
import { typography } from "../../shared/config/typography";

import InterRegular from "/fonts/Inter-Regular.ttf";
import InterMedium from "/fonts/Inter-Medium.ttf";
import InterBold from "/fonts/Inter-Bold.ttf";

export const theme = createTheme({
  typography: typography,
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
