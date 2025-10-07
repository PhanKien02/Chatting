"use client";
import { COOKIES } from "@/lib/cookieName";
import { clearCookies, getCookie, setCookie } from "@/utils/cookies";
import axios from "axios";
import { redirect } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TIMEOUT = 3000;
const baseRequest = axios.create({
    baseURL: BASE_URL + "/api",
    timeout: TIMEOUT, // Thời gian chờ (ms)
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

baseRequest.interceptors.request.use(
    async config => {
        const token = getCookie(COOKIES.ACCESSTOKEN);
        if (token && config.headers) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error || "Có lỗi hệ thống vui lòng thử lại")
);
baseRequest.interceptors.response.use(
    res => res,
    async error => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401) {
            originalRequest._retry = true;
            const token = await refreshToken();
            baseRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            if (!token) {
                clearCookies();
                redirect("/auth/login");
            }
            return baseRequest(originalRequest);
        }
        return Promise.reject((error.response && error.response.data) || "Something went wrong");
    }
);

export async function refreshToken() {
    const refreshToken = getCookie(COOKIES.REFRESHTOKEN);
    const response = await baseRequest.post("/v1/auth/refresh-token", { token: refreshToken });
    const { data } = response.data;
    setCookie(COOKIES.ACCESSTOKEN, data.accessToken);
    setCookie(COOKIES.EXPIRES, data.expires);
    return data.accessToken ? data.accessToken : null;
}
export default baseRequest;
