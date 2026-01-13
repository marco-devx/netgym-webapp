import axios, {
	type AxiosInstance,
	type InternalAxiosRequestConfig,
	type AxiosError,
	AxiosHeaders,
} from "axios";
import { env } from "./env";

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: env.BASE_URL,
	headers: new AxiosHeaders({
		"Content-Type": "application/json",
	}),
});

axiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);
