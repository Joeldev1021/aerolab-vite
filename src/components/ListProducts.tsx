/* eslint-disable no-unused-vars */
import {
  Container,
  Flex,
  Grid,
  Text,
  Button,
  Box
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
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

  const handleFilter = (n:FILTER) => {
    setFilter(n);
    handleFilterProducts(n.toLocaleUpperCase().split(" ").join("_"));
  };

  return (
    <div>
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        py="5"
        alignItems="center"
      >
        <Flex flexDirection="row" alignItems="center">
          <Box p={2} borderRight="2px" borderColor="gray.200">
            <Text>{nextPage === 0 ? "16" : "32"} of 32 products</Text>
          </Box>
          <Box p={2}>
            <Text>Short by : </Text>
          </Box>
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
          <Text>Filter by :</Text>
          <SelectCategory handleFilterByCategory={handleFilterByCategory} />
        </Flex>
       <ButtonGroupPage nextPage={nextPage} length={state.productsFilter.length} setNextPage={setNextPage} />
      </Flex>
      <Container maxW="1200px" color="white">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
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
