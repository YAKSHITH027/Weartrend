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
import { useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { emailValidate, passwordValidate } from "../../Users/utils";
import { AdminContext } from "../AdminContext/AdminContext";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const { admin, loginAdmin } = useContext(AdminContext);

  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function handleLogin(data) {
    if (data.email.length > 5 && data.password.length > 12) {
      toast({
        title: "login successful",
        description: "have a great day.",
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      loginAdmin();
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "login failed",

        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
    }
  }

  console.log(errors);

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="2rem" borderWidth="3px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Admin Login
        </Heading>
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              textTransform={"none"}
              type="email"
              placeholder="email"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              placeholder="password"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            type="submit"
            colorScheme={"teal"}
            width="100%"
            isLoading={isLoading}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
