const HEADER = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
};

const URL_API = "https://coding-challenge-api.aerolab.co";

const api = {
  loadProducts: async () => {
    const res = await fetch(URL_API, {
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
    }
    );
    return coins.json();
  }

  /* postRedeemHistory: async () => {
    const redeemHistory = await fetch();
  } */
};

export default api;
