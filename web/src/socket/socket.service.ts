'use client'
import { COOKIES } from "@/lib/cookieName";
import { getCookie } from "@/utils/cookies";
import { io, Socket } from "socket.io-client";

class SocketService {
        private static instance: SocketService;
        private socket: Socket | null = null;
        constructor() {
                this.connect()
        }
        public static getInstance(): SocketService {
                if (!SocketService.instance) {
                        SocketService.instance = new SocketService();
                }
                return SocketService.instance;
        }
        private connect() {
                const token = getCookie(COOKIES.ACCESSTOKEN);
                this.socket = io(process.env.NEXT_PUBLIC_API_URL!, {
                        reconnectionDelayMax: 10000,
                        withCredentials: true,
                        transports: ["polling", "websocket"],
                        timeout: 5000,
                        reconnection: true,
                        autoConnect: true,
                        auth: token ? { Authorization: `Bearer ${token}` } : undefined,
                })
        }

        demo() {
                try {
                        console.log("aaaaaa");

                        this.socket?.emit("hello", { name: "Hello", age: 10 })
                } catch (error) {

                }
        }


}

export default SocketService