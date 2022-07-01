/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import { Product } from "../types";

const Home = () => {
  return (
    <div>
      <Header />
       <ListProducts />
      <Footer/>
    </div>
  );
};

export default Home;
