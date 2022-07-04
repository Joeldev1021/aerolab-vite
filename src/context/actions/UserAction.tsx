/* eslint-disable no-unused-vars */
import { User } from "../../types";

export type UserAction =
|{type: "LOAD_USER", payload: User}
|{type: "REDEEM_PRODUCT"}
| {type: "HIGHEST_PRICE"}
