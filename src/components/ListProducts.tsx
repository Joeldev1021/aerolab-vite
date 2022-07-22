/* eslint-disable no-unused-vars */
import {
  Container,
  Flex,
  Grid,
  Text,
  Button,
  Box,
  useMediaQuery
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../types";
import ButtonGroupPage from "./ButtonGroup";
import CardProduct from "./CardProduct";
import SelectCategory from "./SelectCategory";

export enum FILTER {
  mostRecent = "Most recent",
  highestPrice = "Highest price",
  lowestPrice = "Lowest price",
}

const FilterOptions: FILTER[] = [
  FILTER.mostRecent,
  FILTER.highestPrice,
  FILTER.lowestPrice
];

const ListProducts: React.FC = () => {
  const [filter, setFilter] = useState<FILTER>(FILTER.mostRecent);
  const [nextPage, setNextPage] = useState(0);
  const { state, handleFilterProducts, handleFilterByCategory } = useContext(ProductContext);
  const [isLargeThat760] = useMediaQuery("(min-width: 930px)");
  const [isLargeThat500] = useMediaQuery("(min-width: 640px)");

  const handleFilter = (n:FILTER) => {
    setFilter(n);
    handleFilterProducts(n.toLocaleUpperCase().split(" ").join("_"));
  };

  return (
    <div>
      <Flex
        flexDirection={isLargeThat760 ? "row" : "column"}
        justifyContent="space-around"
        py={isLargeThat760 ? "5" : "0"}
        alignItems="center"
      >
        <Flex flexDirection={isLargeThat760 ? "row" : "column"} alignItems="center">
          <Box p={2} borderRight="2px" borderColor="gray.200">
            <Text>{nextPage === 0 ? "16" : "17"} of 32 products</Text>
          </Box>
          <Box display={isLargeThat500 ? "block" : "none"} p={2}>
            <Text>Short by : </Text>
          </Box>
          <Box>
          {FilterOptions.map((filt: FILTER) => (
            <Button
              background={filt === filter ? "secondary" : ""}
              color={filt === filter ? "white" : "black"}
              borderRadius="50"
              marginX={2}
              key={filt}
              onClick={() => handleFilter(filt)}
            >
              {filt}
            </Button>
          ))}
          </Box>
         <Text display={isLargeThat500 ? "block" : "none"}>Filter by :</Text>
          <SelectCategory handleFilterByCategory={handleFilterByCategory} />
        </Flex>
       <ButtonGroupPage nextPage={nextPage} length={state.productsFilter.length} setNextPage={setNextPage} />
      </Flex>
      <Container maxW="1200px" color="white">
        <Grid m="auto" templateColumns="repeat(auto-fill, minmax(220px, 1fr))" gap={6}>
          {state.productsFilter.map((product: Product, index: number) => {
            if (nextPage === 0) {
              return (
                index < 16 && (
                  <CardProduct key={product._id} product={product} />
                )
              );
            } else {
              return (
                index > 15 && (
                  <CardProduct key={product._id} product={product} />
                )
              );
            }
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ListProducts;
