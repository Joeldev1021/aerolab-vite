/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Spacer,
  Text,
  useToast
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { AlertAddPoint } from "./AlertAddPoint";
import Banner from "./Banner";

const valuePoints = 100;

const Header = () => {
  const { user, addPoints, loading } = useContext(UserContext);
  const toast = useToast();

  const handleClick = async () => {
    /*  addCoins(valueCoints) */;
    const res = await addPoints(valuePoints);
    toast({
      duration: 2000,
      position: "bottom-left",
      render: () => (
        <AlertAddPoint message={res}/>
      )
    });
  };

  return (
      <Flex position="fixed" shadow="base" zIndex="100" width="100%" bg="white" alignItems="center" padding={2} px={4} gap="2">
        <Box p="2" >
          <Link to="/"><Heading size="md"><Img src="./assets/logo.svg" alt="" /></Heading></Link>
        </Box>
        <Spacer />
        <Box gap="5" display="flex" alignItems="center" >
          <Text fontSize="20">{user?.name}</Text>
          <Link to="/historyRedeem"><Text fontSize="20" _hover={{ color: "secondary" }}>Redeem History</Text></Link>
          <Button
          width="35"
          isLoading={loading}
          loadingText='process'
          spinnerPlacement='end'
          onClick={() => handleClick()} >
            { user?.points }<img src="./assets/coin.svg" alt="coin" />
            </Button>
        </Box>
      </Flex>
  );
};

export default Header;
