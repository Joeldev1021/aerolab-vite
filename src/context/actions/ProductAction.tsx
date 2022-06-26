import { Product } from "../../types";

export type ProductAction =
|{type: "MOST_RECENT", payload: Product[]}
| {type: "HIGHEST_PRICES", payload: Product[]}
| {type: "LOWEST_PRICES", payload: Product[]}
| {type: "GET_PRODUCTS", payload: Product[]}
