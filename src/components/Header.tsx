/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Spacer,
  Text
} from "@chakra-ui/react";
import React, { useContext } from "react";
import api from "../api";
import { postPoints } from "../api/hello";
import { UserContext } from "../context/UserContext";
import Banner from "./Banner";

const valueCoints = 100;

const Header = () => {
  const { user, addPoints, loading } = useContext(UserContext);

  const handleClick = async () => {
    /*  addCoins(valueCoints) */;
    addPoints(100);
  };

  return (
    <>
      <Flex position="fixed" shadow="base" zIndex="100" width="100%" bg="white" alignItems="center" padding={2} px={4} gap="2">
        <Box p="2" >
          <Heading size="md"><Img src="./assets/logo.svg" alt="" /></Heading>
        </Box>
        <Spacer />
        <Box gap="5" display="flex" alignItems="center" >
          <Text fontSize="20">{user?.name}</Text>
          <Text fontSize="20" _hover={{ color: "secondary" }}>Redeem History</Text>
          <Button onClick={() => handleClick()} >{user?.points}<img src="./assets/coin.svg" alt="coin" /></Button>
        </Box>
      </Flex>
      <Banner />
    </>
  );
};

export default Header;
