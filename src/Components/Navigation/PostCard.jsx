import React from "react";
import {
  Stack,
  Image,
  HStack,
  Avatar,
  Text,
  VStack,
  Heading,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";

const PostCard = () => {
  return (
    <Flex justify="center" align="center">
      <Stack width="320px" p={4} boxShadow="md">
        <Image
          src="https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hello"
        />
        <HStack>
          <Avatar />
          <Text fontWeight="600">John Doe</Text>
          <Text fontSize="xs">1 min ago</Text>
        </HStack>
        <VStack align="flex-start">
          <Heading fontSize="lg">Subscribe to my Channel</Heading>
          <Text fontSize="sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            perspiciatis numquam recusandae at, optio repudiandae, libero
            reiciendis quaerat maxime autem eum sint rem obcaecati, expedita
            magni ullam cum debitis aliquid?
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            possimus modi commodi repellat minima minus quam sapiente
            perspiciatis quaerat quia doloribus pariatur non inventore, eligendi
            voluptates dolorem tempore voluptas iusto.
          </Text>
          <Button alignSelf="flex-end" size="sm" as={Link} to="/post">
            View
          </Button>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default PostCard;
