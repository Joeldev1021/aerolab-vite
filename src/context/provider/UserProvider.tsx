/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useReducer } from "react";
import api from "../../api";
import { User, UserState } from "../../types";
import { ReducerUser } from "../reducer/ReducerUser";
import { UserContext } from "../UserContext";

interface ProviderProps {
    children:JSX.Element | JSX.Element[]
};

export const UserInitial:UserState = {
  user: {} as User
};

export const UserProvider = ({ children }:ProviderProps) => {
  const [state, dispatch] = useReducer(ReducerUser, UserInitial);

  const addCoins = () => {

  };

  useEffect(() => {
    api.loadUser()
      .then((user:User) => dispatch({ type: "LOAD_USER", payload: user }));
  }, []);

  return (
    <UserContext.Provider value={{ user: state.user, addCoins }}>
        {children}
    </UserContext.Provider>
  );
};
