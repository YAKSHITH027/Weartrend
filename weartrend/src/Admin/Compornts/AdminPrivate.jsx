import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useToast } from "@chakra-ui/react";
import { AdminContext } from "../AdminContext/AdminContext";
const PrivateRoutes = ({ children }) => {
  const { admin } = useContext(AdminContext);
  const toast = useToast();

  if (!admin) {
    toast({
      title: "you are not authorized",
      description: "You Can't Access This Page ",
      status: "error",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
    return <Navigate to={"/adminlogin"} />;
  }
  return children;
};

export default PrivateRoutes;
