import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  components: {
    Button: {
      variants: {
        dank: {
          bg: "red.400",
          color: "white",
          boxShadow: "0 0 5px rgba(240,75,75,.8)",
        },
        // override existing variants
        // solid: (props) => ({
        //   boxShadow: "0 0 5px #65E495",
        // }),
      },
    },
  },
});
