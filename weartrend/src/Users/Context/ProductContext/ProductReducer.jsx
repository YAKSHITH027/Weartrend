import { url } from "./ProductContext";

export const productReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_ITEM": {
      // console.log("form", action.payload);
      return { ...state, products: action.payload };
    }
    case "UPDATE_TOTAL": {
      // console.log("form", action.payload);
      return { ...state, total: action.payload };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
        isLoading: true,
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }
    case "INCREASE": {
      let newCart = state.cart.map((item) => {
        if (item.id == action.payload.id) {
          const q = item.qty + 1;

          let hack = { ...item, qty: q };

          return hack;
        }
        return item;
      });

      return {
        ...state,
        cart: newCart,
      };
    }
    case "DECREASE": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        }),
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

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      return { ...state, sort: action.payload };
    }
    case "RATING": {
      return { ...state, rating: action.payload };
    }
    case "FASTDELIVERY": {
      return { ...state, fastDelivery: action.payload };
    }
    case "RESET": {
      return { ...state, sort: "", rating: "", fastDelivery: false };
    }
    default:
      return state;
  }
};
