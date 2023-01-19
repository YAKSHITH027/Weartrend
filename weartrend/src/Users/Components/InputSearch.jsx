import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchInput = useRef(null);

  return (
    <div>
      <Flex
        width="18rem"
        height={"100%"}
        _hover={{ width: "29rem" }}
        bg={"white"}
        transition="all 0.5s"
        pos="absolute"
        zIndex={0}
        top={"0rem"}
        right={"6rem"}
        // paddingTop="2.5rem"
        // paddingBottom={"3rem"}
        alignItems="center"
      >
        <Input
          placeholder="search"
          width={"100%"}
          p="5px 1rem"
          border={"none"}
          // outline={"none"}
          borderBottom="1px solid"
          ref={searchInput}
        />
        <Search2Icon pos={"absolute"} top="3rem" right={"5rem"} />

        <Flex
          flexDirection={"column"}
          pos="absolute"
          top={"4rem"}
          bg="white"
          width={"100%"}
          display="none"
        >
          <Text>hello there</Text>
          <Text>hello there</Text>
          <Text>hello there</Text>
          <Text>hello there</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default InputSearch;
