import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../Users/Components/Loading";
import AddProductModal from "../Compornts/AddProductModal";
import EditProductModal from "../Compornts/EditProductModal";

const Dashboard = () => {
  const URL = process.env.REACT_APP_JSON_KEY;
  const [isLoading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(+searchParam.get("page") || 1);
  const getProducts = async () => {
    setLoading(true);
    try {
      let res = await fetch(`${URL}?_page=${page}&_limit=10`);
      let data = await res.json();
      setLoading(false);
      setTotalPage(res.headers.get("X-Total-Count"));
      setProducts(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //   delete product

  const deleteProduct = async (id) => {
    try {
      await fetch(`${URL}/${id}`, { method: "DELETE" });

      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSearchParam({ page });
  }, [page]);
  useEffect(() => {
    getProducts();
  }, [page]);

  if (isLoading) return <Loading />;
  return (
    <Box
      // border={"2px solid blue"}
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
        <Text fontSize={"2rem"} marginLeft={"19rem"}>
          All products
        </Text>
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
        <Text pos={"fixed"} top="5rem" right={"3rem"} colorScheme="green">
          <AddProductModal />
        </Text>

        <Flex flexDirection={"column"} width="full" paddingBottom={"3rem"}>
          {products?.map((item) => {
            return (
              <Flex
                height={"70px"}
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
                  <EditProductModal item={item} get={getProducts} />
                </Center>
                <Center>
                  <Button
                    colorScheme={"red"}
                    onClick={() => {
                      deleteProduct(item.id);
                    }}
                  >
                    Delete
                  </Button>
                </Center>
              </Flex>
            );
          })}
        </Flex>
      </Box>
      <Flex flexDir={"column"} pos="absolute" top={"8rem"} right="3rem">
        <Flex
          bg={"rgb(58, 74, 99)"}
          color="white"
          width={"10.5rem"}
          px="1rem"
          py="0.4rem"
          mb="1rem"
          borderRadius={"xl"}
          flexDir="column"
          align={"center"}
        >
          <Text>total Products</Text>
          <Text>{totalPage}</Text>
        </Flex>
      </Flex>
      <Flex pos="fixed" gap={"2"} bottom={"2rem"} right="3rem">
        <Button
          isDisabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </Button>
        <Button>{page}</Button>
        <Button
          isDisabled={page == Math.ceil(totalPage / 10)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </Button>
      </Flex>
    </Box>
  );
};

export default Dashboard;
