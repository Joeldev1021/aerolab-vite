/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Select
} from "@chakra-ui/react";
import React from "react";

const categorys = [
  "Phones",
  "Gaming",
  "Laptops",
  "Cameras",
  "Audio",
  "Monitors & TV",
  "Drones",
  "Phone Accessories",
  "Smart Home"
];

const SelectCategory = () => {
  return (
    <Accordion
      width={"150px"}
      position="relative"
      defaultIndex={[0]}
      allowMultiple
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <Box
          position="absolute"
          zIndex="200"
          overflowY="hidden"
          height="300px"
          background="red"
        >
          {categorys.map((c) => (
            <AccordionPanel key={c}>{c}</AccordionPanel>
          ))}
        </Box>
      </AccordionItem>
    </Accordion>
  );
};

export default SelectCategory;
