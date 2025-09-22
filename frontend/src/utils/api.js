import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Add JWT token automatically
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default API;
