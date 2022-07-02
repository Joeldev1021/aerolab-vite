/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useReducer, useState } from "react";
import api from "../../api";
import { Product, ProductState } from "../../types";
import { ProductContext } from "../ProductContext";
import { productReducer } from "../reducer/ReducerProduct";

interface ProviderProps {
    children:JSX.Element | JSX.Element[]
};

export const initialStateProduct: ProductState = {
  products: [],
  productsFilter: []
};

export const ProductProvider = ({ children }:ProviderProps) => {
  const [state, dispatch] = useReducer(productReducer, initialStateProduct);

  const getAllProduct = async () => {
    const products = await api.loadProducts();
    dispatch({
      type: "GET_PRODUCTS",
      payload: products
    });
  };

  const handleFilterProducts = (n:any) => {
    dispatch({ type: n });
  };

  const handleFilterByCategory = (category:string) => {
    dispatch({ type: "FILTER_CATEGORY", payload: { category } });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ state, handleFilterProducts, handleFilterByCategory }}>
        {children}
    </ProductContext.Provider>
  );
};
