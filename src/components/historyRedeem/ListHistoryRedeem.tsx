/* eslint-disable no-unused-vars */
import {
  Box, Flex, Image, Text
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { HistoryRedeemContext } from "../../context/HistoryRedeemContext";
import { Product } from "../../types";

const ListHistoryRedeem = () => {
  const { historyRedeems, loadHistory } = useContext(HistoryRedeemContext);

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Box className="history-container" pt="70px">
     {historyRedeems.length > 0 &&
        historyRedeems.map((product: Product) => {
          return (
            <Flex width="90%" bg="white" m="auto" borderRadius="md" my="1" border="1px" borderColor="gray.200" flexDir="row" alignItems="center" justifyContent="space-around" key={product.productId} >
              <Image width="70px" src={product.img.hdUrl} />
              <Text>{product.name}</Text>
              <Text>{product.productId}</Text>
              <Text>{product.cost}</Text>
            </Flex>
          );
        })}
    </Box>
  );
};

export default ListHistoryRedeem;
