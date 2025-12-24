import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const useAuth = () => {
    const ctx = useContext(AuthContext);

    if(!ctx){
        throw new Error("AuthContext deve ser usado dentro do componente <AuthProvider/>")
    }

    return ctx;
}