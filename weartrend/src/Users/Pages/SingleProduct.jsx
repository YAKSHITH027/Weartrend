import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
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
import Loading from "../Components/Loading";

const SingleProduct = () => {
  const [singleData, setSingleData] = useState({});
  const [isLoading, setLoading] = useState(false);
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

  console.log(id);
  if (isLoading) return <Loading />;
  return (
    <Box>
      <Flex
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        mt={{ md: "2rem" }}
      >
        <Flex
          padding={"1rem"}
          justifyContent="center"
          mx="2rem"
          height={"100vh"}
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
          <Box borderBottom={"1px solid grey"} py="1rem" mt={"2rem"}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, nulla? Perferendis, laborum.sdfljf dsdfs
                {/* <UnorderedList>
                  <ListItem>Fits true to size, order your normal size</ListItem>
                  <ListItem>Designed for a regular fit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>
                    Model measurements: 6'2" height, 38" chest, 30" waist, 34"
                    inseam, wearing a size medium
                  </ListItem>
                </UnorderedList> */}
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
      <Box h={"12rem"} bg="darkcyan">
        Reviews
      </Box>
    </Box>
  );
};

export default SingleProduct;
