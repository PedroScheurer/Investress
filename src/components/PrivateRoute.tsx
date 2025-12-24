import React from 'react'
import { useAuth } from '../hooks/useAuth'

type Props = {
    children: React.ReactNode,
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const { token } = useAuth()

    if (!token) {
        return null;
    }

    return (
        { children }
    )
}

export default PrivateRoute