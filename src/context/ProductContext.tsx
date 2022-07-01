import { createContext } from "react";
import { Product } from "../types";

export type ProductContextType = {
    state: {
        products: Product[],
        productsFilter: Product[],
    },
    handleFilterProducts: (n:string) =>void
    handleFilterByCategory: (category:string) =>void

}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);
