/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import api from "../../api";
import { User } from "../../types";
import { UserContext } from "../UserContext";

interface ProviderProps {
    children:JSX.Element | JSX.Element[]
};

export const UserProvider = ({ children }:ProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  const addCoint = (amount: number) => {
    setUser({ ...user, points: user.points + amount });
  };

  useEffect(() => {
    api.loadUser()
      .then(user => setUser(user));
  }, []);

  return (
    <UserContext.Provider value={{ user, addCoint }}>
        {children}
    </UserContext.Provider>
  );
};
