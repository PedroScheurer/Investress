import React from 'react'
import classes from "./AtivoItem.module.css"
import Title from './ui/Title'

type Ativo = {
    ativo: {
        id: string,
        tipo: string,
        valor: number,
    },
    peso: number
}

const AtivoItem: React.FC<Ativo> = ({ ativo, peso }) => {
    return (
        <div className={classes.ativo}>
            <div>
                <Title>{ativo.tipo}</Title>
                <span>R$ {ativo.valor}</span>
            </div>
            <div>
                %{(peso * 100).toFixed(2)}
            </div>
        </div>
    )
}

export default AtivoItem