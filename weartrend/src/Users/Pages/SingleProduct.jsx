import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import Rating from "../Components/Rating";

import { ProductContext } from "../Context/ProductContext/ProductContext";

const SingleProduct = () => {
  const [singleData, setSingleData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const { state, dispatch, addCart } = useContext(ProductContext);

  let getProduct = async (id) => {
    setLoading(true);
    try {
      let res = await fetch(`https://backend-3ayp.onrender.com/product/${id}`);
      let data = await res.json();
      console.log("done single", data);
      setSingleData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const { id } = useParams();
  useEffect(() => {
    getProduct(id);
  }, [id]);
  console.log("statess", state);
  console.log(id);
  if (isLoading) return <Loading />;
  return (
    <Box maxW={"100vw"}>
      <Navbar />
      <Flex
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        mt={{ md: "2rem" }}
      >
        <Flex
          padding={"1rem"}
          justifyContent="center"
          mx="2rem"
          marginTop={"9px"}
          height={{ base: "50vh", md: "100vh" }}
          borderWidth={"2px"}
        >
          <Image src={singleData.image} height={"90%"} borderWidth="3px" />
        </Flex>
        <Box
          height={{ sm: "auto", md: "100vh" }}
          overflowY="scroll"
          width={{ base: "full", md: "50%" }}
          padding={"2rem"}
          borderWidth="1px"
          paddingBottom={"8rem"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Heading py={"1rem"}>{singleData.brand}</Heading>
          <Text paddingBottom={"0.54rem"}>{singleData.title}</Text>
          <Flex align={"center"}>
            <Rating rating={singleData.ratings} />{" "}
            <span> {singleData.totalRatings}</span>
          </Flex>
          <Stack direction="row" py={"1rem"}>
            <Badge colorScheme="green" fontSize="1.3rem">
              INR {singleData.offerPrice}
            </Badge>
            <Badge
              colorScheme="red"
              fontSize="1.3rem"
              textDecoration={"line-through"}
            >
              INR {singleData.price}
            </Badge>
            <Badge colorScheme="purple" fontSize="1.3rem">
              Details
            </Badge>
          </Stack>
          <Box py={1}>
            <Heading fontSize={"1.1rem"} display={"inline"}>
              color
            </Heading>
            : bone 15
          </Box>
          <Box py={2}>
            <Heading fontSize={"1.1rem"} display={"inline"}>
              size
            </Heading>
            :please select
          </Box>
          <Flex
            justifyContent={"flex-start"}
            columnGap="1rem"
            p={2}
            paddingLeft={{ md: "2rem" }}
            // borderWidth="1px"
            textTransform={"uppercase"}
          >
            <Center p={2} px="3" borderWidth="1px">
              s
            </Center>
            <Center p={2} px="3" borderWidth="1px">
              m
            </Center>
            <Center p={2} px="3" borderWidth="1px">
              l
            </Center>
            <Center p={2} px="3" borderWidth="1px">
              xl
            </Center>
            <Center p={2} px="3" borderWidth="1px">
              xll
            </Center>
          </Flex>
          <Button
            mt={"1rem"}
            width={"50%"}
            isDisabled={state.cart.some((item) => item.id == singleData.id)}
            display={"flex"}
            justifyContent="center"
            colorScheme="orange"
            isLoading={state.isLoading}
            loadingText="Adding To The Cart"
            onClick={() => {
              addCart(singleData);
              dispatch({ type: "ADD_TO_CART", payload: singleData });
            }}
          >
            Add To Cart
          </Button>
          <Box borderBottom={"1px solid grey"} py="1rem" mt={"1rem"}>
            <Heading fontSize={"1.1rem"}>size and fit</Heading>
            <UnorderedList>
              <ListItem>Fits true to size, order your normal size</ListItem>
              <ListItem>Designed for a regular fit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>
                Model measurements: 6'2" height, 38" chest, 30" waist, 34"
                inseam, wearing a size medium
              </ListItem>
            </UnorderedList>
          </Box>

          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Product details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Fits true to size, order your normal size</ListItem>
                  <ListItem>Designed for a regular fit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>
                    Model measurements: 6'2" height, 38" chest, 30" waist, 34"
                    inseam, wearing a size medium
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Box py="1rem" mt={"2rem"}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      MATERIAL & CARE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>
                      Material 1: 95% organic cotton, 5% nylon Material 2: 100%
                      organic cotton Rib: 92% organic cotton, 8% elastane
                    </ListItem>
                    <ListItem>Machine wash inside out</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
};

export default SingleProduct;
