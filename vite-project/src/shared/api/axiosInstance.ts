import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://94.139.254.148",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

export default axiosInstance;
