import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Hide,
  Image,
  Show,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import SingleProd from "../Components/SingleProd";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import Footer from "../Components/Footer";
import FilterModal from "../Components/FilterModal";
import { AuthContext } from "../Context/AuthContext/AuthContext";
const Products = () => {
  const setParam = (page) => {
    if (page <= 0) {
      return 1;
    }
    return Number(page);
  };
  const [isLoading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const [sortTracker, setsortTracker] = useState(true);

  const [page, setPage] = useState(setParam(searchParam.get("page")) || 1);
  const [total, setTotal] = useState(null);
  let { category } = useParams();
  const {
    state,
    dispatch,
    filterData: { sort, rating, fastDelivery },
    filterDispatch,
  } = useContext(ProductContext);
  const { authUser } = useContext(AuthContext);
  const URL = process.env.REACT_APP_JSON_KEY;

  // filterDispatch({ type: sort, payload: searchParam.get("sort") || "" });
  // filterDispatch({ type: rating, payload: searchParam.get("rating") || "" });
  // filterDispatch({
  //   type: fastDelivery,
  //   payload: searchParam.get("fastDelivery") || false,
  // });
  const refresh = () => {
    setsortTracker(!sortTracker);
  };
  useEffect(() => {
    let updated;
    if (sort == "asc") {
      updated = state.products.sort((a, b) => {
        return a.offerPrice - b.offerPrice;
      });
    }
    if (sort == "desc") {
      updated = state.products.sort((a, b) => {
        return b.offerPrice - a.offerPrice;
      });
    }
    dispatch({ type: "CATEGORY_ITEM", payload: updated });
  }, [sort]);

  let getProduct = async (category, page, rating, fastDelivery) => {
    let query = "";

    if (rating) {
      query += `&ratings=${Number(rating) + 1}`;
    }
    if (fastDelivery) {
      query += `&fastDelivery=${fastDelivery}`;
    }

    setLoading(true);
    try {
      let res = await fetch(
        `https://backend-3ayp.onrender.com/product?category=${category}&_limit=12&_page=${page}${query}`
      );
      let data = await res.json();
      setTotal(res.headers.get("X-Total-Count"));
      setLoading(false);
      dispatch({ type: "CATEGORY_ITEM", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [category]);

  useEffect(() => {
    let obj = {};
    obj.page = page;
    obj.limit = 12;
    if (sort) {
      obj.sort = sort;
    }
    if (fastDelivery) {
      obj.fastDelivery = fastDelivery;
    }
    if (rating) {
      obj.rating = +rating + 1;
    }
    setSearchParam(obj);

    getProduct(category, page, rating, fastDelivery);
  }, [category, page, rating, fastDelivery, sortTracker]);
  console.log("state", state);
  // console.log("searchhh", searchParam.get("page"));
  // console.log(total, "total");
  // if (isLoading)
  //   return (
  //     <Stack>
  //       <Skeleton height="300px" width="180px" />
  //     </Stack>
  //   );
  // if (state.products.length == 0) return "no match found";
  return (
    <Box>
      <Navbar />
      <Show breakpoint="(max-width: 992px)">
        <FilterModal refresh={refresh} />
      </Show>
      <Flex
        minH={"95vh"}
        justifyContent="space-around"
        marginTop={"1rem"}
        mx="5px"
      >
        <Hide below="lg">
          <Flex
            width={"20%"}
            flexDirection={"column"}
            align="center"
            h="90vh"
            // border={"2px solid"}
          >
            <Badge
              variant={"outline"}
              fontSize={"1.7rem"}
              colorScheme={"green"}
              px="2rem"
            >
              filters
            </Badge>

            <Filter refresh={refresh} />
          </Flex>
        </Hide>
        {isLoading ? (
          <Grid
            width={{ base: "100%", lg: "70%" }}
            height={"90vh"}
            // border="2px solid green"
            borderRadius="2xl"
            borderWidth={"2px"}
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={2}
            overflowY="scroll"
            padding="5"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {[...Array(8).keys()].map((item, index) => {
              return (
                <Stack
                  borderWidth={"2px"}
                  borderRadius={"8px"}
                  padding="8px"
                  minH={{ base: "auto", md: "25rem" }}
                  key={index}
                >
                  <Skeleton
                    margin="auto"
                    width="100%"
                    height={{ base: "170", md: "270px" }}
                    borderRadius="lg"
                  />
                  <Skeleton height="20px" width="full" />
                  <Skeleton height="20px" width="full" />
                  <Skeleton height="20px" width="full" />
                </Stack>
              );
            })}
          </Grid>
        ) : state.products?.length == 0 ? (
          <Flex
            width={{ base: "100%", lg: "70%" }}
            height={"80vh"}
            flexDirection="column"
            paddingTop={"6"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Heading marginTop={6}>no match found</Heading>
            <Image
              height="80%"
              // border={"2px solid blue"}
              src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif"
            />
          </Flex>
        ) : (
          <Grid
            width={{ base: "100%", lg: "70%" }}
            height={"90vh"}
            // border="2px solid green"
            borderRadius="2xl"
            borderWidth={"2px"}
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={2}
            overflowY="scroll"
            padding="5"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {state.products?.map((item, index) => {
              return <SingleProd key={item.id} prodData={item} />;
            })}
          </Grid>
        )}
      </Flex>
      <Flex justifyContent={"flex-end"} marginRight="3rem">
        <Flex alignItems={"center"}>
          <Button
            isDisabled={page <= 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </Button>
          <Text padding={4}>{page}</Text>
          <Button
            isDisabled={
              Math.ceil(total / 12) == page || state.products?.length == 0
            }
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Products;
