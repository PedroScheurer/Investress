import React from 'react'
import classes from "./Item.module.css"
import Title from './ui/Title'

type Teste = {
    teste: {
        id: string,
        nome: string,
        descricao: string
    }
}

const TesteItem: React.FC<Teste> = ({ teste }) => {
    return (
        <div className={classes.item}>
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