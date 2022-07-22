import { Box, Image, Text } from "@chakra-ui/react";
import { Product } from "../types";

interface Props {
    product : Product
    result : any
}

export const AlertRedeem = ({ product, result }:Props) => {
  return (
    <Box boxShadow='lg' border="2px" borderColor='secondary' p='6' rounded='md' bg='white' display="flex" justifyContent="space-around" alignItems="center">
        <Box >
          <Text fontWeight="bold">¡Congrulations!</Text>
          <Text >{result?.message}</Text>
        </Box>
          <Image width="100px"src={product.img.hdUrl}/>
    </Box>
  );
};
