import React from "react";
import { Box, Flex, Spacer, Input, Image, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import Home from "../Pages/Home";
import MegaMenu from "./MegaMenu";
import { FaShoppingCart } from "react-icons/fa";
import InputSearch from "./InputSearch";
const Navbar = () => {
  return (
    <Box maxWidth={"100%"} m="auto" bg={"white"}>
      <Box width={"100%"} m="auto">
        <Box
          px="3rem"
          py="0.2rem"
          borderBottom="1px solid grey"
          bg={"white"}
          position="relative"
          zIndex={0}
        >
          <Flex fontSize="1.1rem" mr="0.7rem">
            <Spacer />
            <Box px="6px" borderRight="1px solid black">
              stores and events
            </Box>
            <Box px="6px" borderRight="1px solid black">
              shopping services
            </Box>
            <Box px="6px">inr</Box>
          </Flex>
        </Box>
        <Flex
          bg="white"
          justifyContent="space-between"
          px={"4rem"}
          pos="relative"
        >
          <Box w="15rem">
            <Image
              src="https://i.ibb.co/ZV2bkcz/weartrend-removebg-preview.png"
              alg="logo"
              w="100%"
            />
          </Box>
          <Flex align={"center"} pos={"relative"}>
            <InputSearch />
            <FaShoppingCart fontSize={"1.6rem"} />
          </Flex>
        </Flex>
        <MegaMenu />
        <Box
          pos={"fixed"}
          top="0"
          left={"0"}
          width="100vw"
          height={"100vh"}
          zIndex={-1}
          // backgroundColor={"black"}
          opacity="0.5"
        ></Box>
      </Box>
    </Box>
  );
};

export default Navbar;
