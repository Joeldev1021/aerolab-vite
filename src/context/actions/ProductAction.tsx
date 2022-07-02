import { Product } from "../../types";

export type ProductAction =
|{type: "MOST_RECENT"}
| {type: "HIGHEST_PRICE"}
| {type: "LOWEST_PRICE"}
| {type: "GET_PRODUCTS", payload: Product[]}
| {type: "FILTER_CATEGORY", payload:{category: string}}
