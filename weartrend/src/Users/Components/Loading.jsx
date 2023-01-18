import { Center, Image } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Center
      h="100vh"
      pos={"fixed"}
      top="0"
      left={"0"}
      zIndex="16434"
      height={"100vh"}
      width="100vw"
      bg={"white"}
    >
      <Image src="https://i.ibb.co/G79J4Ps/Ripple-1s-200px.gif" />
    </Center>
  );
};

export default Loading;
