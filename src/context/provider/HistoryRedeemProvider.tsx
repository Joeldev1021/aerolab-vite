/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import api from "../../api";
import { HistoryRedeemState, Product } from "../../types";
import { HistoryRedeemContext } from "../HistoryRedeemContext";
import { historyRedeemHistoryReducer } from "../reducer/historyRedeemReducer";

interface ProviderProps {
    children:JSX.Element | JSX.Element[]
};

export const initialStateHistoryRedeem:HistoryRedeemState = {
  historyRedeems: [],
  isLoading: false,
  isError: false
};

export const HistoryRedeemProvider = ({ children }:ProviderProps) => {
  const [state, dispatch] = useReducer(historyRedeemHistoryReducer, initialStateHistoryRedeem);

  const loadHistory = async () => {
    try {
      dispatch({ type: "LOAD_REDEEM_HISTORY" });
      const redeemHistorys = await api.getRedeemHistory();
      if (redeemHistorys.length > 0) dispatch({ type: "GET_REDEEM_HISTORY_SUCCESS", payload: redeemHistorys });

      else throw new Error("Error get history ");
      console.log(redeemHistorys);
    } catch (error) {
      console.log(error);
      dispatch({ type: "REDEEM_HISTORY_ERROR" });
    }
  };

  return (
    <HistoryRedeemContext.Provider value={{ ...state, loadHistory }}>
        {children}
    </HistoryRedeemContext.Provider>
  );
};
