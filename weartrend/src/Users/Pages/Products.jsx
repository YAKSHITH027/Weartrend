import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../Components/Filter";
import Loading from "../Components/Loading";
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
        `https://backend-3ayp.onrender.com/product?category=${category}`
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
  return (
    <Flex minHeight={"100vh"} justifyContent="space-around">
      <Flex w="20%">
        <Filter />
      </Flex>
      <Grid
        width={"75%"}
        height={"100%"}
        bg="darkcyan"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        padding="2"
      >
        {state.products?.map((item, index) => {
          return <SingleProd key={item.id} prodData={item} />;
        })}
      </Grid>
    </Flex>
  );
};

export default Products;
