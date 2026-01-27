import { useEffect } from 'react'
import { Form, Link, useNavigate } from 'react-router'

import { Control, Button, Title, Loading } from './ui'
import { ButtonStyles } from './ui/Button'

import classes from "../styles/Form.module.css"
import { useHandlerInput } from '../hooks/useHandlerInput'
import { useAuth } from '../hooks/useAuth'
import { validarEmail, validarNome, validarSenha } from '../utils'
import type { LoginError, LoginSuccess } from "../types/loginResponse"

type Props = {
    isSubmitting: boolean,
    data: LoginSuccess | LoginError,
}

const RegisterForm: React.FC<Props> = ({ isSubmitting, data }) => {
    const { formData, didEdit, handleChange, handleBlur } = useHandlerInput({ nomeCompleto: "", email: "", senha: "", confirmarSenha: "" })
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        if (data && data.success) {
            login(data.token)
            navigate("/carteira")
        }
    }, [data, navigate])

    const isNomeInvalid = !validarNome(formData.nomeCompleto);
    const isEmailInvalid = !validarEmail(formData.email);
    const isConfirmSenhaInvalid = formData.senha !== formData.confirmarSenha;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (isNomeInvalid || isEmailInvalid || isConfirmSenhaInvalid ||
            !validarSenha(formData.senha)
        ) {
            e.preventDefault();
        }
    }

    return (
        <>
            {isSubmitting && <Loading />}
            <div className={classes.form}>
                <Title>Cadastrar-se</Title>
                <Form method='post' onSubmit={handleSubmit}>
                    <Control id='nome' label='Nome Completo'
                        type='text' placeholder='Digite seu nome completo'
                        name="nomeCompleto" onChange={handleChange} value={formData.nomeCompleto}
                        onBlur={handleBlur} />
                    {isNomeInvalid && didEdit.nomeCompleto &&
                        <p className='error'>Nome inválido.</p>}

                    <Control id='email' label='Email'
                        type='email' placeholder='Digite seu email'
                        name="email" onChange={handleChange} value={formData.email}
                        onBlur={handleBlur} />
                    {isEmailInvalid && didEdit.email &&
                        <p className='error'>Email inválido.</p>}

                    <Control id='senha' label='Senha'
                        type='password' placeholder='Digite sua senha'
                        name="senha" onChange={handleChange} value={formData.senha}
                        onBlur={handleBlur} />
                    <ul>
                        <li className={formData.senha.length >= 6 ? "success" : "error"}>Deve conter 6 ou mais caracteres.</li>
                        <li className={/[A-Z]/.test(formData.senha) ? "success" : "error"}>Deve conter uma letra maiúscula.</li>
                        <li className={/[a-z]/.test(formData.senha) ? "success" : "error"}>Deve conter uma letra minúscula.</li>
                    </ul>

                    <Control id='confirmarSenha' label='Confirmar Senha'
                        type='password' placeholder='Digite sua senha novamente'
                        name="confirmarSenha" onChange={handleChange} value={formData.confirmarSenha}
                        onBlur={handleBlur} />
                    {isConfirmSenhaInvalid && didEdit.confirmarSenha &&
                        <p className='error'>As senhas não coincidem.</p>}
                        
                    {data && !data.success && (
                        <p className='error'>{data.message}</p>
                    )}
                    <Button className={ButtonStyles.solid}>Cadastrar</Button>
                </Form>
                <span>Já tem uma conta?<Link to="/login"> Entrar</Link></span>
            </div>
        </>
    )
}

export default RegisterForm