import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
  timeout: 10000, // in miliseconds
});

export default apiClient;
