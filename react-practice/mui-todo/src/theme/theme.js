import { createTheme } from "@mui/material";

// helper fn to set theme
export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
    },
  });
};
