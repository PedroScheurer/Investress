import React from 'react'
import { Form } from 'react-router'

import { Title, Button, Control, Loading } from './ui'
import { ButtonStyles } from './ui/Button'

import classes from "../styles/Form.module.css"
import { useHandlerInput } from '../hooks/useHandlerInput'


const TesteForm: React.FC = () => {
    const { formData, handleChange } = useHandlerInput({ scenario: "", investimentoType:"" })

    return (
        <>
            <div className={classes.form}>
                <Title>Novo teste</Title>
                <Form method='post' action='/testar'>
                    <Control id='scenario' label='Cenário'
                        type='text' placeholder='Escolha o cenário' name='scenario' onChange={handleChange} value={formData.scenario} />
                    <Control id='investimentoType' label='Tipo do investimento'
                        type='text' placeholder='Escolha o tipo do investimento' name='investimentoType' onChange={handleChange} value={formData.investimentoType} />

                    <Button className={ButtonStyles.solid}>Salvar</Button>
                </Form>
            </div>
        </>
    )
}

export default TesteForm
