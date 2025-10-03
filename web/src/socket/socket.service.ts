'use client'
import { COOKIES } from "@/lib/cookieName";
import { refreshToken } from "@/services/base-request.service";
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
                        auth: token ? { Authorization: `Bearer ${token}` } : undefined,
                }).on("connect_error", async (err: any) => {
                        console.error("❌ Connect error:", err.message);

                        if (err.message === "TokenExpiredError: jwt expired" || err.message === "invalid token") {
                                const newToken = await refreshToken();
                                if (newToken) {
                                        this.socket!.auth = { Authorization: `Bearer ${newToken}` };
                                        this.socket!.connect();
                                } else {
                                        console.error("❌ Refresh token fail, logout user");
                                }
                        }
                });
        }

        demo() {
                this.socket?.emit("hello", { name: "Hello", age: 10 })
        }


}

export default SocketService