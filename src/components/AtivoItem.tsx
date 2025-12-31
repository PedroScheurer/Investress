import React from 'react'
import { useNavigate } from 'react-router'

import classes from "./Item.module.css"
import Title from './ui/Title'

import { formatBRL } from '../utils'

type Props = {
    ativo: {
        id: string,
        tipo: string,
        valor: number,
    },
    peso: number
}

const AtivoItem: React.FC<Props> = ({ ativo, peso }) => {
    const navigate = useNavigate()
    return (
        <div className={classes.item} onClick={()=>navigate(`${ativo.tipo}`)}>
            <div>
                <Title>{ativo.tipo}</Title>
                <span>{formatBRL(ativo.valor)}</span>
            </div>
            <div>
                %{(peso * 100).toFixed(2)}
            </div>
        </div>
    )
}

export default AtivoItem