import { Box, Button, GridItem, Image, Img, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Product } from "../types";

interface Props {
  product: Product;
}
const CardProduct = ({ product }: Props) => {
  const { user } = useContext(UserContext);

  return (
    <GridItem className="grid-item" position="relative" margin="auto" p="1" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
      {user.points >= product.cost
        ? <Img position="absolute" top="3" right="3" src="./assets/buy-blue.svg"/>
        : <Text borderRadius={50} background="blackAlpha.600" display="flex" alignItems="center" padding={2} px="3" position="absolute" top="3" right="3" color="white">you need {product.cost} <Img src="./assets/coin.svg"/></Text> }
      <Box >
        <Box width="95%" margin="auto" borderBottom="1px" borderColor="gray.100" >
          <Image src={product.img.url} alt={product.name} />
        </Box>
        <Box p="6">
            <Text textAlign="left" color="black">{product.name}</Text>
            <Text textAlign="left" color="black">{product.category}</Text>
        </Box>
      </Box>
      <Box className="content">
        <Box width="90%" className="content-info">
          <Text display="flex" alignItems="center" padding={0} justifyContent="center" fontSize={35}>{product.cost} <Img src="./assets/coin.svg" paddingTop="5px" /></Text>
          <Button background="white" borderRadius={30} color="blackAlpha.700" width="95%">Redeem</Button>
        </Box>
      </Box>
    </GridItem>
  );
};

export default CardProduct;
