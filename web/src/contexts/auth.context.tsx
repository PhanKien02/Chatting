'use client';
import React, { createContext, useContext, PropsWithChildren, useState } from 'react';

import { IUser } from '@/models/user.model';

interface AuthContextType {
    user?: IUser;
    setUserLogin: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [user, setUserLogin] = useState<IUser | undefined>(undefined);
    const contextValue: AuthContextType = {
        user,
        setUserLogin,
    };
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within a AuthContextProvider');
    }
    return context;
};
