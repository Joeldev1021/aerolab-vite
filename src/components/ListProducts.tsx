/* eslint-disable no-unused-vars */
import {
  Container,
  Flex,
  Grid,
  Text,
  Button,
  Box,
  ButtonGroup
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { Product } from "../types";
import Arrow from "./Arrow";
import CardProduct from "./CardProduct";

interface Props {
  products: Product[];
}
enum FILTER {
  mostRecent = "Most recent",
  highestPrice = "Highest price",
  lowestPrice = "Lowest price",
}

const FilterOptions: FILTER[] = [
  FILTER.mostRecent,
  FILTER.highestPrice,
  FILTER.lowestPrice
];

const ListProducts: React.FC<Props> = ({ products }) => {
  const [filter, setFilter] = useState<FILTER>(FILTER.mostRecent);
  const [nextPage, setNextPage] = useState(0);

  const handleNextProducts = (n: string) => {
    if (n === "<") {
      setNextPage(0);
    } else {
      setNextPage(1);
    }
  };

  /* A hook that is used to memoize the value of the function. */
  const filterProducts = useMemo(() => {
    switch (filter) {
      case FILTER.highestPrice:
        return [...products].sort((a, b) => b.cost - a.cost);

      case FILTER.lowestPrice:
        return [...products].sort((a, b) => a.cost - b.cost);

      case FILTER.mostRecent:
      default: {
        return products;
      }
    }
  }, [products, filter]);

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
            <Text>16 of 32 products</Text>
          </Box>
          <Box p={2}>
            <Text>Short by : </Text>
          </Box>
          {FilterOptions.map((filt: FILTER) => (
            <Button
              background={filt === filter ? "secondary" : ""}
              color={filt === filter ? "white" : "black"}
              borderRadius="50"
              marginLeft={5}
              key={filt}
              onClick={() => setFilter(filt)}
            >
              {filt}
            </Button>
          ))}
        </Flex>
        <ButtonGroup className="btn-group">
          <button
            onClick={() => handleNextProducts("<")}
          >
            <Arrow dir="left" />
          </button>
          <button
            onClick={() => handleNextProducts(">")}
          >
            <Arrow dir="right" />
          </button>
        </ButtonGroup>

      </Flex>
      <Container maxW="1200px" color="white">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {filterProducts.map((product: Product, index: number) => {
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
