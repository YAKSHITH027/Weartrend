import { Badge, Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../Components/Filter";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import SingleProd from "../Components/SingleProd";
import { ProductContext } from "../Context/ProductContext/ProductContext";

const Products = () => {
  const [isLoading, setLoading] = useState(false);
  let param = useParams();
  const { state, dispatch } = useContext(ProductContext);
  let getProduct = async (category) => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://backend-3ayp.onrender.com/product?category=${category}&_limit=12&_page=1`
      );
      let data = await res.json();
      console.log("done");
      setLoading(false);
      dispatch({ type: "CATEGORY_ITEM", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);

  useEffect(() => {
    getProduct(param.category);
  }, [param.category]);
  if (isLoading) return <Loading />;
  if (state.products.length == 0) return "no match found";
  return (
    <Box>
      <Navbar />
      <Flex minH={"100vh"} justifyContent="space-around" marginTop={"1rem"}>
        <Flex
          width={"20%"}
          flexDirection={"column"}
          align="center"
          border={"2px solid red"}
          h="90vh"
        >
          <Badge
            variant={"outline"}
            fontSize={"1.7rem"}
            colorScheme={"green"}
            px="2rem"
          >
            filters
          </Badge>
          <Filter />
        </Flex>
        <Grid
          width={"70%"}
          height={"90vh"}
          border="2px solid green"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={2}
          overflowY="scroll"
          padding="2"
        >
          {state.products?.map((item, index) => {
            return <SingleProd key={item.id} prodData={item} />;
          })}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Products;
