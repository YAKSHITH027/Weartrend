import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Flex,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
export default function EditProductModal({ item, get }) {
  //   console.log("props", props.title);
  const toast = useToast();
  let url = process.env.REACT_APP_JSON_KEY;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [prodData, setProdData] = useState({
    image: item.image,
    quntity: item.quntity,
    price: item.price,
    title: item.title,
    offerPrice: item.offerPrice,
    brand: item.brand,
    category: item.category,
    desc: "type desc here",
    ratings: 3,
    fastDelivery: true,
    totalRatings: 6,
  });
  const { image, quntity, price, title, offerPrice, brand, category } =
    prodData;
  const [isLoading, setLoading] = useState(false);
  const handleAdd = async () => {
    if (
      !image ||
      !quntity ||
      !price ||
      !title ||
      !offerPrice ||
      !brand ||
      !category
    ) {
      toast({
        title: "Please fill all the details",
        position: "top",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      let res = await fetch(`${url}/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prodData),
      });
      setLoading(false);
      onClose();
      console.log(res);
      get();
      toast({
        title: "Product is edited",
        position: "top",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProdData({ ...prodData, [name]: value });
  };
  //   console.log(prodData);
  return (
    <>
      <Button onClick={onOpen} colorScheme="green">
        Edit
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input
                  type={"url"}
                  name="image"
                  isRequired
                  value={image}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <Flex justifyContent={"space-around"} gap="4">
                  <Box width={"full"}>
                    <FormLabel>Title</FormLabel>
                    <Input
                      value={title}
                      isRequired
                      name="title"
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>Brand</FormLabel>
                    <Input
                      value={brand}
                      isRequired
                      name="brand"
                      onChange={handleChange}
                    />
                  </Box>
                </Flex>
              </FormControl>

              <FormControl>
                <FormLabel>Category</FormLabel>
                <Input
                  value={category}
                  name="category"
                  isRequired
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <Flex justifyContent={"space-around"} gap="4">
                  <Box width={"full"}>
                    <FormLabel>Original Price</FormLabel>
                    <Input
                      name="price"
                      type={"number"}
                      isRequired
                      value={price}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>Offer Price</FormLabel>
                    <Input
                      name="offerPrice"
                      type={"number"}
                      isRequired
                      value={offerPrice}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>quantity</FormLabel>
                    <Input
                      name="quntity"
                      type={"number"}
                      isRequired
                      value={quntity}
                      onChange={handleChange}
                    />
                  </Box>
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="desc"
                  resize={"none"}
                  isRequired
                  value={prodData.desc}
                  onChange={handleChange}
                ></Textarea>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                isLoading={isLoading}
                onClick={handleAdd}
                marginTop="2rem"
                width="full"
              >
                Add
              </Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
