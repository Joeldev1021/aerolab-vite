import { Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react";
import { Product } from "../../types";

const GridHistoryRedeem = ({ product }:{product: Product}) => {
  const [isLargeThat765] = useMediaQuery("(min-width: 765px)");
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  // templateColumns="repeat(3, 1fr)"
  return (
    <Grid pl={isLargeThat765 ? "0" : "10"} gap={isLargeThat765 ? "4" : "0"} templateColumns={isLargeThat765 ? "repeat(3, 1fr)" : "1fr" }>
      <GridItem w="100%" justifyContent="center" textAlign="left">
        <Text fontSize={isLargeThat765 ? "18" : "12"} color="grayCustom">
          {product.category}
        </Text>
        <Text fontSize={isLargeThat765 ? "18" : "16"} >{product.name}</Text>
      </GridItem>

      <GridItem w="100%" justifyContent="center" textAlign="left">
        <Text fontSize={isLargeThat765 ? "18" : "12"} color="grayCustom">
          Redeemed
        </Text>
        <Text fontSize={isLargeThat765 ? "18" : "16"}>
          {product.createDate &&
            new Date(product.createDate).toLocaleDateString("en-US", options)}
        </Text>
      </GridItem>
      <GridItem w="100%" justifyContent="center" textAlign="left">
        <Text fontSize={isLargeThat765 ? "18" : "12"} color="grayCustom">
          Transaction ID
        </Text>
        <Text fontSize={isLargeThat765 ? "18" : "16"}>{product.productId}</Text>
      </GridItem>
    </Grid>
  );
};

export default GridHistoryRedeem;
