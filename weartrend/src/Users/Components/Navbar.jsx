import React, { useContext } from "react";
import {
  Box,
  Flex,
  Spacer,
  Image,
  Hide,
  Text,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverArrow,
  PopoverContent,
  Button,
} from "@chakra-ui/react";

import MegaMenu from "./MegaMenu";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import InputSearch from "./InputSearch";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { AuthContext } from "../Context/AuthContext/AuthContext";
const Navbar = () => {
  const { logoutUser } = useContext(AuthContext);
  const {
    state: { cart, isLoading },
    dispatch,
  } = useContext(ProductContext);

  return (
    <Box
      className="strict"
      maxWidth={"100vw"}
      m="auto"
      bg={"white"}
      pos="sticky"
      top="0"
      zIndex={"1000"}
    >
      <Box width={"100%"} m="auto">
        <Box
          px="3rem"
          py="0.2rem"
          borderBottom="1px solid grey"
          bg={"white"}
          position="relative"
          zIndex={0}
        >
          <Flex fontSize="1rem" color={"gray.600"}>
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
          px={"1rem"}
          // py="1rem"
          height="5rem"
          pos="relative"
        >
          <Flex w="15rem" h={"100%"} alignItems="center">
            <Link to={"/"}>
              <Image
                src="https://i.ibb.co/Rgqq7D2/WEARTREND-1-removebg-preview.png"
                alg="logo"
                w="100%"
              />
            </Link>
          </Flex>

          <Flex
            align={"center"}
            pos={"relative"}
            zIndex="3443"
            // border={"2px solid red"}
          >
            <Hide below="md">
              <InputSearch />
            </Hide>
            <Hide below="md">
              <Flex
                // border={"1px solid black"}
                padding="0.3rem"
                pos={"absolute"}
                right="15rem"
                paddingRight="0.7rem"
                // zIndex={33}
                // below="md"
              >
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button>
                      <FaShoppingCart fontSize={"1.6rem"} />
                      <Text pos="absolute" top="1px" right="1px">
                        {cart.length == 0 ? null : cart.length}
                      </Text>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">Cart</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      {cart.length == 0 ? (
                        <Text p={5} color="darkgray">
                          cart is empty
                        </Text>
                      ) : (
                        cart.map((item) => {
                          return (
                            <Flex
                              justifyContent={"space-around"}
                              align="center"
                              borderBottom={"1px solid #CBD5E0"}
                              mb={"5px"}
                            >
                              <Box w={"40px"}>
                                <Image src={item.image} w="100%" />
                              </Box>
                              <Box width={"60%"}>
                                <Text>{item.brand}</Text>
                                <Text>{item.price}</Text>
                              </Box>
                              <Box
                                onClick={() => {
                                  dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item,
                                  });
                                }}
                              >
                                <AiFillDelete fontSize={"27px"} />
                              </Box>
                            </Flex>
                          );
                        })
                      )}
                      <Link to={"/cart"}>
                        <Button
                          colorScheme={"green"}
                          w="full"
                          textTransform={"capitalize"}
                        >
                          go to the cart
                        </Button>
                      </Link>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </Hide>
            <Flex gap={3}>
              <Link to={"/login"}>
                <Button>Sign In</Button>
              </Link>
              <Button>Sign Up</Button>
              <Button
                onClick={() => {
                  logoutUser();
                }}
              >
                Log Out
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Hide below="lg">
          <MegaMenu />
        </Hide>
        <Box
          pos={"fixed"}
          top="0"
          left={"0"}
          // width="100vw"
          // height={"100vh"}
          zIndex={-19}
          // backgroundColor={"black"}
          opacity="0.5"
        ></Box>
      </Box>
    </Box>
  );
};

export default Navbar;
