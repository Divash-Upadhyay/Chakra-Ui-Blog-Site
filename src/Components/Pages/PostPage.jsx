import {
  Container,
  Heading,
  Stack,
  Image,
  HStack,
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navigation/NavBar";

const PostPage = () => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl">
        {" "}
        <Stack spacing={8} mt={8}>
          <Heading fontSize="2xl" textTransform="capitalize">
            Hiw u can post ur blogs here
          </Heading>
          <Image
            src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="bigimage"
          />
          <HStack>
            <Avatar name="Divash" size="lg" />
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 min ago</Text>
          </HStack>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint
            suscipit deserunt minus repellendus exercitationem quam ratione
            error modi! Provident repellat ut itaque. Consectetur odio
            architecto placeat nostrum, fuga nobis?
          </Text>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint
            suscipit deserunt minus repellendus exercitationem quam ratione
            error modi! Provident repellat ut itaque. Consectetur odio
            architecto placeat nostrum, fuga nobis?
          </Text>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint
            suscipit deserunt minus repellendus exercitationem quam ratione
            error modi! Provident repellat ut itaque. Consectetur odio
            architecto placeat nostrum, fuga nobis?
          </Text>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Container>
    </>
  );
};

export default PostPage;
