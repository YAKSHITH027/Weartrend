import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Rating from "../Components/Rating";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = useContext(ProductContext);

  useEffect(() => {
    let t = cart.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.qty;
    }, 0);
    dispatch({ type: "UPDATE_TOTAL", payload: t });
    setTotalAmount(t);
  }, [cart]);

  return (
    <Box>
      <Navbar />
      <Flex
        mt={"6"}
        maxW="95vw"
        // border={"2px solid red"}
        flexDirection={{ base: "column-reverse", lg: "row" }}
        mx="auto"
        alignItems={{ base: "center", lg: "start" }}
        justifyContent={{ lg: "space-around" }}
        p={"4"}
        gap={3}
      >
        <Box width={{ base: "90%", lg: "71%" }}>
          {cart.length == 0 ? (
            <Center minH={{ lg: "70vh" }}>
              <Image src="https://bakestudio.in/assets/images/cart/empty-cart.gif" />
            </Center>
          ) : (
            cart.map((item) => {
              return (
                <Flex
                  key={item.id}
                  justifyContent="space-around"
                  flexDirection={{ base: "column", md: "row" }}
                  padding={"2"}
                  alignItems="center"
                  borderWidth={"1px"}
                  borderRadius="md"
                  m={"2"}
                >
                  <Box h={"7rem"}>
                    <Image
                      src={item.image}
                      alt={item.brand}
                      w="100%"
                      h="100%"
                      borderRadius={"md"}
                    />
                  </Box>
                  <Box width={"9rem"}>
                    <Text fontSize={"1.18rem"}>{item.brand}</Text>
                    <Text color={"gray.700"}>{item.title}</Text>
                  </Box>
                  <Text my="7px">Price : ₹ {item.price}</Text>
                  <Flex align={"center"}>
                    <Rating rating={item.ratings} />
                    <span>({item.totalRatings})</span>
                  </Flex>
                  <Flex align={"center"}>
                    <Button
                      onClick={() => {
                        dispatch({ type: "INCREASE", payload: item });
                      }}
                    >
                      +
                    </Button>
                    <Center p={"4"}>{item.qty}</Center>
                    <Button
                      isDisabled={item.qty == 1}
                      onClick={() => {
                        dispatch({ type: "DECREASE", payload: item });
                      }}
                    >
                      -
                    </Button>
                  </Flex>
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
        </Box>
        <Flex
          w={{ base: "90%", lg: "24%" }}
          // paddingLeft={4}
          p={6}
          margin="auto"
          paddingTop="1.5rem"
          flexDirection="column"
          gap="7"
          // border={"2px solid red"}
          bg="gray.50"
          borderRadius={"2xl"}
          height={{ lg: "70vh" }}
        >
          <Heading fontSize={"1.7rem"}>subtotal({cart.length}) items</Heading>
          <Text fontSize={"1.4rem"}>total: ₹ {totalAmount}</Text>

          <Link to={"/payment"}>
            <Button
              type="button"
              isDisabled={cart.length == 0}
              colorScheme="green"
              width={"full"}
            >
              Proceed to Checkout
            </Button>
          </Link>
          <Text my={1} textAlign="center">
            or
          </Text>
          <Link to={"/"}>
            <Button variant={"outline"} width="full" colorScheme={"facebook"}>
              Continue shopping
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Cart;
