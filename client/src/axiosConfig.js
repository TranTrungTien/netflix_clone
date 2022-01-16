import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage?.getItem("token")}`;

export default axiosInstance;
