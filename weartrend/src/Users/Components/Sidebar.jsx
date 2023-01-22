import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
  Text,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import MegaMenu from "./MegaMenu";
export default function Sidebar() {
  const { logoutUser, authUser } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} variant="outline" onClick={onOpen}>
        <FaBars fontSize="1.43rem" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              src="https://i.ibb.co/Rgqq7D2/WEARTREND-1-removebg-preview.png"
              height={"2.9rem"}
            />
          </DrawerHeader>

          <DrawerBody>
            <Link to="/">
              <Heading
                fontSize={"1.2rem"}
                fontWeight="bold"
                borderBottom={"1px solid"}
                mb="1rem"
                pb={"5px"}
              >
                Home
              </Heading>
            </Link>
            <Link to={"/cart"}>
              <Heading
                fontSize={"1.2rem"}
                fontWeight="bold"
                borderBottom={"1px solid"}
                mb="1rem"
                pb={"5px"}
              >
                Cart
              </Heading>
            </Link>

            <Heading
              fontSize={"1.2rem"}
              fontWeight="bold"
              borderBottom={"1px solid"}
              mb="1rem"
              pb={"5px"}
            >
              Categories
            </Heading>

            <Box>
              <MegaMenu />
            </Box>
            <Flex gap={3}>
              {authUser ? (
                <Button
                  onClick={() => {
                    logoutUser();
                  }}
                  colorScheme="twitter"
                >
                  Log Out
                </Button>
              ) : (
                <Flex gap={2}>
                  <Link to={"/login"}>
                    <Button>Sign In</Button>
                  </Link>
                  <Link to={"/register"}>
                    <Button colorScheme={"twitter"}>Sign Up</Button>
                  </Link>
                </Flex>
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
