import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      color: "whiteAlpha.900",
      bg: "gray.50",
      _dark: {
        color: "whiteAlpha.900",
        bg: "blackAlpha.400",
      },
    },
  },
};

const theme = extendTheme({
  styles,
  config,
  colors: {
    blue_custom: {
      500: "#1161cb",
    },
  },
});
export default theme;
