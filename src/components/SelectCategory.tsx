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
  "All Products",
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

interface Props {
  handleFilterByCategory: (category: string) =>void
}

const SelectCategory = ({ handleFilterByCategory }:Props) => {
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<string>("All Products");

  const handleClick = (category: string) => {
    setSelectCategory(category);
    handleFilterByCategory(category);
  };

  return (
    <Accordion marginLeft="2" width={"150px"} position="relative" allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton
           onClick={() => setShowSelect(!showSelect)}
          >
            <Box flex="1" textAlign="left">
              {selectCategory}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <div className={showSelect ? "select-group show" : "select-group" }>
          {categorys.map((c) => (
            <AccordionPanel _hover={{ background: "gray.100", cursor: "pointer" }} key={c} onClick={() => handleClick(c)}>{c}</AccordionPanel>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default SelectCategory;
