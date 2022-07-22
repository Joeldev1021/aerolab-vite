import { Box, Img, SlideFade, Stack, Text } from "@chakra-ui/react";

// 10 - 150
const Banner = () => {
  return (
    <Stack pt={{ base: 30, md: 15 }} pos="relative" overflow="hidden">
      <Img src="./assets/header.png" alt="header-img" />
      <Box pos="absolute" bottom={{ base: 2, md: 10 }} left={{ base: "50", md: "150" }} >
        <SlideFade in={true} offsetY='-20px'>
        <Text fontWeight="bold" color="white" fontSize={{ base: 30, md: 50 }} >
          Electronic
        </Text></SlideFade>
      </Box>
    </Stack>
  );
};

export default Banner;
