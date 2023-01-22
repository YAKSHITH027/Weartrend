import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useToast } from "@chakra-ui/react";
const PrivateRoutes = ({ children }) => {
  const { authUser } = useContext(AuthContext);
  const toast = useToast();
  console.log("from private", authUser);
  if (!authUser) {
    toast({
      title: "Please Login First",
      description: "You Can't Access This Page ",
      status: "error",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoutes;
