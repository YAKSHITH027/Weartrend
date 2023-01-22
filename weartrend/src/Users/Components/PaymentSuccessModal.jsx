import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Flex,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
const PaymentSuccessModal = ({ total, count }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} width="full" colorScheme={"twitter"}>
        Pay : {total}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="2xl" marginTop={"7rem"} pos="relative">
          <Flex height="100%" align="center">
            <Image
              src="https://assets.materialup.com/uploads/9ba2d687-d7d3-4361-8aee-7b2a3c074761/preview.gif"
              borderRadius={"2xl"}
            />
          </Flex>
          <Text
            color={"white"}
            fontSize="1.6rem"
            pos={"absolute"}
            top="3rem"
            left="13%"
            textAlign={"center"}
          >
            taking you back home in {count}
          </Text>
        </ModalContent>
      </Modal>
    </>
  );
};
export default PaymentSuccessModal;
