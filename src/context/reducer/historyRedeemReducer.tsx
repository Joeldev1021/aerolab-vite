import { HistoryRedeemState } from "../../types";
import { historyRedeemActions } from "../actions/HistoryRedeemAction";

export const historyRedeemHistoryReducer = (state:HistoryRedeemState, action:historyRedeemActions) => {
  switch (action.type) {
    case "LOAD_REDEEM_HISTORY":
      return {
        ...state,
        isLoading: true
      };
    case "GET_REDEEM_HISTORY_SUCCESS":
      return {
        ...state,
        historyRedeems: [...action.payload],
        isLoading: false
      };
    case "REDEEM_HISTORY_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default :
      return state;
  }
};
