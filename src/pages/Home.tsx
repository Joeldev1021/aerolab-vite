import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import { Product } from "../types";

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/products?limit=16&offset=0", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: import.meta.env.VITE_TOKEN
      }
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
