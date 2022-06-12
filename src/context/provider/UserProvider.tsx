/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
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
    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: import.meta.env.VITE_TOKEN
      }
    })
      .then(res => res.json())
      .then(res => setUser(res));
  }, []);

  return (
    <UserContext.Provider value={{ user, addCoint }}>
        {children}
    </UserContext.Provider>
  );
};
