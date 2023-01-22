import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: "4" }}
      fontSize={{ base: "0.9rem", mid: "1.2rem" }}
      overflow={"hidden"}
      paddingBottom="1rem"
      className="mega-menu"
    >
      <Link to="/products/womens">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>womens</Heading>
      </Link>
      <Link to="/products/mens">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>mens</Heading>
      </Link>
      <Link to="/products/kids">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>kids</Heading>
      </Link>
      <Link to="/products/shoes">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>shoes</Heading>
      </Link>
      <Link to="/products/handbags">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>handbags</Heading>
      </Link>
      <Link to="/products/home">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>home</Heading>
      </Link>
      <Link to="/products/sale">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>sale</Heading>
      </Link>
      <Link to="/products/designers">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>
          designers
        </Heading>
      </Link>
      <Link to="/products/gifts">
        <Heading fontSize={{ base: "0.9rem", mid: "1.2rem" }}>gifts</Heading>
      </Link>
    </Flex>
  );
};

export default MegaMenu;
