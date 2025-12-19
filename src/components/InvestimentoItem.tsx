import React from 'react'
import classes from "./Item.module.css"
import Title from './ui/Title'
import moreButton from "../assets/more.png"

type Props = {
    investimento: {
        id: string,
        nome: string,
        valor: number,
    }
}

const InvestimentoItem : React.FC<Props> = ({investimento}) => {
    return (
        <div className={classes.item}>
            <div>
                <Title>{investimento.nome}</Title>
                <span>R$ {investimento.valor}</span>
            </div>
            <button className={`end ${classes.details}`}>
                <img src={moreButton} alt="Botão de Detalhes" title='Detalhes' />
            </button>
        </div>
    )
}

export default InvestimentoItem