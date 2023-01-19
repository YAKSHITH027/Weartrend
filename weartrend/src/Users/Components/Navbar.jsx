import React, { useContext } from "react";
import { Box, Flex, Spacer, Image, Hide, Text } from "@chakra-ui/react";

import MegaMenu from "./MegaMenu";
import { FaShoppingCart } from "react-icons/fa";
import InputSearch from "./InputSearch";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext/ProductContext";
const Navbar = () => {
  const {
    state: { cart },
  } = useContext(ProductContext);

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
          <Flex fontSize="1rem" mr="0.7rem" color={"gray.600"}>
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
          // py="1rem"
          height="5rem"
          pos="relative"
        >
          <Box w="15rem">
            <Image
              src="https://i.ibb.co/Rgqq7D2/WEARTREND-1-removebg-preview.png"
              alg="logo"
              w="100%"
            />
          </Box>
          <Link to="/products/mens">mens</Link>
          {/* <NavLink to={"/register"}>register</NavLink> */}
          <Flex
            align={"center"}
            pos={"relative"}
            zIndex="3443"
            // border={"2px solid red"}
          >
            <Hide below="md">
              <InputSearch />
            </Hide>
            <Flex
              // border={"1px solid black"}
              padding="0.3rem"
              pos={"relative"}
              paddingRight="0.7rem"
            >
              <FaShoppingCart fontSize={"1.6rem"} />
              <Text pos="absolute" top="1px" right="1px">
                {cart.length == 0 ? null : cart.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <MegaMenu />
        <Box
          pos={"fixed"}
          top="0"
          left={"0"}
          width="100vw"
          height={"100vh"}
          zIndex={-19}
          // backgroundColor={"black"}
          opacity="0.5"
        ></Box>
      </Box>
    </Box>
  );
};

export default Navbar;
