import React from 'react'
import { useNavigate } from 'react-router'

import Title from './ui/Title'
import classes from "../styles/Item.module.css"

type Teste = {
    teste: {
        id: string,
        nome: string
        path: string,
        descricao: string
    }
}

const TesteItem: React.FC<Teste> = ({ teste }) => {
    const navigate = useNavigate()
    return (
        <div className={classes.item} onClick={() => navigate(`${teste.path}`)}>
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