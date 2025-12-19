import React from 'react'
import Modal from './ui/Modal'
import Title from './ui/Title'
import Control from './ui/Control'
import Button, { ButtonStyles } from './ui/Button'
import { useHandlerInput } from '../hooks/useHandlerInput'
import classes from "./Form.module.css"

import { useModal } from '../hooks/useModal'

const NovoInvestimento = () => {
    const { formData, handleChange } = useHandlerInput({ valor: '', nome: '', tipo: '' })
    const { close } = useModal()


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <Modal id='modalNovoInvestimento'>
            <>
                <Title>
                    Novo Investimento
                </Title>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.grid}>
                        <Control id='nome' label='Nome' className={classes.destaque}
                            props={{ type: 'text', placeholder: 'Digite o nome', name: 'nome', onChange: handleChange, value: formData.nome }} />
                        <Control id='tipo' label='Tipo' className={classes.largo}
                            props={{ type: 'text', placeholder: 'Digite o tipo', name: 'tipo', onChange: handleChange, value: formData.tipo }} />
                        <Control id='valor' label='Valor'
                            props={{ type: 'text', placeholder: 'Digite o valor', name: 'valor', onChange: handleChange, value: formData.valor }} />

                    </div>
                    <div className='header end'>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            close();
                        }} type='button' >Cancelar</Button>
                        <Button className={ButtonStyles.solid}>Confirmar</Button>
                    </div>
                </form>
            </>
        </Modal>
    )
}

export default NovoInvestimento