'use client'
import { COOKIES } from '@/lib/cookieName';
import { clearCookies, getCookie, setCookie } from '@/utils/cookies';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TIMEOUT = 3000;
const baseRequest = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT, // Thời gian chờ (ms)
    headers: {
        'Content-Type': 'application/json',
    },
});


baseRequest.interceptors.request.use(
    async (config) => {
        const exp = getCookie(COOKIES.EXPIRES);
        if (exp && +exp < Date.now()) {
            const refreshToken = getCookie(COOKIES.REFRESHTOKEN);
            const response = await axios.post(`${BASE_URL}/user/refresh-token`, { refreshToken });
            const { data } = response.data;
            config.headers['Authorization'] = `Bearer ${data.accessToken}`;
            setCookie(COOKIES.ACCESSTOKEN, data.accessToken,);
            setCookie(COOKIES.REFRESHTOKEN, data.refreshToken);
            setCookie(COOKIES.EXPIRES, data.expires);
            return config;
        }
        else {
            const token = getCookie(COOKIES.ACCESSTOKEN);
            if (token && config.headers) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);
baseRequest.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response && error.response.status === 401) {
            const router = useRouter();
            clearCookies();
            router.push('/login');
        }
        return Promise.reject(
            (error.response && error.response.data) || 'Something went wrong'
        );
    }
);

async function refreshToken() {
    const result = await baseRequest.get('/user/refresh-token');
    return result.data
}
export default baseRequest;
