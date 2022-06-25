import { createContext } from "react";
import { Product } from "../types";

export type ProductContextType = {
    products: Product[]
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);
