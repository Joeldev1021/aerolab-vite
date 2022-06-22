/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import { Product } from "../types";

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    api.loadProducts()
      .then(res => setProducts(res));
  }, []);

  return (
    <div>
      <Header />
      {products && <ListProducts products={products} />}
      <Footer/>
    </div>
  );
};

export default Home;
