/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Heading,
  Img,
  Spacer,
  Text,
  useMediaQuery,
  useToast
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { AlertAddPoint } from "./AlertAddPoint";
import ModalPoints from "./ModaPoints/ModalPoints";

const Header = () => {
  const { user, addPoints, loading } = useContext(UserContext);
  const toast = useToast();

  const [isLargeThat500] = useMediaQuery("(min-width: 640px)");

  const handlePoints = async (points: number) => {
    const res = await addPoints(points);
    toast({
      duration: 2000,
      position: "bottom-left",
      render: () => (
        <AlertAddPoint message={res}/>
      )
    });
  };

  return (
      <Flex position="fixed" shadow="base" zIndex="100" width="100%" bg="white" alignItems="center" padding={2} px={ isLargeThat500 ? 10 : 1} gap="2">
        <Box p="2" >
          <Link to="/"><Heading size="md"><Img src="./assets/logo.svg" alt="" /></Heading></Link>
        </Box>
        <Spacer />
        <Box gap="5" display="flex" alignItems="center" >

       <Link to="/">
         <Text _hover={{ color: "secondary" }} display={isLargeThat500 ? "block" : "none"} fontSize={{ base: "18px", md: "20px" }}>{user?.name}</Text>
       </Link>
          <Link to="/historyRedeem"><Text fontSize={{ base: "18px", md: "20px" }} _hover={{ color: "secondary" }}>Redeem History</Text></Link>
           <ModalPoints loading={loading} points={user.points} handlePoints={handlePoints} />
        </Box>
      </Flex>
  );
};

export default Header;
