import React from 'react'
import classes from "./Item.module.css"
import Title from './ui/Title'
import { useNavigate } from 'react-router'

type Ativo = {
    ativo: {
        id: string,
        tipo: string,
        valor: number,
    },
    peso: number
}

const AtivoItem: React.FC<Ativo> = ({ ativo, peso }) => {
    const navigate = useNavigate()
    return (
        <div className={classes.item} onClick={()=>navigate(`${ativo.tipo}`)}>
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