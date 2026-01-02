import React from 'react'
import { Form } from 'react-router'

import { Modal, Button, Control, Title } from './ui'
import { ButtonStyles } from './ui/Button'
import classes from "./Form.module.css"

import { useHandlerInput } from '../hooks/useHandlerInput'
import { useModal } from '../hooks/useModal'

const initialFormData = {
    nome: "",
    tipo: "",
    valorAtual: "",
    valorInvestido: ""
};


const NovoInvestimento = () => {
    const { formData, setFormData, handleChange } = useHandlerInput(initialFormData)
    const { close } = useModal()

    const handleSubmit = (e: React.FormEvent) => {
        if (formData.nome === null || formData.tipo === null
            || formData.valorAtual === null || formData.valorInvestido === null
        ) {
            e.preventDefault()
        }
        close()
        setFormData(initialFormData)
    }

    return (
        <Modal id='modalNovoInvestimento'>
            <>
                <Title>Novo Investimento</Title>
                <Form method='post' action='/carteira' onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.grid}>
                        <Control id='nome' label='Nome' className={classes.destaque}
                            type='text' placeholder='Digite o nome' name='nome' onChange={handleChange} value={formData.nome} />
                        <Control id='tipo' label='Tipo' className={classes.destaque}
                            type='text' placeholder='Digite o tipo' name='tipo' onChange={handleChange} value={formData.tipo} />
                        <Control id='valor' label='Valor Investido' className={classes.normal}
                            type='text' placeholder='Digite o valor investido' name='valorInvestido' onChange={handleChange} value={formData.valorInvestido} />
                        <Control id='valor' label='Valor Atual' className={classes.normal}
                            type='text' placeholder='Digite o valor atual' name='valorAtual' onChange={handleChange} value={formData.valorAtual} />

                    </div>
                    <div className='header end'>
                        <Button onClick={close} type='button' >Cancelar</Button>
                        <Button className={ButtonStyles.solid}>Confirmar</Button>
                    </div>
                </Form>
            </>
        </Modal>
    )
}

export default NovoInvestimento