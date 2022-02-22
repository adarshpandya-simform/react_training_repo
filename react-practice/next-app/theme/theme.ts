import { createTheme, Theme } from "@mui/material";

const lightMode: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFA951",
    },
    secondary: {
      main: "#FF603D",
    },
  },
});

const darkMode: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff176",
    },
    secondary: {
      main: "#ffa726",
    },
  },
});

export const getTheme = (mode: "light" | "dark"): Theme => {
  return mode === "light" ? lightMode : darkMode;
};
