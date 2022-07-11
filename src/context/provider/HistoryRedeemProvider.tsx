/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import api from "../../api";
import { HistoryRedeemState } from "../../types";
import { HistoryRedeemContext } from "../HistoryRedeemContext";
import { historyRedeemHistoryReducer } from "../reducer/historyRedeemReducer";

interface ProviderProps {
    children:JSX.Element | JSX.Element[]
};

export const initialStateHistoryRedeem:HistoryRedeemState = {
  historyRedeem: [],
  isLoading: false,
  isError: false
};

export const HistoryRedeemProvider = ({ children }:ProviderProps) => {
  const [state, dispatch] = useReducer(historyRedeemHistoryReducer, initialStateHistoryRedeem);

  const loadHistory = () => {

  };

  return (
    <HistoryRedeemContext.Provider value={{ ...state }}>
        {children}
    </HistoryRedeemContext.Provider>
  );
};
