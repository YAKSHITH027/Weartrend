import {
  Box,
  Button,
  Flex,
  FormControl,
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
import { BsBank2, BsCreditCard2FrontFill } from "react-icons/bs";
import { FaCcAmazonPay, FaWallet } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import PaymentSuccessModal from "../Components/PaymentSuccessModal";
import { ProductContext } from "../Context/ProductContext/ProductContext";

const Payment = () => {
  const naviagete = useNavigate();
  const {
    state: { total },
  } = useContext(ProductContext);
  const [count, setCount] = useState(5);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInterval(() => {
      setCount((p) => p - 1);
    }, 1000);
    setTimeout(() => {
      naviagete("/");
    }, 5000);
  };
  console.log(count);
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
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <FormControl my={"2px"}>
                <Flex gap={"3"}>
                  <Box>
                    <FormLabel>First Name</FormLabel>
                    <Input minLength={4} />
                  </Box>
                  <Box>
                    <FormLabel>Last Name</FormLabel>
                    <Input />
                  </Box>
                </Flex>
              </FormControl>
              <FormControl mt={"9px"}>
                <FormLabel>Address</FormLabel>
                <Textarea resize={"none"}></Textarea>
              </FormControl>
              <FormControl mt={"9px"}>
                <Flex gap={"3"}>
                  <Box>
                    <FormLabel>City</FormLabel>
                    <Input minLength={2} />
                  </Box>
                  <Box>
                    <FormLabel>State</FormLabel>
                    <Input minLength={2} />
                  </Box>
                  <Box>
                    <FormLabel>Pincode</FormLabel>
                    <Input minLength={6} maxLength={6} />
                  </Box>
                </Flex>
              </FormControl>
              <FormControl mt="9px">
                <Flex gap={"3"}>
                  <Box>
                    <FormLabel>Card Number</FormLabel>
                    <Input minLength={16} maxLength="16" />
                  </Box>
                  <Box>
                    <FormLabel>CVV</FormLabel>
                    <HStack>
                      <PinInput minLength={3}>
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
                  <Box>
                    <FormLabel>Exp Month</FormLabel>
                    <Input />
                  </Box>
                  <Box>
                    <FormLabel>Exp Year</FormLabel>
                    <Input />
                  </Box>
                </Flex>
              </FormControl>
              <Button type="submit" width={"full"} my="4">
                <PaymentSuccessModal total={total} count={count} />
              </Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Payment;
