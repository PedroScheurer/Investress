import { createContext } from "react";

type AuthContextType = {
    token: string | null,
    login: (newToken: string) => void,
    logout: () => void,
}

export const AuthContext = createContext<AuthContextType | null>(null);