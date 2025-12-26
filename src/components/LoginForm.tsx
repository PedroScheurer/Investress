import React, { useEffect } from 'react'
import { Form, Link, useNavigate } from 'react-router'

import { Title, Button, Control, Loading } from './ui'
import { ButtonStyles } from './ui/Button'
import classes from "./Form.module.css"
import { useAuth } from '../hooks/useAuth'
import { useHandlerInput } from '../hooks/useHandlerInput'

type LoginError = {
    message: string,
    success: false,
};

type LoginSuccess = {
    token: string,
    success: true,
};


type Props = {
    isSubmitting: boolean,
    data: LoginError | LoginSuccess,
}

const LoginForm: React.FC<Props> = ({ isSubmitting, data }) => {
    const { formData, handleChange } = useHandlerInput({ email: "", senha: "" })
    const navigate = useNavigate();
    const { login } = useAuth();
    const parsedData = typeof data === 'string' ? JSON.parse(data) : data;

    const isError = parsedData?.success === false;
    const errorMessage = parsedData?.message;

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
                        props={{ type: 'email', placeholder: 'Digite seu email', name: 'email', onChange: handleChange, value: formData.email }} />
                    <Control id='senha' label='Senha'
                        props={{ type: 'password', placeholder: 'Digite sua senha', name: 'senha', onChange: handleChange, value: formData.senha }} />
                    {parsedData && !parsedData.success && (
                        <p style={{ color: 'red' }}>{parsedData.message}</p>
                    )}
                    <Button className={ButtonStyles.solid}>Entrar</Button>
                </Form>
                <span>Não tem uma conta?<Link to="/register"> Criar Conta</Link></span>
            </div>
        </>
    )
}

export default LoginForm
