import axios from "axios";

const API_restaurant = axios.create({
  baseURL: "http://127.0.0.1:8000/order/api/",
});

export const createOrder_API = async (formData) => {
  return await API_restaurant.post("/CreateOrders/", formData);
};