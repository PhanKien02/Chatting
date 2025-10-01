"use client";
import React, { createContext, useContext, PropsWithChildren, useState } from "react";
import SocketService from "@/socket/socket.service";

interface SocketContextType {
        socketService: SocketService;
}

export const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketContextProvider = ({ children }: PropsWithChildren) => {
        const socketService = SocketService.getInstance();
        const contextValue: SocketContextType = {
                socketService
        };
        return <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>;
};

export const useSocketContext = (): SocketContextType => {
        const context = useContext(SocketContext);
        if (!context) {
                throw new Error("useSocketContext must be used within a AuthContextProvider");
        }
        return context;
};
