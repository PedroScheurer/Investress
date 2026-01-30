import React from 'react'
import { Form } from 'react-router'

import { Title, Button } from './ui'
import { ButtonStyles } from './ui/Button'

import classes from "../styles/Form.module.css"

type Props = {
    metric: string
}

const TesteForm: React.FC<Props> = ({ metric }) => {
    let metricPost = "DRAWDOWN"
    if (metric === "drawdown_maximo") {
        metricPost = "DRAWDOWN"
    } else if (metric === "value_at_risk") {
        metricPost = "VAR";
    }

    return (
        <>
            <div className={classes.form}>
                <Title>Novo teste</Title>
                <Form method='post' action={`/testes/${metricPost}`}>
                    <label htmlFor="scenario">Cenário: </label>
                    <select id='scenario'
                        name='scenario'  >
                        <option value="HISTORICAL">Por Histórico</option>
                        <option value="SHOCK">Por Choque</option>
                    </select><br/>
                    <label htmlFor="typeInvestimento">Tipo do Investimento: </label>
                    <select id='typeInvestimento'
                        name='typeInvestimento' >
                        <option value="ACAO">Ação</option>
                        <option value="FUNDO_IMOBILIARIO">Fundo Imobiliário</option>
                        <option value="CDB">CDB</option>
                        <option value="TESOURO_DIRETO">Tesouro Direto</option>
                        <option value="LCI">LCI</option>
                        <option value="LCA">LCA</option>
                        <option value="DEBENTURE">Debenture</option>
                        <option value="ETF">ETF</option>
                        <option value="CRIPTOMOEDA">Criptomoeda</option>
                    </select><br/>

                    <Button className={ButtonStyles.solid}>Salvar</Button>
                </Form>
            </div>
        </>
    )
}

export default TesteForm
