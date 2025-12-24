import { Link, useNavigate } from 'react-router'

import { useHandlerInput } from '../hooks/useHandlerInput'
import Control from './ui/Control'
import Button, { ButtonStyles } from './ui/Button'
import Title from './ui/Title'
import classes from "./Form.module.css"
import { api } from '../utils/axiosConfig'

type LoginFormType = {
    email: string,
    password: string,
}

const LoginForm = () => {
    const { formData, handleChange } = useHandlerInput({ email: "", senha: "" })
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/carteira')
    }

    return (
        <div className={classes.form}>
            <Title>Login</Title>
            <form onSubmit={handleSubmit}>
                <Control id='email' label='Email'
                    props={{ type: 'email', placeholder: 'Digite seu email', name: 'email', onChange: handleChange, value: formData.email }} />
                <Control id='senha' label='Senha'
                    props={{ type: 'password', placeholder: 'Digite sua senha', name: 'senha', onChange: handleChange, value: formData.senha }} />
                <Button className={ButtonStyles.solid}>Entrar</Button>
            </form>
            <span>Não tem uma conta?<Link to="/register"> Criar Conta</Link></span>
        </div>

    )
}

export default LoginForm

const action = async (formData: LoginFormType) => {
    
    const res = await api.post("/auth/login", formData, {headers:{
        "Content-Type" : "application/json"
    }})

    if(!res.data){
        throw new Error("Login invalido")
    }

    sessionStorage.setItem
    console.log(res.data);
    return res.data;
}