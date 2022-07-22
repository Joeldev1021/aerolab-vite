import { Box, Button, GridItem, Image, Img, ScaleFade, Text, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Product } from "../types";
import { AlertRedeem } from "./AlertRedeem";

interface Props {
  product: Product;
}
const CardProduct = ({ product }: Props) => {
  const { user, addRedeemHistory, loading } = useContext(UserContext);
  const toast = useToast();

  console.log(loading);

  const handleClick = async (product:Product) => {
    const result = await addRedeemHistory(product);
    toast({
      duration: 2000,
      position: "bottom-left",
      render: () => (
        <AlertRedeem product={product} result={result}/>
      )
    });
  };

  return (
      <ScaleFade initialScale={1} in={true}>
    <GridItem className="grid-item" bg="white" position="relative" margin="auto" p="1" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
      {user.points >= product.cost
        ? <Img position="absolute" top="3" right="3" src="./assets/buy-blue.svg"/>
        : <Text borderRadius={50} background="blackAlpha.600" display="flex" alignItems="center" padding={2} px="3" position="absolute" top="3" right="3" color="white">you need {product.cost} <Img src="./assets/coin.svg"/></Text> }
      <Box >
        <Box width="95%" margin="auto" borderBottom="1px" borderColor="gray.100" >
          <Image src={product.img.url} alt={product.name} />
        </Box>
        <Box p="6">
            <Text textAlign="left" color="grayCustom">{product.category}</Text>
            <Text textAlign="left" color="black">{product.name}</Text>
        </Box>
      </Box>
      <Box className={user.points >= product.cost ? "content-hover" : "content-hover-none"}>
          <Img position="absolute" top="2.5" right="4" width="43px" src="../assets/buy-white.svg"/>
        <Box width="90%" className="content-info">
          <Text display="flex" alignItems="center" padding={0} justifyContent="center" fontSize={35}>{product.cost} <Img src="./assets/coin.svg" paddingTop="5px" /></Text>
          <Button background="white" borderRadius={30} isDisabled={loading} color="blackAlpha.700" width="95%" onClick={() => handleClick(product)}>
               {loading ? "Processing..." : "Redeem"}
          </Button>
        </Box>
      </Box>
    </GridItem></ScaleFade>
  );
};

export default CardProduct;
