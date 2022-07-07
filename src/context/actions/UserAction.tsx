/* eslint-disable no-unused-vars */
import { Product, User } from "../../types";

export type UserAction =
|{type: "LOAD_USER"}
|{type: "LOAD_USER_SUCCESS", payload: User}
|{type: "LOAD_USER_ERROR"}
/// action points
|{type: "LOAD_ADD_POINTS"}
|{type: "LOAD_ADD_POINTS_SUCCESS", payload: number}
|{type: "LOAD_ADD_POINTS_ERROR"}
// redeem history
|{type: "LOAD_ADD_REDEEM_HISTORY"}
| {type: "LOAD_ADD_REDEEM_HISTORY_SUCCESS", payload: {product:Product}}
| {type: "LOAD_ADD_REDEEM_HISTORY_ERROR"}
