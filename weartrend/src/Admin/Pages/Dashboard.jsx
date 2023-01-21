import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loading from "../../Users/Components/Loading";
import AddProductModal from "../Compornts/AddProductModal";

const Dashboard = () => {
  const URL = process.env.REACT_APP_JSON_KEY;
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      let res = await fetch(`${URL}?_page=1&_limit=10`);
      let data = await res.json();
      setLoading(false);
      setProducts(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <Box
      //   border={"2px solid blue"}
      height="100%"
      overflowY={"scroll"}
      paddingRight="9rem"
      borderWidth={"1px"}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
      //   paddingBottom="2rem"
    >
      <Flex alignItems={"center"} marginBottom="1rem">
        <Box height={"3.4rem"}>
          <Image
            src="https://i.ibb.co/Rgqq7D2/WEARTREND-1-removebg-preview.png"
            height={"100%"}
          />
        </Box>
        <Text marginLeft={"19rem"}>All products</Text>
      </Flex>
      <Flex
        justifyContent={"space-around"}
        paddingLeft="1rem"
        width={"87%"}
        margin="auto"
        marginBottom={"2"}
      >
        <Center
          fontSize={"1.2rem"}
          fontWeight="bold"
          outline={"2px solid"}
          px="9px"
          borderRadius={"md"}
        >
          Image
        </Center>
        <Center
          fontSize={"1.2rem"}
          fontWeight="bold"
          outline={"2px solid"}
          px="9px"
          borderRadius={"md"}
        >
          Brand
        </Center>
        <Center
          fontSize={"1.2rem"}
          fontWeight="bold"
          outline={"2px solid"}
          px="9px"
          borderRadius={"md"}
        >
          Price
        </Center>
        <Center
          fontSize={"1.2rem"}
          fontWeight="bold"
          outline={"2px solid"}
          px="9px"
          borderRadius={"md"}
        >
          Quantity
        </Center>
        <Center
          fontSize={"1.2rem"}
          fontWeight="bold"
          outline={"2px solid"}
          px="9px"
          borderRadius={"md"}
        >
          Edit
        </Center>
        <Center
          fontSize={"1.2rem"}
          fontWeight="bold"
          outline={"2px solid"}
          px="9px"
          borderRadius={"md"}
        >
          Delete
        </Center>
      </Flex>
      <Box
        // border={"2px solid red"}
        borderWidth={"1px"}
        padding="3"
        borderRadius={"2xl"}
        width="87%"
        margin={"auto"}
        marginTop="0.2rem"
        height="85%"
        overflowY={"scroll"}
        paddingBottom="2rem"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        // marginRight={"8rem"}
        pos={"relative"}
      >
        <Text pos={"fixed"} top="3rem" right={"3rem"} colorScheme="green">
          <AddProductModal />
        </Text>

        <Flex flexDirection={"column"} width="full" paddingBottom={"3rem"}>
          {products?.map((item) => {
            return (
              <Flex
                height={"100px"}
                justifyContent="space-around"
                // alignItems={"center"}
                //   border={"2px solid blue"}
                margin="2"
                textAlign={"center"}
                borderWidth="1px"
                borderRadius={"md"}
              >
                <Box>
                  <Image src={item.image} height="100%" />
                </Box>
                <Center width={"8rem"}>{item.brand}</Center>
                <Center width={"4rem"}>{item.price}</Center>
                <Center>{item.quntity}</Center>
                <Center>
                  <Button colorScheme={"orange"}>Edit</Button>
                </Center>
                <Center>
                  <Button colorScheme={"red"}>Delete</Button>
                </Center>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;
