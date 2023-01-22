import { createContext, useContext, useReducer } from "react";
import { filterReducer, productReducer } from "./ProductReducer";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../AuthContext/AuthContext";
export const ProductContext = createContext();
export const url = "https://backend-3ayp.onrender.com/";
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
    isLoading: false,
    total: 0,
  });
  const toast = useToast();
  const { authUser } = useContext(AuthContext);

  // post cart item
  let addCart = async (data) => {
    console.log(data, authUser.uid);
    let obj = { cart: [data], userId: authUser.uid };
    state.isLoading = true;
    try {
      let res = await fetch(`${url}cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
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
      // console.log("done here", state);
    } catch (error) {
      dispatch({ type: "LOADING" });
      console.log(error);
    }
  };

  //  filter stuff

  const [filterData, filterDispatch] = useReducer(filterReducer, {
    rating: null,
    sort: null,
    fastDelivery: false,
  });

  return (
    <ProductContext.Provider
      value={{ state, dispatch, addCart, filterData, filterDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
