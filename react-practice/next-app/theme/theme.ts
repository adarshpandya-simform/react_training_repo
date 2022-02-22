import { createTheme, Theme } from "@mui/material";

// custom themes according to theme mode

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

// returns theme based on mode
export const getTheme = (mode: "light" | "dark"): Theme => {
  return mode === "light" ? lightMode : darkMode;
};
