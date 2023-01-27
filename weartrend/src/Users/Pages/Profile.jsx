import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { prodErrorMap } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { db } from "../../Firebase";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const Profile = () => {
  const { authUser } = useContext(AuthContext);
  const [purchased, setPurchased] = useState([]);

  // fetching user order

  const getOrders = async () => {
    let res = await getDoc(doc(db, "completed", authUser.uid));
    console.log("from profile", res.data().completed);
    setPurchased(res.data().completed);
  };
  useEffect(() => {
    getOrders();
  }, []);

  // massaging
  // let main = [];
  // let allNew = purchased.map((prod) => {
  //   prod.puchased.map((item) => {
  //     main.push(item);
  //   });
  // });

  // console.log(main);

  return (
    <Box>
      <Navbar />
      <Flex
        h={"100vh"}
        padding="2rem"
        gap={"2"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Flex
          paddingTop={"2rem"}
          borderWidth={"1px"}
          align={"center"}
          flexDir={"column"}
          borderRadius="9px"
          width={{ base: "full", lg: "30%" }}
        >
          <Heading fontSize={"1.5rem"} marginY="5px">
            user Profile
          </Heading>
          <Avatar name="yakshith" />
          <Text
            p="1rem"
            borderWidth={"1px"}
            marginTop="1rem"
            textTransform={"none"}
          >
            {authUser.email}
          </Text>
        </Flex>
        <Box
          width={"full"}
          borderWidth={"2px"}
          overflowX="scroll"
          borderRadius={"9px"}
        >
          <Text textAlign={"center"} fontSize={{ lg: "1.3rem" }}>
            Your orders
          </Text>
          <Flex
            flexDir={"column"}
            p="1rem"
            // overflowX="scroll"
            width={{ base: "800px", lg: "full" }}
          >
            {purchased.length == 0 ? (
              <Text textAlign={"center"}>
                no purchase has been made till now.....
              </Text>
            ) : (
              purchased.map((item) => {
                var date = item.date;
                var d = new Date(Number(date));
                var ds = d.toLocaleString();
                return item.puchased.map((prod) => {
                  return (
                    <Flex
                      borderWidth={"1px"}
                      margin="5px"
                      key={prod.id}
                      align="center"
                      justifyContent={"space-around"}
                      gap={"5"}
                    >
                      <Box>
                        <Image src={prod.image} height="90px" />
                      </Box>
                      <Text>brand: {prod.brand}</Text>
                      <Box>
                        <Text>price: {prod.price}</Text>
                        <Text>qty: {prod.qty}</Text>
                      </Box>
                      <Text>{ds}</Text>
                      <Text>status:pending</Text>
                    </Flex>
                  );
                });
              })
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
