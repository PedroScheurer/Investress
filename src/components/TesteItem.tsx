import React from 'react'
import classes from "./Item.module.css"
import Title from './ui/Title'
import { useNavigate } from 'react-router'

type Teste = {
    teste: {
        id: string,
        nome: string,
        descricao: string
    }
}

const TesteItem: React.FC<Teste> = ({ teste }) => {
    const navigate = useNavigate()
    return (
        <div className={classes.item} onClick={()=>navigate(`${teste.nome}`)}>
            <Title>{teste.nome}</Title>
            <div>
                <span>
                    {teste.descricao}
                </span>
            </div>
        </div>
    )
}

export default TesteItem