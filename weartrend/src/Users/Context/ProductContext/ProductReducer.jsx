import { url } from "./ProductContext";

export const productReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_ITEM": {
      console.log("form", action.payload);
      return { ...state, products: action.payload };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
        isLoading: true,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload.id),
      };
    }
    case "LOADING": {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
