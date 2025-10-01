'use client'
import { COOKIES } from "@/lib/cookieName";
import { getCookie } from "@/utils/cookies";
import { io } from "socket.io-client";

class SocketService {
        private static instance: SocketService;


        constructor(
                private socket = io(process.env.NEXT_PUBLIC_API_URL, {
                        reconnectionDelayMax: 10000,
                        withCredentials: true,
                        auth: {
                                Authorization: `Bearer ${getCookie(COOKIES.ACCESSTOKEN)}`
                        },
                })) {
                this.connection();
        }
        public static getInstance(): SocketService {
                if (!SocketService.instance) {
                        SocketService.instance = new SocketService();
                }
                return SocketService.instance;
        }
        async connection() {
                console.log("url", process.env.NEXT_PUBLIC_API_URL);
                this.socket.on('hello', () => {
                        console.log('Connected to WebSocket server');
                });

        }
}

export default SocketService