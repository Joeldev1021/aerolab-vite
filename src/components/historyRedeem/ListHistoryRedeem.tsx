/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Img,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { HistoryRedeemContext } from "../../context/HistoryRedeemContext";
import { Product } from "../../types";
import GridHistoryRedeem from "./GridHistoryRedeem";

const ListHistoryRedeem = () => {
  const { historyRedeems, loadHistory } = useContext(HistoryRedeemContext);
  const date = new Date();

  const [isLargeThat640] = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Box className="history-container" pt="100px">
      {historyRedeems.length > 0 &&
        historyRedeems.map((product: Product, index: number) => {
          return (
            <Flex
              flexDir="row"
              justifyContent="space-around"
              _hover={{ transition: "all .3s ease-in", boxShadow: "lg" }}
              borderRadius="md"
              border="1px"
              borderColor="gray.200"
              width="80%"
              m="auto"
              my="4"
              p="2"
              px="20px"
              key={index}
            >
              <Img width="70px" src={product.img.hdUrl} />

              <GridHistoryRedeem product={product} />

             <Box width="30px" bg="red" display="flex" justifyContent="space-between" flexDirection="row-reverse" alignItems="center" >
                <Img src="./assets/coin.svg" />
                <Text >{product.cost}</Text>
              </Box>
            </Flex>
          );
        })}
    </Box>
  );
};

export default ListHistoryRedeem;
