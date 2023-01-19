import { createContext, useReducer } from "react";
import { productReducer } from "./ProductReducer";
import { useToast } from "@chakra-ui/react";
export const ProductContext = createContext();
export const url = "https://backend-3ayp.onrender.com/";
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
    isLoading: false,
  });
  const toast = useToast();

  // post cart item
  let addCart = async (data) => {
    state.isLoading = true;
    try {
      let res = await fetch(`${url}cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log(res);
      toast({
        title: "Product is added to the cart",
        position: "top",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      dispatch({ type: "LOADING" });
      console.log("done here", state);
    } catch (error) {
      dispatch({ type: "LOADING" });
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider value={{ state, dispatch, addCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
