import React, { useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";
import { Product } from "../types";

const HistoryRedeem = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
        <Header/>
        {user.redeemHistory.map((product:Product) => {
          return (
                <p key={product._id}>{product.name}</p>
          );
        })}
    </div>
  );
};

export default HistoryRedeem;
