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
  const getLoadUser = async () => {
    dispatch({ type: "LOAD_USER" });
    try {
      const user:User = await api.loadUser();
      if (user) dispatch({ type: "LOAD_USER_SUCCESS", payload: user });
    } catch (error) {
      dispatch({ type: "LOAD_USER_ERROR" });
    }
  };

  const addPoints = async (points:number) => {
    dispatch({ type: "LOAD_ADD_POINTS" });
    const res = await api.postCoins(points);
    // add points
    try {
      if (res["new Points"]) {
        dispatch({ type: "LOAD_ADD_POINTS_SUCCESS", payload: res["new Points"] });
      } else throw new Error("not add points");
    } catch (error) {
      // error add points
      dispatch({ type: "LOAD_ADD_POINTS_ERROR" });
    }
    return res;
  };

  /**
 * This function is called when a user clicks on a product to redeem it. It dispatches an action to the
 * reducer to update the state, and then it calls the api to add the product to the user's redeem
 * history.
 * @param {Product} product - Product
 * @returns The return value is the result of the dispatch function.
 */
  const addRedeemHistory = async (product:Product) => {
    dispatch({ type: "LOAD_ADD_REDEEM_HISTORY" });
    const redeemHst = await api.postRedeemHistory(product._id);
    try {
      dispatch({ type: "LOAD_ADD_REDEEM_HISTORY_SUCCESS", payload: { product } });
    } catch (error) {
      dispatch({ type: "LOAD_ADD_REDEEM_HISTORY_ERROR" });
    }
    return redeemHst;
  };

  useEffect(() => {
    getLoadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user: state.user, addPoints, addRedeemHistory, loading: state.loading }}>
        {children}
    </UserContext.Provider>
  );
};
