import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const SingleProd = ({ prodData }) => {
  return (
    <Link to={`/singleproduct/${prodData.id}`}>
      <Box
        borderWidth={"2px"}
        borderRadius={"8px"}
        padding="8px"
        minH={{ base: "auto", md: "25rem" }}
      >
        <Image
          src={prodData.image}
          margin="auto"
          width="100%"
          height={{ base: "170", md: "270px" }}
          borderRadius="lg"
          transition={"all 0.4s"}
          _hover={{
            padding: "10px",
          }}
          // border={"2px solid red"}
        />
        <Text py={"1"}>{prodData.brand}</Text>
        <Text height={{ base: "2.5rem", md: "1.5rem" }}>
          {prodData.title.substring(0, 20)}
        </Text>
        <Text>
          <Flex align={"center"}>
            <Rating rating={prodData.ratings} />

            <Text marginLeft={"1"}> {prodData.totalRatings}</Text>
          </Flex>
          <Text paddingBottom={"2px"}>
            {prodData.fastDelivery ? "Fast Delivery" : "Delivery in 4 days"}
          </Text>
          <Badge colorScheme="green" fontSize="1rem" mr={2}>
            INR {prodData.offerPrice}
          </Badge>
          <Badge
            colorScheme="red"
            fontSize="1rem"
            textDecoration={"line-through"}
          >
            INR {prodData.price}
          </Badge>
        </Text>
      </Box>
    </Link>
  );
};

export default SingleProd;
