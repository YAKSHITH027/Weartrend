import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const getCol = async () => {
    const querySnapshot = await getDocs(collection(db, "completed"));
    const userArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      userArr.push(doc.data());
    });
    setOrders(userArr);
  };
  useEffect(() => {
    getCol();
  }, []);
  // console.log("only ordersssss", orders);

  // masagging

  let main = [];

  let arr = orders.map((order) => {
    order.completed.map((every) => {
      every.puchased.map((item) => {
        console.log(item.price);
      });
    });
  });
  console.log("main", main);

  return (
    <Flex
      flexDir={"column"}
      gap="1rem"
      borderWidth={"1px"}
      p="1rem"
      overflowY={"scroll"}
      height={"98vh"}
    >
      {orders.map((order) => {
        return order.completed.map((every) => {
          var date = every.date;
          var d = new Date(Number(date));
          var ds = d.toLocaleString();
          let all = every.data;
          return every.puchased.map((item) => {
            return (
              <Flex
                flexDirection={"column"}
                p="7px"
                borderWidth="4px"
                marginRight={"12rem"}
              >
                <Flex
                  justifyContent={"space-around"}
                  // marginRight={"12rem"}
                  borderWidth="1px"
                  align={"center"}
                  p="4px"
                >
                  <Box width={"25%"}>
                    <Text>product id : {item.id}</Text>
                    <Image src={item.image} height="90px" />
                  </Box>
                  <Text width={"25%"}>brand: {item.brand}</Text>
                  <Box width={"25%"}>
                    <Text>price: {item.price}</Text>
                    <Text>qty: {item.qty}</Text>
                  </Box>
                  <Text width={"25%"}>purchased on : {ds}</Text>
                </Flex>
                <Flex
                  justifyContent={"space-around"}
                  // marginRight={"12rem"}
                  // borderWidth="1px"
                  align={"center"}
                >
                  <Text width={"25%"}>
                    fullname : {all.firstName}
                    {all.lastName}
                  </Text>
                  <Text width={"25%"}>city : {all.city}</Text>
                  <Text width={"25%"}>pincode : {all.pin}</Text>
                  <Text width={"25%"} overflow="hidden">
                    address : {all.address}
                  </Text>
                </Flex>
              </Flex>
            );
          });
        });
      })}
    </Flex>
  );
};

export default Orders;
