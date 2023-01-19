//   import React from 'react';

import { Box, Heading, Link, List, ListItem } from "@chakra-ui/react";

const PlayGround = () => {
  const categories = [
    {
      name: "Electronics",
      subcategories: ["Computers", "Televisions", "Cell Phones"],
    },
    { name: "Clothing", subcategories: ["Men", "Women", "Children"] },
    {
      name: "Home & Kitchen",
      subcategories: ["Furniture", "Appliances", "Cookware"],
    },
    { name: "Books", subcategories: ["Fiction", "Non-Fiction", "Children"] },
  ];

  return (
    <Box display="flex" flexDirection={"row"} bg="gray.800" p={6} color="white">
      {categories.map((category) => (
        <Box key={category.name} w="100%" mb={4}>
          <Heading as="h3" size="md">
            {category.name}
          </Heading>
          <List styleType="disc">
            {category.subcategories.map((subcategory) => (
              <ListItem key={subcategory}>
                <Link href={`/category/${subcategory}`}>{subcategory}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default PlayGround;

//   Flex,
//   HStack,
//   SimpleGrid,
//   VStack,
// } from "@chakra-ui/react";
// import React from "react";

// const PlayGround = () => {
//   return (
//     <VStack>
//       <Container maxW="8xl" bg="blue.600" color="white">
//         "md" Container
//       </Container>
//       <Container maxW="150px" bg="purple.600" color="white">
//         "550px" Container
//       </Container>
//       <Container maxW="container.sm" bg="green.400" color="#262626">
//         "container.sm" Container
//       </Container>
//       <Container maxW="container.lg" bg="blue.600" centerContent>
//         <Box padding="4" bg="blue.400" color="black" maxW="md">
//           There are many benefits to a joint design and development system. Not
//           only does it bring benefits to the design team, but it also brings
//           benefits to engineering teams. It makes sure that our experiences have
//           a consistent look and feel, not just in our design specs, but in
//           production.
//         </Box>
//       </Container>
//     </VStack>
//   );
// };

// export default PlayGround;
