/* eslint-disable no-unused-vars */
import { Product, User } from "../../types";

export type UserAction =
|{type: "LOAD_USER", payload: User}
|{type: "ADD_COINS", payload: number}
|{type: "DECREMENT_COINS", payload: {cost:number}}
| {type: "ADD_REDEEM_HISTORY", payload: {product:Product}}
