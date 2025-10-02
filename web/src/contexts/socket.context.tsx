"use client";
import React, { createContext, useContext, PropsWithChildren, useState, useEffect } from "react";
import SocketService from "@/socket/socket.service";

interface SocketContextType {
        socketService: SocketService;
}

export const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketContextProvider = ({ children }: PropsWithChildren) => {
        const [socketService, setSocketService] = useState<SocketService | null>(null);
        useEffect(() => {
                setSocketService(SocketService.getInstance());
        }, []);
        if (socketService)
                return <SocketContext.Provider value={{ socketService }}>{children}</SocketContext.Provider>;
};

export const useSocketContext = (): SocketContextType => {
        const context = useContext(SocketContext);
        if (!context) {
                throw new Error("useSocketContext must be used within a AuthContextProvider");
        }
        return context;
};
