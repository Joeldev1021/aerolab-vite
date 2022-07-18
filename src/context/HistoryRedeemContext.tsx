import { createContext } from "react";
import { Product } from "../types";

export type HistoryRedeemContextType = {
   historyRedeems: Product[]
   isLoading:boolean
   isError:boolean
   loadHistory: () => void
}

export const HistoryRedeemContext = createContext<HistoryRedeemContextType>({} as HistoryRedeemContextType);
