import { Product } from "../../types";

export type historyRedeemActions =
|{type: "LOAD_REDEEM_HISTORY"}
|{type: "GET_REDEEM_HISTORY_SUCCESS", payload: Product[]}
|{type: "REDEEM_HISTORY_ERROR"}
