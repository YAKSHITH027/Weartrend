import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  Link,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { VscSearch } from "react-icons/vsc";
import { Link as Rout } from "react-router-dom";

const InputSearch = ({ stateShow, showR, hideR }) => {
  const dropResult = useRef(null);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  let [result, setResult] = useState([]);

  const getSearch = async (search) => {
    try {
      setLoading(true);
      let res = await fetch(
        `${process.env.REACT_APP_JSON_KEY}?q=${search}&_limit=10`
      );
      let data = await res.json();

      setResult(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const id = setTimeout(() => {
      if (search) {
        getSearch(search);
      }
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [search]);

  // console.log(result);
  console.log("loading", isLoading, result);

  return (
    <div>
      <Flex
        width={{ base: "100%", md: stateShow ? "29rem" : "18rem" }}
        // _hover={{ width: "29rem" }}
        // border="2px solid red"
        pos="relative"
        padding={{ base: "3px", md: "10px" }}
        transition="all 0.5s"
      >
        <Input
          placeholder="search"
          textTransform={"none"}
          width={"100%"}
          bg="white"
          zIndex={"2334"}
          p="5px 1rem"
          // border={"none"}
          // outline={"none"}
          onFocus={() => {
            if (search.length) {
              // dropResult.current.style.height = "18rem";
              // dropResult.current.style.padding = "5px";
            }
            //
            hideR();
          }}
          onBlur={() => {
            // dropResult.current.style.height = "0px";
            // dropResult.current.style.padding = "0px";
            showR();
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            // dropResult.current.style.height = "18rem";
            // dropResult.current.style.padding = "5px";
          }}
          // borderBottom="1px solid black"
        />
        <Search2Icon pos={"absolute"} top="1.2rem" right={"1rem"} />

        <Flex
          flexDirection={"column"}
          pos="absolute"
          top={{ base: "2rem", md: "4.5rem" }}
          left="0"
          bg="white"
          ref={dropResult}
          height={search.length == 0 || result.length == 0 ? 0 : "18rem"}
          overflowY="scroll"
          // border={"2px solid yellow"}
          width={"100%"}
          margin="auto"
          borderRadius={"2xl"}
          padding={search.length == 0 || result.length == 0 ? 0 : "1rem"}
          display={!stateShow && "block"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {isLoading ? (
            <Stack>
              {[...Array(7).keys()].map((item, index) => {
                return <Skeleton key={index} height="30px" width="full" />;
              })}
            </Stack>
          ) : (
            search.length != 0 &&
            result.map((item) => {
              return (
                <Link
                  to={`/singleproduct/${item.id}`}
                  key={item.id}
                  onClick={() => {
                    console.log("hello");
                  }}
                  as={Rout}
                >
                  <Flex
                    flexDirection={"row"}
                    className="fix"
                    justifyContent="space-around"
                    align={"center"}
                    borderWidth={"1px"}
                    zIndex="tooltip"
                    marginY="3px"
                    onClick={() => {
                      console.log("hello");
                    }}
                  >
                    <Box
                      height={"3rem"}
                      onClick={() => {
                        console.log("hello");
                      }}
                    >
                      <Image src={item.image} height="100%" />
                    </Box>
                    <Flex flexDir={"column"}>
                      <Text textDecoration={"none"} width="8rem">
                        {item.brand}
                      </Text>
                      <Text color={"gray.600"}>₹ {item.price}</Text>
                    </Flex>
                    <VscSearch />
                  </Flex>
                </Link>
              );
            })
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default InputSearch;
