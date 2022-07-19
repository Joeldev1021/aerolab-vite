import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";

const GridHistoryRedeem = ({ product }:{product: Product}) => {
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  return (
    <Grid gap="4" templateColumns="repeat(3, 1fr)">
      <GridItem w="100%" justifyContent="center" textAlign="left">
        <Text fontSize="18" color="gray.400">
          {product.category}
        </Text>
        <Text fontSize="18">{product.name}</Text>
      </GridItem>

      <GridItem w="100%" justifyContent="center" textAlign="left">
        <Text fontSize="18" color="gray.400">
          Redeemed
        </Text>
        <Text fontSize="18">
          {product.createDate &&
            new Date(product.createDate).toLocaleDateString("en-US", options)}
        </Text>
      </GridItem>
      <GridItem w="100%" justifyContent="center" textAlign="left">
        <Text fontSize="18" color="gray.400">
          Transaction ID
        </Text>
        <Text fontSize="18">{product.productId}</Text>
      </GridItem>
    </Grid>
  );
};

export default GridHistoryRedeem;
