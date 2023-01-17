import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Input,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import SimpleSlider from "../Components/Caroseal";
import { autoImage } from "../utils";
import ProductSlider from "../Components/ProductSlider";
import Footer from "../Components/Footer";
const Home = () => {
  //   console.log(autoImage);
  return (
    <Box width={"95vw"} margin="auto" padding={"0.7rem"} bg="white">
      <Box justify={"center"} marginBottom="1rem">
        <Image
          src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_01a_v3_SALE_Incremental.jpg?scl=1&fmt=webp&wid=1440"
          width={"100%"}
        ></Image>
      </Box>
      <Box marginBottom={"1rem"}>
        <SimpleSlider autoData={autoImage} />
      </Box>
      <Box
        paddingY={"2rem"}
        paddingBottom="3rem"
        h={"auto"}
        border="2px solid red"
      >
        <Heading py={"2rem"}>RECOMMENDED FOR YOU</Heading>
        <ProductSlider />
      </Box>
      <Flex gap={"2rem"}>
        <Image
          src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_03a_TB_Weitzman.jpg?scl=1&fmt=webp&wid=706"
          width={"50%"}
        />
        <Image
          src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_03b_TB_Theory.jpg?scl=1&fmt=webp&wid=708"
          width={"50%"}
        />
      </Flex>
      <Box marginTop={"4rem"} marginBottom={"1rem"}>
        <Image
          src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_04_MULTI_FeatShops.jpg?scl=1&fmt=webp&wid=1440"
          width={"100%"}
        />
      </Box>

      <Box paddingY={"1rem"} paddingBottom="3rem">
        <Heading py={"2rem"}>DESIGNER BOUTIQUE</Heading>
        <ProductSlider />
      </Box>

      <Box>
        <Image
          src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_06_MULTI_Essentials.jpg?scl=1&fmt=webp&wid=1440"
          width={"100%"}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
