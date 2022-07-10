import { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";
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
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import NavBar from "./Components/Navigation/NavBar";
import Home from "./Components/Pages/Home";
import PostPage from "./Components/Pages/PostPage";
import { AllRoutes } from "./AllRoutes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AllRoutes />
      {/* <NavBar /> */}
      {/* <Home /> */}
      {/* <PostPage /> */}
    </>
    // <Container maxWidth="container.xl" padding="10">
    //   <Flex
    //     h={{ base: "auto", md: "100vh" }}
    //     py={[0, 10, 20]}
    //     direction={{
    //       base: "column-reverse",
    //       md: "row",
    //     }}
    //   >
    //     <Details />
    //     <Cart />
    //   </Flex>
    // </Container>
  );
}

export default App;
