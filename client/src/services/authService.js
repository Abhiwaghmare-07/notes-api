import api from "../api/axios";

export const loginUser = (userData) => {
  return api.post("/users/login", userData);
};

export const registerUser = (userData) => {
  return api.post("/users/register", userData);
};