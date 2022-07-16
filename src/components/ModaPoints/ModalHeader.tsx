import { PopoverHeader, Text } from "@chakra-ui/react";

const ModalHeader = () => {
  return (
    <PopoverHeader display="flex" alignItems="center">
      <img src="./assets/logo.svg" />
      <Text fontWeight="bold" fontSize="20px">
        Aerolab
      </Text>
    </PopoverHeader>
  );
};

export default ModalHeader;
