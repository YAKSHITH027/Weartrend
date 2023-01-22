import React from "react";
import { Box, Flex, Image, Heading, Hide } from "@chakra-ui/react";

import SimpleSlider from "../Components/Caroseal";
import { autoImage } from "../utils";
import ProductSlider from "../Components/ProductSlider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  //   console.log(autoImage);

  const [womensData, setWomensData] = useState([]);
  const [mensData, setMensData] = useState([]);

  let getData = async (category) => {
    let res = await fetch(
      `${process.env.REACT_APP_JSON_KEY}?${category}&_limit=16`
    );
    let data = await res.json();
    setWomensData(data);
  };
  useEffect(() => {
    getData("womens");
  }, []);
  let arr1 = womensData.slice(0, 8);
  let arr2 = womensData.slice(8, 15);

  console.log("home", arr1, arr2);

  return (
    <Box>
      <Navbar />
      <Box width={"95vw"} margin="auto" padding={"0.7rem"} bg="white">
        <Box justify={"center"} marginBottom="1rem">
          <Image
            src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_01a_v3_SALE_Incremental.jpg?scl=1&fmt=webp&wid=1440"
            width={"100%"}
            borderRadius={{ base: "5px", md: "2xl" }}
            minH={{ base: "3rem" }}
          ></Image>
        </Box>
        <Box marginBottom={{ base: "0.3rem", md: "1rem" }} borderRadius={"2xl"}>
          <SimpleSlider autoData={autoImage} />
        </Box>
        <Box
          paddingY={{ base: "1rem", md: "1.6rem" }}
          paddingBottom="3rem"
          h={"auto"}
        >
          <Heading
            fontSize={{ base: "1.3rem", md: "1.8rem" }}
            py={{ base: "0.6rem", md: "1.4rem" }}
          >
            RECOMMENDED FOR YOU
          </Heading>
          <Box>
            <ProductSlider dataProd={arr1} />
          </Box>
        </Box>
        <Flex
          // width={"98vw"}
          gap={"2rem"}
          justifyContent={"space-around"}
          flexDirection={{ base: "column", sm: "column", lg: "row" }}
        >
          <Box>
            <Image
              src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_03a_TB_Weitzman.jpg?scl=1&fmt=webp&wid=706"
              width={"100%"}
              borderRadius="2xl"
            />
          </Box>
          <Box>
            <Image
              src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_03b_TB_Theory.jpg?scl=1&fmt=webp&wid=708"
              width={"100%"}
              borderRadius="2xl"
            />
          </Box>
        </Flex>
        <Box
          marginTop={{ base: "1.4rem", md: "3rem" }}
          marginBottom={{ md: "1rem" }}
        >
          <Image
            src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_04_MULTI_FeatShops.jpg?scl=1&fmt=webp&wid=1440"
            width={"100%"}
          />
        </Box>

        <Box paddingY={"1rem"} paddingBottom="3rem">
          <Heading
            fontSize={{ base: "1.3rem", md: "1.8rem" }}
            py={{ base: "0.8rem", md: "1.2rem" }}
          >
            DESIGNER BOUTIQUE
          </Heading>
          <ProductSlider dataProd={arr2} />
        </Box>
        <Hide below="md">
          <Box>
            <Image
              src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_06_MULTI_Essentials.jpg?scl=1&fmt=webp&wid=1440"
              width={"100%"}
            />
          </Box>
        </Hide>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
