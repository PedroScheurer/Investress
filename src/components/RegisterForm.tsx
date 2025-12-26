import { Form, Link, useActionData, useNavigate, useNavigation } from 'react-router'

import { Control, Button, Title, Loading } from './ui'
import { ButtonStyles } from './ui/Button'
import classes from "./Form.module.css"

import { useHandlerInput } from '../hooks/useHandlerInput'
import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

type Props = {
    data: string,
    isSubmitting : boolean,
}

const RegisterForm : React.FC<Props> = ({data, isSubmitting}) => {
    const { formData, handleChange } = useHandlerInput({ nomeCompleto: "", email: "", senha: "", confirmarSenha: "" })
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        if (data) {
            login(data)
            navigate("/carteira")
        }
    }, [data, navigate])

    return (
        <>
            {isSubmitting && <Loading />}
            <div className={classes.form}>
                <Title>Cadastrar-se</Title>
                <Form method='post'>
                    <Control id='nome' label='Nome Completo'
                        props={{
                            type: 'text', placeholder: 'Digite seu nome completo',
                            name: "nomeCompleto", onChange: handleChange, value: formData.nomeCompleto
                        }} />
                    <Control id='email' label='Email'
                        props={{
                            type: 'email', placeholder: 'Digite seu email',
                            name: "email", onChange: handleChange, value: formData.email
                        }} />
                    <Control id='senha' label='Senha'
                        props={{
                            type: 'password', placeholder: 'Digite sua senha',
                            name: "senha", onChange: handleChange, value: formData.senha
                        }} />
                    <Control id='confirmarSenha' label='Confirmar Senha'
                        props={{
                            type: 'password', placeholder: 'Digite sua senha novamente',
                            name: "confirmarSenha", onChange: handleChange, value: formData.confirmarSenha
                        }} />
                    <Button className={ButtonStyles.solid}>Cadastrar</Button>
                </Form>
                <span>Já tem uma conta?<Link to="/login"> Entrar</Link></span>
            </div>
        </>
    )
}

export default RegisterForm