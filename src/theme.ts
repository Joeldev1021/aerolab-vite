import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#0070f3",
  secondary: "#0DD4FA",
  tertiary: "#f50057",
  grayCustom: "#B8B8B8"
};

const fonts = {
  heading: "'Source Sans Pro', sans-serif",
  body: "'Source Sans Pro', sans-serif"
};

const theme = extendTheme({ colors, fonts });

export default theme;
