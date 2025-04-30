"use client";
import React, {
    createContext,
    useContext,
    PropsWithChildren,
    useState,
    use,
    useEffect
} from "react";
import { useCookies } from "next-client-cookies";
import { IUser } from "@/models/user.model";

interface AuthContextType {
    user?: IUser;
    setUserLogin: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const cookies = useCookies();
    const [user, setUserLogin] = useState<IUser | undefined>(undefined);
    const contextValue: AuthContextType = {
        user,
        setUserLogin
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(
            "useUserProfileContext must be used within a UserProfileProvider"
        );
    }
    return context;
};
