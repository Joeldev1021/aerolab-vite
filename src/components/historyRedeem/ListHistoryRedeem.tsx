/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Product } from "../../types";

const ListHistoryRedeem = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {

  }, []);

  return (
    <Box className="history-container" pt="70px">
      {user.redeemHistory.length > 0 &&
        user.redeemHistory.map((product: Product) => {
          return (
            <Flex width="90%" bg="white" m="auto" borderRadius="md" my="1" border="1px" borderColor="gray.200" flexDir="row" alignItems="center" justifyContent="space-around" key={product.productId} >
              <Image width="70px" src={product.img.hdUrl} />
              <Text>{product.name}</Text>
              <Text>{product.productId}</Text>{/* productId => response */}
              <Text>{product.cost}</Text>
            </Flex>
          );
        })}
    </Box>
  );
};

export default ListHistoryRedeem;
