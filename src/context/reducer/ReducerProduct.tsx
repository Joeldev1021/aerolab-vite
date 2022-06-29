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
    case "FILTER_CATEGORY":
      return {
        ...state,
        productsFilter: action.payload.category === "All Products" ? [...state.products] : [...state.products].filter(product => product.category === action.payload.category)
      };

    case "HIGHEST_PRICE":
      return {
        ...state,
        productsFilter: [...state.productsFilter].sort((a, b) => a.cost - b.cost)
      };
    case "LOWEST_PRICE":
      return {
        ...state,
        productsFilter: [...state.productsFilter].sort((a, b) => b.cost - a.cost)
      };
    case "MOST_RECENT":
      return {
        ...state,
        productsFilter: [...state.products]
      };
    default :
      return state;
  }
};
