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
import { emailValidate, passwordValidate, usernameValidate } from "../utils";
import { auth, db } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { setDoc, Timestamp, doc } from "firebase/firestore";
const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function handleLogin(data) {
    console.log(data);
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        ...data,
        avatar: "",
        date: Date.now(),
      });
      console.log(res.user);
      loginUser(res.user);
      setLoading(false);
      toast({
        title: "Sign up successful",
        description: "have a great day.",
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      reset();
      navigate("/");
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: error.message,
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
      console.log(error);
    }
  }
  console.log(errors);

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="2rem" borderWidth="3px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Register
        </Heading>
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.userName}>
            <FormLabel>UserName</FormLabel>
            <Input
              textTransform={"none"}
              type="text"
              placeholder="Username"
              {...register("userName", usernameValidate)}
            />
            <FormErrorMessage>{errors.userName?.message}</FormErrorMessage>
          </FormControl>
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
        <Text mt={4}>
          Already have an account?{" "}
          <Link to={"/login"} color="teal.500" as={RouterLink}>
            Log In
          </Link>{" "}
          instead
        </Text>
      </Box>
    </Center>
  );
};

export default Register;
