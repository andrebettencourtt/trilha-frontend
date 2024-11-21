import axios from "axios";
import { toast } from "react-toastify";

// Cria a instância de axios
const axiosInstance = axios.create({
  baseURL: "https://trilha-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

let isNotificationShown = false;

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 403 &&
      !isNotificationShown
    ) {
      isNotificationShown = true;
      window.dispatchEvent(new CustomEvent("unauthorized"));
      toast.error("Acesso negado. Redirecionando para login...");

      // Reseta a notificação após 5 segundos
      setTimeout(() => {
        isNotificationShown = false;
      }, 5000);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
