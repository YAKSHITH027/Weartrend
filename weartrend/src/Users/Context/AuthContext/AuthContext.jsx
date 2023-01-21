import { createContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";
import { useToast } from "@chakra-ui/react";
import { json, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuth] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const navigte = useNavigate();
  const toast = useToast();
  console.log(authUser);
  const loginUser = (e) => {
    localStorage.setItem("userData", JSON.stringify(e));
  };
  const logoutUser = async () => {
    try {
      let res = await signOut(auth);
      toast({
        title: "Logout Successful",

        status: "success",
        duration: 4000,
        isClosable: true,
      });
      localStorage.setItem("userData", null);
      console.log(res);
      navigte("/login");
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
