"use client"

import Sidebar from "@/components/Sidebar";
import { SocketContextProvider } from "@/contexts/socket.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "@/contexts/auth.context";
import { useMemo } from "react";
export default function ClientLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        const queryClient = useMemo(() => new QueryClient(), []);
        return (
                <QueryClientProvider client={queryClient}>
                        <AuthContextProvider>
                                <SocketContextProvider>
                                        <div className='w-full max-w-[1400px] absolute top-0 bottom-0 m-2 bg-transparent flex rounded-3xl shadow-xl overflow-hidden'>
                                                <Sidebar />
                                                <div className='flex flex-col flex-1 bg-white/80'>
                                                        <div className='flex flex-1 justify-between'>
                                                                <div className="flex flex-1 justify-between">
                                                                        {children}
                                                                </div>

                                                        </div>
                                                </div>
                                        </div>
                                </SocketContextProvider>
                        </AuthContextProvider>
                </QueryClientProvider>

        );
}