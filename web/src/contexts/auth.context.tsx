'use client';
import React, { createContext, useContext, PropsWithChildren, useState, useEffect, useMemo } from 'react';

import { IUser } from '@/models/user.model';
import { getCookie } from '@/utils/cookies';
import { COOKIES } from '@/lib/cookieName';

interface AuthContextType {
    user?: IUser;
    setUserLogin: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [user, setUserLogin] = useState<IUser | undefined>(getCookie(COOKIES.USER));
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
