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
} from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
      <VStack spacing={2} align="flex-start">
        {" "}
        <Heading>Yours Details</Heading>
        <Text>Loream ispum heloo yo on this area</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Enter First Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Enter Last Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Enter Your Address" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Enter Your Address" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option></option>
              <option>India</option>
              <option>U.S.A</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>Ship to the billing address</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="full" size="lg">
            Place Items
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
