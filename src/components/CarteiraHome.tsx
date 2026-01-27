import { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router'

import Container from './Container'
import Button, { ButtonStyles } from './ui/Button'
import Itens from './Itens'
import AtivoItem from './AtivoItem'

import { useModal } from '../hooks/useModal'
import { type AtivosData } from '../types/ativosData'

const CarteiraHome = () => {
    const [ativos, setAtivos] = useState<Array<AtivosData>>([])

    const { open } = useModal()
    const { data } = useRouteLoaderData("carteira");

    useEffect(()=>{
        setAtivos(data)
    },[data])

    const totalValorInvestido = data.reduce((total: number, ativo: AtivosData) => {
        return total + ativo.valorTotalAtual
    }, 0)

    return (
        <Container title='Carteira de Investimentos'>
            <div className='header'>
                <span>Total Investido: R${totalValorInvestido}</span>
                <Button className={`end ${ButtonStyles.solid}`} onClick={() => open('modalNovoInvestimento')} >Novo investimento</Button>
            </div>
            <Itens>
                {ativos.map((ativo: AtivosData) => (
                    <AtivoItem key={ativo.type} ativo={ativo} peso={ativo.valorTotalAtual / totalValorInvestido} />
                ))}
            </Itens>
        </Container>
    )
}

export default CarteiraHome