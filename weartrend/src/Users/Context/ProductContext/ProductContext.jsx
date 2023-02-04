import { createContext, useContext, useReducer } from "react";
import { filterReducer, productReducer } from "./ProductReducer";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../Firebase";

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

  // initial render cart
  const initialCart = async () => {
    try {
      let res = await getDoc(doc(db, "cart", authUser.uid));
      // console.log("initial", res.data());
      dispatch({ type: "INITIAL_CART", payload: res.data().cart });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log("auth,user,use", authUser);
    if (authUser) {
      initialCart();
    }
  }, [authUser]);

  // post cart item
  let addCart = async (data) => {
    console.log(data, authUser.uid);
    let obj = { ...data, qty: 1 };
    state.isLoading = true;
    try {
      // firebase

      await updateDoc(doc(db, "cart", authUser.uid), {
        cart: [...state.cart, obj],
      });

      // console.log(res);
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

  // delete from cart from firebase
  const removeCart = async (data) => {
    console.log("aaa", data);
    let obj = state.cart.filter((item) => item.id != data.id);
    console.log("obj", obj);
    try {
      let res = await updateDoc(doc(db, "cart", authUser.uid), {
        cart: obj,
      });
      console.log("removecart", res);
    } catch (error) {
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
      value={{
        state,
        dispatch,
        addCart,
        removeCart,
        filterData,
        filterDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
