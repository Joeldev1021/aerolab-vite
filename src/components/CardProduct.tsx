import { Box, Button, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../types";

interface Props {
  product: Product;
}

const CardProduct = ({ product }: Props) => {
  return (
    <GridItem>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={product.img.url} alt={product.name} />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            <Text color="black">{product.name}</Text>
          </Box>
          <Text color="black">{product.cost}</Text>
          <Button colorScheme="teal" size="md">
            Button
          </Button>
        </Box>
      </Box>
    </GridItem>
  );
};

export default CardProduct;
