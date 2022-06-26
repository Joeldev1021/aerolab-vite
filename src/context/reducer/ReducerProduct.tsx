import { ProductState } from "../../types";
import { ProductAction } from "../actions/ProductAction";

export const productReducer = (state:ProductState, action:ProductAction) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        productsFilter: action.payload
      };
    case "HIGHEST_PRICES":
      return {
        ...state
      };
    default :
      return state;
  }
};
