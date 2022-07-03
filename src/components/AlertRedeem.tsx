import { Box, Image, Text } from "@chakra-ui/react";
import { Product } from "../types";
import React from "react";

interface Props {
    product : Product
}

export const AlertRedeem = ({ product }:Props) => {
  return (
    <Box boxShadow='lg' border="2px" borderColor='secondary' p='6' rounded='md' bg='white' display="flex" justifyContent="space-around" alignItems="center">
        <Box >
          <Text fontWeight="bold">¡Congrulations!</Text>
          <Text >You reedemed a {product.name}</Text>
        </Box>
          <Image width="100px"src={product.img.hdUrl}/>
    </Box>
  );
};
