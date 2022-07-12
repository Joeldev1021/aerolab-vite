
const HEADER = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
};

const URL_API = "https://coding-challenge-api.aerolab.co";

const api = {
  loadProducts: async () => {
    const res = await fetch(`${URL_API}/products`, {
      method: "GET",
      headers: HEADER
    });
    return res.json();
  },
  loadUser: async () => {
    const user = await fetch(`${URL_API}/user/me`, {
      method: "GET",
      headers: HEADER
    });
    return user.json();
  },

  postCoins: async (amount: number) => {
    const coins = await fetch(`${URL_API}/user/points`, {
      method: "POST",
      headers: HEADER,
      body: JSON.stringify({ amount })
    })
      .then(res => res.json())
      .catch(err => err.json());
    return coins;
  },
  postRedeemHistory: async (productId:string) => {
    const newProduct = await fetch(`${URL_API}/redeem`, {
      method: "POST",
      headers: HEADER,
      body: JSON.stringify({ productId })
    })
      .then(res => res.json())
      .catch(err => err.json());
    return newProduct;
  }

  /* postRedeemHistory: async () => {
    const redeemHistory = await fetch();
  } */
};

export default api;
