/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import api from "../../api";
import { Product } from "../../types";
import { ProductContext } from "../ProductContext";

interface ProviderProps {
    children:JSX.Element | JSX.Element[]
};

export const ProductProvider = ({ children }:ProviderProps) => {
  const [products, setProducts] = useState<Product[]| []>([]);

  useEffect(() => {
    api.loadProducts()
      .then(products => setProducts(products));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>
  );
};
