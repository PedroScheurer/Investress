import React, { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

type Props = {
    children: React.ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [token, setToken] = useState<string | null>(() => sessionStorage.getItem('token'))

    useEffect(() => {
        if (token) {
            return sessionStorage.setItem('token', token)
        }
        return sessionStorage.removeItem('token')
    }, [token])

    const login = (newToken: string) => {
        setToken(newToken)
    }

    const logout = () => {
        setToken(null)
    }

    const ctxValue = {
        token,
        login,
        logout,
    }
    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider