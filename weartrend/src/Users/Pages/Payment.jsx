import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsBank2, BsCreditCard2FrontFill } from "react-icons/bs";
import { FaCcAmazonPay, FaWallet } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import {
  nameValidate,
  addressValidate,
  cityValidate,
  stateValidate,
  pinValidate,
  cardValidate,
  monthValidate,
  yearValidate,
  cvvValidate,
  emailValidate,
} from "../utils";
import Navbar from "../Components/Navbar";
import PaymentSuccessModal from "../Components/PaymentSuccessModal";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { useEffect } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const Payment = () => {
  const naviagete = useNavigate();
  const {
    state: { total, cart },
    dispatch,
  } = useContext(ProductContext);
  const { authUser } = useContext(AuthContext);
  const [count, setCount] = useState(5);
  const {
    register,
    handleSubmit: validationSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [valid, setValid] = useState(false);
  // VALIDATTION
  // console.log(errors);
  // console.log("sssssssss", authUser);
  const handleSubmit = async (data) => {
    // e.preventDefault();
    // console.log("data form", data);
    try {
      let res = await getDoc(doc(db, "completed", authUser.uid));
      let docs = res.data().completed;
      console.log("completed", docs);
      let productsArr = [
        ...docs,
        {
          puchased: cart,
          data,

          status: "pending",
          date: Date.now(),
        },
      ];
      // console.log(productsArr);
      // console.log("user", authUser.uid);
      await updateDoc(doc(db, "completed", authUser.uid), {
        completed: productsArr,
      });
      // console.log(".....end");
      await updateDoc(doc(db, "cart", authUser.uid), { cart: [] });
      dispatch({ type: "CLEAR_CART" });
      // console.log("payment");
      setValid(true);
      setInterval(() => {
        setCount((p) => p - 1);
      }, 1000);
      setTimeout(() => {
        naviagete("/");
      }, 5000);
    } catch (error) {
      console.log(error);
    }

    // let see = await getDoc(
    //   doc(db, "completed", "9P9UKgRB1gU7UZuoatzUpsQdAbJ3")
    // );
  };

  // console.log(count);
  // console.log(valid);

  return (
    <Box maxW={"95vw"} margin="auto" marginBottom={"3rem"}>
      <Box>
        <Navbar />
      </Box>

      <Flex
        flexDir={"column"}
        gap="5"
        marginTop={"1rem"}
        justify={"center"}
        align="center"
        minHeight={"80vh"}
      >
        <Heading fontSize={{ base: "1.5rem", md: "2rem" }}>
          Choose your Payment Method
        </Heading>
        <Flex
          gap={5}
          boxShadow="xl"
          borderWidth={"2px"}
          p="6"
          width={{ base: "350px", md: "auto" }}
          rounded="md"
          flexDir={{ base: "column", md: "row" }}
          bg="white"
          padding={"6"}
          borderRadius="2xl"
        >
          <Flex
            flexDir={"column"}
            borderWidth="1px"
            p="3"
            borderRadius={"lg"}
            gap="2"
          >
            <Flex gap={"2"} align="center">
              <BsCreditCard2FrontFill />
              <span>Debit/Credit card</span>
            </Flex>
            <Flex gap={"2"} align="center">
              <FaCcAmazonPay />
              <span>UPI</span>
            </Flex>
            <Flex gap={"2"} align="center">
              <FaWallet />
              <span>Wallet</span>
            </Flex>
            <Flex gap={"2"} align="center">
              <BsBank2 />
              <span>NetBanking</span>
            </Flex>
            <Flex gap={"2"} align="center">
              <HiCurrencyRupee />
              <span>Cash on Delivery</span>
            </Flex>
          </Flex>
          <Flex
            width={{ base: "auto", md: "470px" }}
            borderWidth="1px"
            p="3"
            borderRadius={"lg"}
          >
            <form onSubmit={validationSubmit(handleSubmit)}>
              <FormControl my={"2px"}>
                <Flex gap={"3"}>
                  <FormControl isInvalid={errors.firstName}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      minLength={4}
                      {...register("firstName", nameValidate)}
                    />
                    <FormErrorMessage>
                      {errors.firstName?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input />
                  </FormControl>
                </Flex>
              </FormControl>
              <FormControl mt={"9px"} isInvalid={errors.address}>
                <FormLabel>Address</FormLabel>
                <Textarea
                  resize={"none"}
                  {...register("address", addressValidate)}
                ></Textarea>
                <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
              </FormControl>
              <FormControl mt={"9px"}>
                <Flex gap={"3"}>
                  <FormControl isInvalid={errors.city}>
                    <FormLabel>City</FormLabel>
                    <Input minLength={2} {...register("city", cityValidate)} />
                    <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.state}>
                    <FormLabel>state</FormLabel>
                    <Input
                      minLength={2}
                      {...register("state", stateValidate)}
                    />
                    <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.pin}>
                    <FormLabel>pin</FormLabel>
                    <Input type={"number"} {...register("pin", pinValidate)} />
                    <FormErrorMessage>{errors.pin?.message}</FormErrorMessage>
                  </FormControl>
                </Flex>
              </FormControl>
              <FormControl mt="9px">
                <Flex gap={"3"}>
                  <FormControl isInvalid={errors.card}>
                    <FormLabel>card</FormLabel>
                    <Input
                      type={"number"}
                      {...register("card", cardValidate)}
                    />
                    <FormErrorMessage>{errors.card?.message}</FormErrorMessage>
                  </FormControl>

                  <Box>
                    <FormLabel>CVV</FormLabel>
                    <HStack>
                      <PinInput type="number">
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </HStack>
                  </Box>
                </Flex>
              </FormControl>
              <FormControl mt="9px">
                <Flex gap={"3"}>
                  <FormControl isInvalid={errors.month}>
                    <FormLabel>month</FormLabel>
                    <Input
                      type="number"
                      minLength={2}
                      {...register("month", monthValidate)}
                    />
                    <FormErrorMessage>{errors.month?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.year}>
                    <FormLabel>year</FormLabel>
                    <Input
                      type="number"
                      minLength={2}
                      {...register("year", yearValidate)}
                    />
                    <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
                  </FormControl>
                </Flex>
              </FormControl>
              <Button type="submit" width={"full"} my="4">
                <PaymentSuccessModal
                  total={total}
                  count={count}
                  valid={valid}
                />
              </Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Payment;
