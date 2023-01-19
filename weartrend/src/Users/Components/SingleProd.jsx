import { Badge, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SingleProd = ({ prodData }) => {
  return (
    <Link to={`/singleproduct/${prodData.id}`}>
      <Box bg={"green.400"} borderRadius={"8px"} padding="8px" minH="25rem">
        <Image
          src={prodData.image}
          width="100%"
          height={"270px"}
          borderRadius="lg"
          border={"2px solid red"}
        />
        <Text py={"1"}>{prodData.brand}</Text>
        <Text height={"3rem"}>{prodData.title}</Text>
        <Text>
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
