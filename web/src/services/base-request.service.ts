import { ErrorResponse } from "@/models/response";
import axios, { AxiosError, AxiosResponse } from "axios";
import { getCookie } from 'cookies-next';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TIMEOUT = 3000;
const token = getCookie("asscesToken")
const baseRequest = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT, // Thời gian chờ (ms)
    headers: {
        'Content-Type': 'application/json',
    },
});

baseRequest.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

baseRequest.interceptors.response.use(async (response: AxiosResponse): Promise<AxiosResponse<unknown>> => {
    return Promise.resolve(response.data)
}, async (error: AxiosError) => {
    const data = error.response?.data as ErrorResponse
    return Promise.reject(data)
})

export default baseRequest;