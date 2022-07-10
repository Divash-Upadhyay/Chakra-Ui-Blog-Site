import React from "react";
import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Checkbox,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Details from "./Details";
import NavBar from "./Navigation/NavBar";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.600");

  return (
    <>
      <NavBar />
      <Container maxWidth="container.xl" padding="10">
        <Flex
          h={{ base: "auto", md: "100vh" }}
          py={[0, 10, 20]}
          direction={{
            base: "column-reverse",
            md: "row",
          }}
        >
          <Details />
          <VStack
            bg={bgColor}
            w="full"
            h="full"
            p={10}
            spacing={10}
            align="flex-start"
          >
            <VStack alignItems="flex-start" spacing={3}>
              <Heading size="2xl">Your Cart</Heading>
              <Text>
                If The price is too hard on your eyes,{" "}
                <Button
                  onClick={toggleColorMode}
                  variant="outline"
                  colorScheme="black"
                >
                  Change the Theme
                </Button>
              </Text>
            </VStack>
            <HStack spacing={6} alignItems="center" w="full">
              <AspectRatio ratio={1} w={24}>
                <Image
                  src="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Item"
                />
              </AspectRatio>
              <Stack
                spacing={0}
                w="full"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <VStack w="full" spacing={0} alignItems="flex-start">
                  <Heading size="md">Penny Board</Heading>
                  <Text color={textColor}>PNYCOMP27541</Text>
                </VStack>
                <Heading size="sm" textAlign="end">
                  $119.00
                </Heading>
              </Stack>
            </HStack>
            <VStack spacing={4} alignItems="stretch" w="full">
              <HStack justifyContent="space-between">
                <Text color={textColor}>Subtotal</Text>
                <Heading size="Sm">$119.00</Heading>
              </HStack>
              <HStack justifyContent="space-between">
                <Text color={textColor}>Shipping</Text>
                <Heading size="Sm">$19.00</Heading>
              </HStack>
              <HStack justifyContent="space-between">
                <Text color={textColor}>Taxes (estimated)</Text>
                <Heading size="Sm">$119.00</Heading>
              </HStack>
            </VStack>
            <Divider />
            <HStack justifyContent="space-between" w="full">
              <Text color={textColor}>Subtotal</Text>
              <Heading size="Sm">$162.00</Heading>
            </HStack>
          </VStack>
          //{" "}
        </Flex>
        //{" "}
      </Container>
    </>
  );
};

export default Cart;
