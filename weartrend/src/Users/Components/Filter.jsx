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
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "./Rating";
const Filter = () => {
  const [value, setValue] = useState("");
  const [rate, setRate] = useState(3);
  const handleChange = (e) => {
    console.log(e);
    setValue(e);
  };
  const handleFilter = () => {
    setValue("");
  };
  console.log("value", value);
  return (
    <Flex
      border={"2px solid blue"}
      width="full"
      flexDirection={"column"}
      px="2rem"
      gap={4}
    >
      <RadioGroup onChange={handleChange} value={value}>
        <Stack direction="column">
          <Radio value="asc">low-to-high</Radio>
          <Radio value="2">high-to-low</Radio>
        </Stack>
      </RadioGroup>
      <Box>
        <Checkbox>Include fast delivery</Checkbox>
      </Box>
      <Box>
        <label>rating :</label>
        <RadioGroup
          onChange={(e) => {
            console.log(e);
          }}
          value={rate}
        >
          <Stack direction="column">
            <Radio value="1">low-to-high</Radio>
            <Radio value="2">highlow-to-</Radio>
            <Radio value="3">highlow-to-</Radio>
            <Radio value="4">highlow-to-</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Button
        display={"block"}
        width="full"
        colorScheme={"blue"}
        onClick={handleFilter}
      >
        clear filter
      </Button>
    </Flex>
  );
};

export default Filter;
