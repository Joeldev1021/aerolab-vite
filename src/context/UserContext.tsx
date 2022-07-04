import { createContext } from "react";
import { User } from "../types";

export type UserContextType = {
    user: User,
    addCoins: (amount: number) => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType);
