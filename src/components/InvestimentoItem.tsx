import React, { useState } from 'react'
import classes from "./Item.module.css"
import Title from './ui/Title'
import DetailsOptions from './ui/DetailsOptions'

import { formatBRL } from '../utils'
import moreButton from "../assets/more.png"
import { useModal } from '../hooks/useModal'
import type { Investimento } from '../types/investimentosData'
import { Form } from 'react-router'

type Props = {
    investimento: Investimento,
}

const InvestimentoItem: React.FC<Props> = ({ investimento }) => {
    const [open, setOpen] = useState<boolean>(false)
    const { open: openModal } = useModal()

    return (
        <div className={classes.item}>
            <div>
                <Title>{investimento.nome}</Title>
                <span><b>Valor investido:</b> {formatBRL(investimento.valorInvestido)}</span><br />
                <span><b>Valor atual:</b> {formatBRL(investimento.valorAtual)}</span><br />
                <span><b>Retorno do investimento:</b> {formatBRL(investimento.retornoInvestimento)}</span>
            </div>
            <div className='header end'>
                {open &&
                    <DetailsOptions>
                        <li onClick={() => openModal("modalNovoInvestimento")}>
                            Editar
                        </li>
                        <Form method='delete' action={`/carteira/${investimento.type}/${investimento.id}/deletar`}>
                            <li>
                                <button>
                                    Excluir
                                </button>
                            </li>
                        </Form>

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