import { extendTheme } from "@chakra-ui/react";

// extending and overriding chakra internal theme
export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
});
