/* eslint-disable no-unused-vars */
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { HistoryRedeemContext } from "../../context/HistoryRedeemContext";
import { optionDate, Product } from "../../types";

const ListHistoryRedeem = () => {
  const { historyRedeems, loadHistory } = useContext(HistoryRedeemContext);
  const date = new Date();
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Box className="history-container" pt="100px">
      {historyRedeems.length > 0 &&
        historyRedeems.map((product: Product, index: number) => {
          return (
            <Grid
              _hover={{ transition: "all .3s ease-in", boxShadow: "lg" }}
              borderRadius="md"
              border="1px"
              borderColor="gray.200"
              key="index"
              width="80%"
              m="auto"
              my="4"
              p="2"
              templateColumns="repeat(5, 1fr)"
            >
              <GridItem w="100%" justifyContent="center">
                <Image m="auto" width="70px" src={product.img.hdUrl} />
              </GridItem>
              <GridItem w="100%" textAlign="left">
                <Text fontSize="18" color="gray.400">
                  {product.category}
                </Text>
                <Text fontSize="18">{product.name}</Text>
              </GridItem>
              <GridItem w="100%" textAlign="left">
                <Text fontSize="18" color="gray.400">
                  Redeemed on
                </Text>
                <Text fontSize="18">
                  {" "}
                  {product.createDate &&
                    new Date(product.createDate).toLocaleDateString(
                      "en-US",
                      options
                    )}
                </Text>
              </GridItem>
              <GridItem w="100%" textAlign="left">
                <Text fontSize="18" color="gray.400">ID Transaction</Text>
                <Text fontSize="18">{product.productId}</Text>
              </GridItem>
              <GridItem
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="end"
                pr="10"
              >
                <Text fontSize="18" fontWeight="bold">{product.cost}</Text>
                <Image src="./assets/coin.svg" />
              </GridItem>
            </Grid>
          );
        })}
    </Box>
  );
};

export default ListHistoryRedeem;
/*   <Flex
              key={index}
              width="80%"
              bg="white"
              m="auto"

              flexDir="row"
              alignItems="center"
              justifyContent="space-around"
            >
              <Box bg="red" textAlign="left">
                <Text color="gray.400">{product.category}</Text>
                <Text>{product.name}</Text>
              </Box>
              <Box textAlign="left">
                <Text color="gray.400">Redeemed on</Text>
                <Text> {product.createDate && new Date(product.createDate).toLocaleDateString("en-US", options)}</Text>
              </Box>
              <Box textAlign="left">
                <Text color="gray.400">Transaction ID</Text>
                <Text>{product.productId}</Text>
              </Box>
              <Box
                textAlign="left"
                bg="red"
                display="flex"
                alignItems="center"
              >
                <Text>{product.cost}</Text>
                <Image src="./assets/coin.svg" />
              </Box>
            </Flex>
*/
