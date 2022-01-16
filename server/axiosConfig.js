const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.MOVIES_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

module.exports = axiosInstance;
