import { Box, Img, Stack, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Stack pt="15" pos="relative" overflow="hidden">
      <Img src="./assets/header.png" alt="header-img" />
      <Box pos="absolute" bottom="10" left="150">
        <Text fontWeight="bold" color="white" fontSize={50}>
          Electronic
        </Text>
      </Box>
    </Stack>
  );
};

export default Banner;
