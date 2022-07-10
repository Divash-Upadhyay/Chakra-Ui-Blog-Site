import { Container, Stack, Grid } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navigation/NavBar";
import PostCard from "../Navigation/PostCard";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl">
        <Grid
          my="8"
          gap="4"
          gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))"
        >
          <PostCard />
          <PostCard />
          <PostCard />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
