import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import SingleProduct from "../Pages/SingleProduct";

const Routes = () => {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
      <Route to="/login" element={<Login />} />
      <Route to="/register" element={<Register />} />
      <Route to="/profile" element={<Profile />} />
      <Route to="/payment" element={<Payment />} />
      <Route to="/products/:category" element={<Products />} />
      <Route to="/singleproduct/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default Routes;
