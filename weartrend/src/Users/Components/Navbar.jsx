import React, { useContext, useRef } from "react";
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
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import MegaMenu from "./MegaMenu";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import InputSearch from "./InputSearch";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { logoutUser, authUser } = useContext(AuthContext);
  const {
    state: { cart, isLoading },
    dispatch,
    removeCart,
  } = useContext(ProductContext);
  const setWidth = useRef(null);
  const [showR, setShoR] = useState(false);
  const handleShow = () => {
    setShoR(false);
  };
  const hideR = () => {
    setTimeout(() => {
      setShoR(true);
    }, 100);
  };
  return (
    <Box
      borderBottomWidth={"1px"}
      className="strict"
      maxWidth={"100vw"}
      m="auto"
      bg={"white"}
      pos="sticky"
      top="0"
      // overflow={"hidden"}
      zIndex={"1000"}
    >
      <Box width={"100%"} m="auto">
        <Hide below="md">
          <Box
            px="3rem"
            py="0.2rem"
            borderBottom={!showR ? "1px solid grey" : "none"}
            bg={"white"}
            position="relative"
            zIndex={10}
          >
            <Flex fontSize="1rem" color={"gray.600"}>
              <Spacer />
              <Box px="6px" borderRight="1px solid black">
                stores and events
              </Box>
              <Box px="6px" borderRight="1px solid black">
                shopping services
              </Box>
              <Box px="6px" textTransform={"uppercase"}>
                INR
              </Box>
            </Flex>
          </Box>
        </Hide>
        <Flex
          bg="white"
          justifyContent="space-between"
          px={"1rem"}
          // py="1rem"
          height={{ base: "3.4rem", md: "4.5rem" }}
          pos="relative"
        >
          <Flex
            w={{ base: "15rem", md: "15rem" }}
            h={"100%"}
            alignItems="center"
          >
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
            zIndex="10"
            // border={"2px solid teal"}
            width={{ base: "14rem", md: "29rem" }}
            justifyContent={"flex-end"}
          >
            <Hide below="md">
              <Flex
                // border={"2px solid red"}
                pos="relative"
                zIndex="4443"
                right="0"
                align="center"
                width={showR ? "29rem" : "18rem"}
                height={"100%"}
                // _hover={{ width: "29rem" }}
                bg={"white"}
                transition="all 0.5s"
                borderBottomRadius={"1rem"}
                justifyContent={"flex-end"}
              >
                <InputSearch
                  stateShow={showR}
                  hideR={hideR}
                  showR={handleShow}
                />
              </Flex>
            </Hide>
            <Hide below="md">
              <Flex
                // border={"1px solid black"}
                padding="0.3rem"
                pos={"absolute"}
                right="-5rem"
                top="0.7rem"
                paddingRight="0.7rem"
                // zIndex={33}
                // below="md"
              >
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button>
                      <FaShoppingCart fontSize={"1.6rem"} />
                      <Text pos="absolute" top="0.3rem" right="0.3rem">
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
                                  removeCart(item);
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
            <Show below="md">
              <Sidebar />
            </Show>
          </Flex>
          <Flex alignItems={"center"}>
            <Hide below="md">
              <Flex gap={3} marginRight="4rem">
                {!authUser && (
                  <Flex gap={2}>
                    <Link to={"/login"}>
                      <Button>Sign In</Button>
                    </Link>
                    <Link to={"/register"}>
                      <Button colorScheme={"twitter"}>Sign Up</Button>
                    </Link>
                    <Link to="/admin/dashboard">
                      <Button>Admin Panel</Button>
                    </Link>
                  </Flex>
                )}
              </Flex>
            </Hide>
          </Flex>

          {/* starts herar */}
          {authUser && (
            <Hide below="md">
              <Flex marginRight="4rem" marginTop={"1rem"}>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Profile
                  </MenuButton>
                  <MenuList>
                    <Link to={"/profile"}>
                      <MenuItem>My Account</MenuItem>
                    </Link>
                    <Link to={"/cart"}>
                      <MenuItem>Cart</MenuItem>
                    </Link>
                    <Link to="/payment">
                      <MenuItem>Payment</MenuItem>
                    </Link>

                    <Button
                      width="10.9rem"
                      mx={4}
                      mt="4"
                      colorScheme="blue"
                      onClick={() => {
                        dispatch({ type: "CLEAR_CART" });
                        logoutUser();
                      }}
                    >
                      Log Out
                    </Button>
                  </MenuList>
                </Menu>
              </Flex>
              {/* ends here */}
            </Hide>
          )}
        </Flex>

        <Hide below="lg">
          <MegaMenu />
        </Hide>
        <Hide below="md">
          {showR && (
            <Box
              pos={"fixed"}
              top="0"
              left={"0"}
              width="100vw"
              height={"100vh"}
              zIndex={9}
              backgroundColor={"black"}
              opacity="0.5"
            ></Box>
          )}
        </Hide>
      </Box>
      <Hide above="md">
        <Box paddingBottom={"1"}>
          <InputSearch stateShow={showR} hideR={hideR} showR={handleShow} />
        </Box>
      </Hide>
    </Box>
  );
};

export default Navbar;
