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
import { UserContext } from "../context/UserContext";
import Banner from "./Banner";

const valueCoints = 100;

const Header = () => {
  const { user, addCoint } = useContext(UserContext);

  const handleClick = () => {
    addCoint(valueCoints);
  };

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" padding={2} px={4} gap="2">
        <Box p="2">
          <Heading size="md"><Img src="./assets/logo.svg" alt="" /></Heading>
        </Box>
        <Spacer />
        <Box gap="2" display="flex" alignItems="center" >
          <Text>{user.name}</Text>
          <Button onClick={() => handleClick()} >{user.points}<img src="./assets/coin.svg" alt="coin" /></Button>
        </Box>
      </Flex>
      <Banner />
    </>
  );
};

export default Header;
