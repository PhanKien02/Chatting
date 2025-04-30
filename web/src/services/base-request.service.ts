'use client'
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TIMEOUT = 3000;
const token = getCookie('asscesToken');
const baseRequest = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT, // Thời gian chờ (ms)
    headers: {
        'Content-Type': 'application/json',
    },
});

baseRequest.interceptors.request.use(async config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});


baseRequest.interceptors.request.use(
    (config) => {
        const token = getCookie('accessToken');
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
baseRequest.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response && error.response.status === 401) {
            if (typeof window !== 'undefined') {
                const router = useRouter();
                router.push('/login');
            }
        }
        return Promise.reject(
            (error.response && error.response.data) || 'Something went wrong'
        );
    }
);

export default baseRequest;
