const api = {
  loadProducts: async () => {
    const res = await fetch("https://coding-challenge-api.aerolab.co/products?limit=16&offset=0", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: import.meta.env.VITE_TOKEN
      }
    });
    return res.json();
  },
  loadUser: async () => {
    const user = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: import.meta.env.VITE_TOKEN
      }
    });
    return user.json();
  }
};

export default api;
