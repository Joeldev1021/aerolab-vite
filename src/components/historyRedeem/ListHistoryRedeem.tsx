/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Img,
  SlideFade,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { HistoryRedeemContext } from "../../context/HistoryRedeemContext";
import { Product } from "../../types";
import GridHistoryRedeem from "./GridHistoryRedeem";

const ListHistoryRedeem = () => {
  const { historyRedeems, loadHistory } = useContext(HistoryRedeemContext);
  const [isLargeThat900] = useMediaQuery("(min-width: 900px)");
  const [isLargeThat760] = useMediaQuery("(min-width: 760px)");
  const date = new Date();

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Box className="history-container" pt="100px">
      {historyRedeems.length > 0 &&
        historyRedeems.map((product: Product, index: number) => {
          return (
             <SlideFade in={true} key={index} offsetY={"-20px"}>
            <Flex
              flexDir="row"
              position="relative"
              justifyContent={isLargeThat760 ? "space-around" : "flex-start"}
              _hover={{ transition: "all .3s ease-in", boxShadow: "lg" }}
              borderRadius="md"
              border="1px"
              alignItems="center"
              borderColor="gray.200"
              width={isLargeThat900 ? "80%" : "90%"}
              m="auto"
              my="4"
              p="2"
            >
              <Img mb="4" width="80px" height="60px" src={product.img.hdUrl} />
              <GridHistoryRedeem product={product} />
             <Box className="box-coins" width="70px" display="flex" justifyContent="flex-end" flexDirection="row" alignItems="center" >
                <Text fontWeight="bold" >{product.cost}</Text>
                <Img src="./assets/coin.svg" />
              </Box>
            </Flex>
          </SlideFade>
          );
        })}
    </Box>
  );
};

export default ListHistoryRedeem;
