import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#0070f3",
  secondary: "#ff4081",
  tertiary: "#f50057"
};

const fonts = {
  heading: "'Source Sans Pro', sans-serif",
  body: "'Source Sans Pro', sans-serif"
};

const theme = extendTheme({ colors, fonts });

export default theme;
