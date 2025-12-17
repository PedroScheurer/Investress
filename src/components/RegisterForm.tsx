import { Link } from 'react-router'
import Control from './ui/Control'
import Button from './ui/Button'
import Title from './ui/Title'
import classes from "./Form.module.css"
import { useHandlerInput } from '../hooks/useHandlerInput'


const RegisterForm = () => {
    const { formData, handleChange } = useHandlerInput({ nomeCompleto: "", email: "", senha: "", confirmarSenha: "" })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className={classes.form}>
            <Title>Cadastrar-se</Title>
            <form onSubmit={handleSubmit}>
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
                <Button>Cadastrar</Button>
            </form>
            <span>Já tem uma conta?<Link to="/login"> Entrar</Link></span>
        </div>
    )
}

export default RegisterForm