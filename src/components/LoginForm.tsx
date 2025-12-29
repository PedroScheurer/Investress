import React, { useEffect } from 'react'
import { Form, Link, useNavigate } from 'react-router'

import { Title, Button, Control, Loading } from './ui'
import { ButtonStyles } from './ui/Button'
import classes from "./Form.module.css"
import { useAuth } from '../hooks/useAuth'
import { useHandlerInput } from '../hooks/useHandlerInput'
import type { LoginError, LoginSuccess } from "../types/loginResponse"

type Props = {
    isSubmitting: boolean,
    data: LoginError | LoginSuccess,
}

const LoginForm: React.FC<Props> = ({ isSubmitting, data }) => {
    const { formData, handleChange } = useHandlerInput({ email: "", senha: "" })
    const navigate = useNavigate();
    const { login } = useAuth();
    
    useEffect(() => {
        if (data && data.success) {
            login(data.token)
            navigate('/carteira')
        }
    }, [data, navigate])

    return (
        <>
            {isSubmitting && <Loading />}
            <div className={classes.form}>
                <Title>Login</Title>
                <Form method='post'>
                    <Control id='email' label='Email'
                        type='email' placeholder='Digite seu email' name='email' onChange={handleChange} value={formData.email} />

                    <Control id='senha' label='Senha'
                        type='password' placeholder='Digite sua senha' name='senha' onChange={handleChange} value={formData.senha} />

                    {data && !data.success && (
                        <p className='error'>{data.message}</p>
                    )}

                    <Button className={ButtonStyles.solid}>Entrar</Button>
                </Form>
                <span>Não tem uma conta?<Link to="/register"> Criar Conta</Link></span>
            </div>
        </>
    )
}

export default LoginForm
