import axios from "axios";

export function configAxios() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers["Authorization"] = token ? `Bear ${token}` : null;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
}
