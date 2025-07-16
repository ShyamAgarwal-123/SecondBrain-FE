import axios from "axios";
import { type ResponseType } from "../types";
import { refreshAccessTokenService } from "../services";

export const axiosInstanceWithAuth = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  withCredentials: true,
});

axiosInstanceWithAuth.interceptors.response.use(
  (data) => {
    return data;
  },

  async (error) => {
    console.log(error);

    const mainData: ResponseType = error.response.data;
    if (
      (mainData.statusCode === 403 &&
        mainData.message === "Access Token Required") ||
      (mainData.statusCode === 401 &&
        mainData.message === "Invalid Access Token")
    ) {
      const refreshData: ResponseType = await refreshAccessTokenService();

      return Promise.reject(refreshData);
    }
    return Promise.reject(error);
  }
);
