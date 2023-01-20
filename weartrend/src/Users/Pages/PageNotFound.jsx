import { Button, Center, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Flex justifyContent={"center"} align="center" height={"100vh"}>
      <Link to={"/"} pos="absolute" zIndex={"34"} as={RouterLink}>
        <Button>GO BACK TO HOME</Button>
      </Link>
      <Image
        src="https://media.tenor.com/OyUVgQi-l-QAAAAC/404.gif"
        pos={"relative"}
        borderRadius="2xl"
        width={"50vw"}
      />
    </Flex>
  );
};

export default PageNotFound;
