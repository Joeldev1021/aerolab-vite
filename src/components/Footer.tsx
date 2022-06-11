import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
      <footer >
         <Box padding={3}>
             <Text>Made with <span role="img" aria-label="heart">❤️</span> by <a href="">Joel-dev</a></Text>
         </Box>
      </footer>
  );
};

export default Footer;
