import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart";
import Details from "../Components/Details";
import NavBar from "../Components/Navigation/NavBar";
import PostCard from "../Components/Navigation/PostCard";
import Home from "../Components/Pages/Home";
import PostPage from "../Components/Pages/PostPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/postcard" element={<PostCard />} /> */}
      <Route path="/postpage" element={<PostPage />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/details" element={<Details />} /> */}
    </Routes>
  );
};
