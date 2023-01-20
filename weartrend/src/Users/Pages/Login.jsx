import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const Login = () => {
  return (
    <Center w="100%" h="100vh">
      <Box
        mx="1"
        // width={"400px"}
        maxW="md"
        p="2rem"
        borderWidth="3px"
        borderRadius="lg"
      >
        <Heading mb="4" size="lg" textAlign="center">
          Log in
        </Heading>
        <form>
          <FormControl isInvalid={true}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="email" />
            <FormErrorMessage>this is an error</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={true}>
            <FormLabel>password</FormLabel>
            <Input type="password" placeholder="password" />
            <FormErrorMessage>this is an error</FormErrorMessage>
          </FormControl>
          <Button mt={4} type="submit" colorScheme={"teal"} width="100%">
            Submit
          </Button>
        </form>
        <Text mt={4}>
          don't have an account?{" "}
          <Link to={"/register"} color="teal.500" as={RouterLink}>
            register
          </Link>{" "}
          instead
        </Text>
      </Box>
    </Center>
  );
};

export default Login;
