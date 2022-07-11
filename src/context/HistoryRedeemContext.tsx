import { createContext } from "react";
import { Product } from "../types";

export type HistoryRedeemContextType = {
   historyRedeem: Product[]
   isLoading:boolean
   isError:boolean
}

export const HistoryRedeemContext = createContext<HistoryRedeemContextType>({} as HistoryRedeemContextType);
