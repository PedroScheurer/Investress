import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

type Props = {
    children: React.ReactNode,
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const { token } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/login')
            return;
        }
    }, [token])


    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute