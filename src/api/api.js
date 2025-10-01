import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7064", // <- 改成你的 API URL
  headers: {
    "Content-Type": "application/json"
  }
});

// 列出水果清單
export const fetchFruits = () => api.get("/api/fruit");

// Cart
export const fetchCart = () => api.get("/api/cart");
export const addToCartApi = (payload) => api.post("/api/cart", payload);
export const removeCartItemApi = (id) => api.delete(`/api/cart/${id}`);
export const updateCartItemApi = (id, payload) => api.put(`/api/cart/${id}`, payload);

export default api;