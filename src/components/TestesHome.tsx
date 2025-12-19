import React from 'react'
import { Itens, TesteItem, Container } from '../components'

const mockedTestes = [
    { id: '0', nome: 'Drawdown Máximo', descricao: 'A maior perda acumulada desde um topo até o fundo antes da recuperação.' },
    { id: '1', nome: 'Value at Risk (VaR)', descricao: 'Perda máxima esperada em um período, com certo nível de confiança.' },
]

const TestesHome = () => {
    return (
        <Container title='Testes de Estresse'>
            <Itens>
                {mockedTestes.map(teste => (
                    <TesteItem key={teste.id} teste={teste} />
                ))}
            </Itens>
        </Container>
    )
}

export default TestesHome