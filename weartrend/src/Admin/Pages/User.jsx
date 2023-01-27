import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { useEffect } from "react";
import { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const User = () => {
  const [users, setUsers] = useState([]);
  const getCol = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      userArr.push(doc.data());
    });
    setUsers(userArr);
  };
  useEffect(() => {
    getCol();
  }, []);
  console.log(users);
  return (
    <Flex flexDir={"column"} padding="2rem" justify={"center"} align="center">
      <Heading
        bg={"rgb(58, 74, 99)"}
        color="white"
        px="1rem"
        py="0.4rem"
        mb="1rem"
        borderRadius={"xl"}
      >
        All Users
      </Heading>

      <Flex
        flexDir={"column"}
        borderWidth="2px"
        borderRadius={"1rem"}
        py="2rem"
        px="4rem"
        overflowY={"scroll"}
        height="80vh"
      >
        <Flex justifyContent={"space-around"}>
          <Text fontSize={"1.4rem"} fontWeight="bold">
            user id
          </Text>
          <Text fontSize={"1.4rem"} fontWeight="bold" marginLeft={"2rem"}>
            userName
          </Text>
          <Text fontSize={"1.4rem"} fontWeight="bold">
            uer email
          </Text>
        </Flex>
        {users?.map((item, index) => {
          return (
            <Flex
              // justify={"space-around"}
              key={item.uid}
              gap="3rem"
              borderRadius={"md"}
              padding={"0.4rem"}
              margin="0.2rem"
              borderWidth={"2px"}
            >
              <Text width="20rem">{item.id}</Text>
              <Text width={"7rem"} textAlign="start">
                {item.userName}
              </Text>
              <Text minWidth={"7rem"}>{item.email}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default User;
