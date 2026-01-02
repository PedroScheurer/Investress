import React from 'react'
import { useNavigate } from 'react-router'

import classes from "./Item.module.css"
import Title from './ui/Title'

import { formatBRL } from '../utils'
import { type AtivosData } from '../types/ativosData'

type Props = {
    ativo: AtivosData,
    peso: number
}

const AtivoItem: React.FC<Props> = ({ ativo, peso }) => {
    const navigate = useNavigate()
    
    return (
        <div className={classes.item} onClick={() => navigate(`${ativo.type.toLowerCase()}`)}>
            <div>
                <Title>{ativo.type}</Title>
                <span><b>Valor investido:</b> {formatBRL(ativo.valorTotalInvestido)}</span><br />
                <span><b>Valor atual:</b> {formatBRL(ativo.valorTotalAtual)}</span><br />
                <span><b>Retorno dos investimentos:</b> 
                <span className={ativo.retorno > 0 ? classes.positivo : classes.negativo}></span> {formatBRL(ativo.retorno)}
                </span>
            </div>
            <div>
                %{(peso * 100).toFixed(2)}
            </div>
        </div>
    )
}

export default AtivoItem