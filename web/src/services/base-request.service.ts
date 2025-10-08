"use client";
import { COOKIES } from "@/lib/cookieName";
import { clearCookies, getCookie, setCookie } from "@/utils/cookies";
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { redirect } from "next/navigation";

let isRefreshing: boolean = false;
let failedQueue: Array<{
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
}> = [];


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TIMEOUT = 3000;
const baseRequest = axios.create({
    baseURL: BASE_URL + "/api",
    timeout: TIMEOUT, // Thời gian chờ (ms)
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

baseRequest.interceptors.request.use(
    async config => {
        const token = getCookie(COOKIES.ACCESSTOKEN);
        const requestUrl = config.url;
        if (requestUrl === '/refresh-token') {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        else {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error || "Có lỗi hệ thống vui lòng thử lại")
);
baseRequest.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        // Sử dụng kiểu dữ liệu chặt chẽ cho config của request gốc
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        //* trường hợp không phải lỗi 401
        if (error.response?.status !== 401 || originalRequest._retry) {
            return Promise.reject(error);
        }

        //* nếu refresh token bị lỗi
        if (originalRequest.url === "/v1/auth/refresh-token") {
            clearCookies();
            redirect("/login");
            return Promise.reject(error);
        }

        //* Đánh dấu request này sẽ được retry
        originalRequest._retry = true;

        //* BẮT ĐẦU CƠ CHẾ HÀNG ĐỢI
        if (!isRefreshing) {
            isRefreshing = true;

            // làm mới token (Chỉ một lần duy nhất)
            try {
                const token = await refreshToken();

                // 1. Thực thi lại request gốc với token mới
                originalRequest.headers.Authorization = `Bearer ${token}`;
                const result = baseRequest(originalRequest);

                // 2. Xử lý các request đang chờ trong hàng đợi
                processQueue(null, token);

                return result;

            } catch (refreshError) {
                // Nếu refresh thất bại, reject tất cả request đang chờ
                processQueue(refreshError as AxiosError, null);
                clearCookies();
                redirect("/login");
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        // Nếu isRefreshing = true, thêm request hiện tại vào hàng đợi chờ token mới
        return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
        }).then(token => {
            // Khi promise được resolve, retry request
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return baseRequest(originalRequest);
        }).catch(err => {
            // Nếu promise bị reject (do refresh token thất bại)
            return Promise.reject(err);
        });
    }
);

async function refreshToken(): Promise<string> {
    const response: AxiosResponse<any> = await baseRequest.post("/v1/auth/refresh-token");
    const { data } = response.data;

    const newAccessToken = data.accessToken;

    if (newAccessToken) {
        setCookie(COOKIES.ACCESSTOKEN, newAccessToken);
        // Cập nhật header mặc định cho các request mới sau này
        baseRequest.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
    }
    return newAccessToken;
}

// Hàm xử lý hàng đợi các request bị lỗi 401
const processQueue = (error: AxiosError | null, token: string | null = null): void => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
export default baseRequest;