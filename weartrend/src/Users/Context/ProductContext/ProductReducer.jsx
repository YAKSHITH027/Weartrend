export const productReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_ITEM": {
      console.log("form", action.payload);
      return { ...state, products: action.payload };
    }
    default: {
      return state;
    }
  }
};
