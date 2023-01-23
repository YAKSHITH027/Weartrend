import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  Checkbox,
  Button,
  Flex,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import Rating from "./Rating";
const Filter = () => {
  const { filterData, filterDispatch } = useContext(ProductContext);
  console.log({ filterData });

  return (
    <Flex
      py={5}
      width="full"
      flexDirection={"column"}
      px={{ base: "0.4rem", lg: "2rem" }}
      gap={6}
      // borderWidth="2px"
    >
      <RadioGroup
        onChange={(e) => {
          console.log("sort checking", e);
          filterDispatch({ type: "SORT", payload: e });
        }}
        value={filterData.sort}
      >
        <Stack direction="column">
          <Radio value="asc">low-to-high</Radio>
          <Radio value="desc">high-to-low</Radio>
        </Stack>
      </RadioGroup>
      <Box>
        <input
          type="checkbox"
          checked={filterData.fastDelivery}
          onChange={(e) => {
            filterDispatch({ type: "FASTDELIVERY", payload: e.target.checked });
          }}
        />
        <span> show fast fastDelivery</span>
      </Box>
      <Box>
        <label>rating :</label>
        <RadioGroup
          onChange={(e) => {
            filterDispatch({ type: "RATING", payload: e });
          }}
          value={filterData.rating}
        >
          <Stack direction="column">
            <Radio value="1">only 2</Radio>
            <Radio value="2">only 3</Radio>
            <Radio value="3">only 4</Radio>
            <Radio value="4">only 5</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Button
        display={"block"}
        width="full"
        colorScheme={"blue"}
        onClick={() => {
          filterDispatch({ type: "RESET" });
        }}
      >
        clear filter
      </Button>
    </Flex>
  );
};

export default Filter;
