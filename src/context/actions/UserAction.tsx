/* eslint-disable no-unused-vars */
import { Product, User } from "../../types";

export type UserAction =
|{type: "LOAD_USER"}
|{type: "LOAD_USER_SUCCESS", payload: User}
|{type: "LOAD_USER_ERROR"}
| {type: "LOAD_ADD_POINTS"}
|{type: "LOAD_ADD_POINTS_SUCCESS", payload: number}
| {type: "LOAD_ADD_POINTS_ERROR"}
|{type: "DECREMENT_COINS", payload: {cost:number}}
| {type: "ADD_REDEEM_HISTORY", payload: {product:Product}}
