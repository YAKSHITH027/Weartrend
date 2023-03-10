import { createContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";
import { useToast } from "@chakra-ui/react";
import { json, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuth] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const navigte = useNavigate();
  const toast = useToast();
  // console.log(authUser);
  const loginUser = (e) => {
    setAuth(e);
    localStorage.setItem("userData", JSON.stringify(e));
  };

  // console.log(state);
  // logout user
  const logoutUser = async () => {
    try {
      let res = await signOut(auth);
      toast({
        title: "Logout Successful",
        position: "top",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      localStorage.setItem("userData", null);
      // console.log(res);

      navigte("/");
    } catch (error) {
      console.log(error);
    }

    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
