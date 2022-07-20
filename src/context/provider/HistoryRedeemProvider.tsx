/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import api from "../../api";
import { HistoryRedeemState, Product } from "../../types";
import { HistoryRedeemContext } from "../HistoryRedeemContext";
import { historyRedeemHistoryReducer } from "../reducer/historyRedeemReducer";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const initialStateHistoryRedeem: HistoryRedeemState = {
  historyRedeems: [],
  isLoading: false,
  isError: false
};

export const HistoryRedeemProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(
    historyRedeemHistoryReducer,
    initialStateHistoryRedeem
  );

  const loadHistory = async () => {
    try {
      dispatch({ type: "LOAD_REDEEM_HISTORY" });
      const redeemHistorys = await api.getRedeemHistory();
      if (redeemHistorys.length > 0) {
        dispatch({
          type: "GET_REDEEM_HISTORY_SUCCESS",
          payload: redeemHistorys
        });
      } else throw new Error("Error get history ");
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
/*
const data = [
  {
category: "Smart Home"
cost: 150
createDate: "2022-07-09T19:58:58.013Z"
img:
hdUrl: "https://coding-challenge-api.aerolab.co/images/AmazonEcho-x2.png"
url: "https://coding-challenge-api.aerolab.co/images/AmazonEcho-x1.png"
[[Prototype]]: Object
name: "Amazon Echo"
productId: "5a0b3658734d1d08bf70850f"
_id: "62c80926ea5914002125c013"
  },
  {
    category: "Cameras"
cost: 2200
createDate: "2022-07-09T19:59:02.070Z"
img: {url: 'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x1.png', hdUrl: 'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x2.png'}
name: "Canon EOS 5D"
productId: "5a0b3600734d1d08bf7084e5"
_id: "62c80926ea5914002125c013"
  },
  {
    category: "PC Accessories"
cost: 50
createDate: "2022-07-09T20:02:08.253Z"
img: {url: 'https://coding-challenge-api.aerolab.co/images/RazerNaga-x1.png', hdUrl: 'https://coding-challenge-api.aerolab.co/images/RazerNaga-x2.png'}
name: "Razer Naga Chroma"
productId: "5a0b364f734d1d08bf708506"
_id: "62c80926ea5914002125c013"
  }

]
 */
