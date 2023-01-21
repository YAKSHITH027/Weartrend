import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import PageNotFound from "../Pages/PageNotFound";
import Dashboard from "../../Admin/Pages/Dashboard";
import Sidebar from "../../Admin/Compornts/Sidebar";
import User from "../../Admin/Pages/User";
import Orders from "../../Admin/Pages/Orders";
import Messages from "../../Admin/Pages/Messages";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />

      <Route
        path="/dashboard"
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      />
      <Route
        path="/orders"
        element={
          <Sidebar>
            <Orders />
          </Sidebar>
        }
      />
      <Route
        path="/messages"
        element={
          <Sidebar>
            <Messages />
          </Sidebar>
        }
      />
      <Route
        path="/user"
        element={
          <Sidebar>
            <User />
          </Sidebar>
        }
      />

      <Route
        path="/products/:category"
        element={
          <PrivateRoutes>
            <Products />
          </PrivateRoutes>
        }
      />
      <Route
        path="/singleproduct/:id"
        element={
          <PrivateRoutes>
            <SingleProduct />
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
