import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
  colors: {
    primary: "#0D121D",
    secondary: "#121A29",
  },
});

export default theme;
