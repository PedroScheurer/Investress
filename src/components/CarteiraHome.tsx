import Container from './Container'
import Button, { ButtonStyles } from './ui/Button'
import Itens from './Itens'
import AtivoItem from './AtivoItem'
import { useModal } from '../hooks/useModal'

const mockedAtivos = [
    { id: '0', tipo: 'Ações', valor: 10000 },
    { id: '1', tipo: 'Fiis', valor: 2000 },
    { id: '2', tipo: 'Pós-Fixada', valor: 1000 },
    { id: '3', tipo: 'Pré-Fixada', valor: 1200 },
    { id: '4', tipo: 'Ouro', valor: 5000 },
]

const totalValorInvestido = mockedAtivos.reduce((total, ativo) => {
    return total + ativo.valor
}, 0)

const CarteiraHome = () => {
    const { open } = useModal()
    return (
        <Container title='Carteira de Investimentos'>
            <div className='header'>
                <span>Total Investido: R${totalValorInvestido}</span>
                <Button className={`end ${ButtonStyles.solid}`} onClick={() => open('modalNovoInvestimento')} >Novo investimento</Button>
            </div>
            <Itens>
                {mockedAtivos.map(ativo => (
                    <AtivoItem key={ativo.id} ativo={ativo} peso={ativo.valor / totalValorInvestido} />
                ))}
            </Itens>
        </Container>
    )
}

export default CarteiraHome