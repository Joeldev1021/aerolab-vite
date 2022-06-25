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
import React, { useState } from "react";

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
  const [showSelect, setShowSelect] = useState<boolean>(false);

  return (
    <Accordion width={"150px"} position="relative" allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton
           onClick={() => setShowSelect(!showSelect)}
          >
            <Box flex="1" textAlign="left">
              Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        {/* <Box
          position="absolute"
          zIndex="200"
          background="white"
          height="250px"
            > */}
        <div className={showSelect ? "select-group show" : "select-group" }>
          {categorys.map((c) => (
            <AccordionPanel key={c}>{c}</AccordionPanel>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default SelectCategory;
