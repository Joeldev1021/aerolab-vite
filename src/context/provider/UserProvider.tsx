import { useEffect, useReducer } from "react";
import api from "../../api";
import { Product, User, UserState } from "../../types";
import { ReducerUser } from "../reducer/ReducerUser";
import { UserContext } from "../UserContext";

interface ProviderProps {
    children:JSX.Element | JSX.Element[]
};

export const UserInitial:UserState = {
  user: {} as User,
  loading: false
};

export const UserProvider = ({ children }:ProviderProps) => {
  const [state, dispatch] = useReducer(ReducerUser, UserInitial);

  /**
   * Load user from the API and dispatch the result to the reducer.
   */
  const loadUser = async () => {
    dispatch({ type: "LOAD_USER" });
    try {
      const user:User = await api.loadUser();
      if (user) dispatch({ type: "LOAD_USER_SUCCESS", payload: user });
    } catch (error) {
      dispatch({ type: "LOAD_USER_ERROR" });
    }
  };

  const addPoints = async (points:number) => {
    // const res = await api.postCoins(100);
    dispatch({ type: "LOAD_ADD_POINTS_SUCCESS", payload: points });
  };

  const addRedeemHistory = (product:Product) => {
    dispatch({ type: "LOAD_ADD_REDEEM_HISTORY_SUCCESS", payload: { product } });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user: state.user, addPoints, addRedeemHistory, loading: state.loading }}>
        {children}
    </UserContext.Provider>
  );
};
