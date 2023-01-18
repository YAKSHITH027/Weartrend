import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SingleProd = ({ prodData }) => {
  return (
    <Link to={`/singleproduct/${prodData.id}`}>
      <Box bg={"green.400"} borderRadius={"8px"} padding="8px">
        <Image src={prodData.image} width="100%" />
        <Text>{prodData.brand}</Text>
      </Box>
    </Link>
  );
};

export default SingleProd;
