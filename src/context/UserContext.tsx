import { createContext } from "react";
import { Product, User } from "../types";

export type UserContextType = {
    user: User,
    redeemHistory?: Product[]
    addCoins: (amount: number) => void
    addRedeemHistory:(product:Product) => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType);
