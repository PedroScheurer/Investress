import React, { useState } from 'react'
import classes from "./Item.module.css"
import Title from './ui/Title'
import { formatBRL } from '../utils'
import moreButton from "../assets/more.png"
import DetailsOptions from './ui/DetailsOptions'
import { useModal } from '../hooks/useModal'

type Props = {
    investimento: {
        id: string,
        nome: string,
        valor: number,
    }
}

const InvestimentoItem: React.FC<Props> = ({ investimento }) => {
    const [open, setOpen] = useState<boolean>(false)
    const { open: openModal } = useModal()

    return (
        <div className={classes.item}>
            <div>
                <Title>{investimento.nome}</Title>
                <span>{formatBRL(investimento.valor)}</span>
            </div>
            <div className='header end'>
                {open &&
                    <DetailsOptions>
                        <li onClick={()=>openModal("modalNovoInvestimento") }>
                            Editar
                        </li>
                        <li>
                            Excluir
                        </li>
                    </DetailsOptions>
                }
                <button className={`end ${classes.details}`} onClick={() => setOpen(!open)}>
                    <img src={moreButton} alt="Botão de Detalhes" title='Detalhes' />
                </button>
            </div>

        </div>
    )
}

export default InvestimentoItem