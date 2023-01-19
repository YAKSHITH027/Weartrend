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
import Rating from "../Components/Rating";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = useContext(ProductContext);

  useEffect(() => {
    let t = cart.reduce((acc, curr) => {
      return acc + Number(curr.price);
    }, 0);
    console.log(t);
    setTotalAmount(t);
  }, [cart]);

  console.log(cart);
  return (
    <Box>
      <Navbar />
      <Flex
        mt={"6"}
        maxW="95vw"
        border={"2px solid red"}
        mx="auto"
        p={"4"}
        gap={3}
      >
        <Box width={"71%"}>
          {cart.length == 0 ? (
            <Center minH={"70vh"}> cart is impty </Center>
          ) : (
            cart.map((item) => {
              return (
                <Flex
                  key={item.id}
                  justifyContent="space-around"
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
                  <Text>{item.brand}</Text>
                  <Text>{item.price}</Text>
                  <Flex>
                    <Rating rating={item.ratings} />
                  </Flex>
                  <Flex align={"center"}>
                    <Button>+</Button>
                    <Center p={"4"}>{item.qty}</Center>
                    <Button>-</Button>
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
        <Box w="25%" paddingLeft={4}>
          <Heading>total items : {cart.length}</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
