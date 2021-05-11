import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://zynky-dribbble-api.herokuapp.com/api/v1",
  headers: {
    "content-type": "application",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
