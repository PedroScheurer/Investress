import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { useAuth } from '../hooks/useAuth'

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