import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const PlayGround = () => {
  return (
    <VStack>
      <Container maxW="8xl" bg="blue.600" color="white">
        "md" Container
      </Container>
      <Container maxW="150px" bg="purple.600" color="white">
        "550px" Container
      </Container>
      <Container maxW="container.sm" bg="green.400" color="#262626">
        "container.sm" Container
      </Container>
      <Container maxW="container.lg" bg="blue.600" centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="md">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
    </VStack>
  );
};

export default PlayGround;
