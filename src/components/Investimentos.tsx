import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Container from './Container'
import Itens from './Itens'
import InvestimentoItem from './InvestimentoItem'

type Investimento = {
  id: string,
  nome: string,
  valor: number
}

const mockedAcoes: Array<Investimento> = [
  { id: '0', nome: 'BBAS3', valor: 890 },
  { id: '1', nome: 'PETR4', valor: 510 },
]

const mockedFiis: Array<Investimento> = [
  { id: '2', nome: 'MXRF11', valor: 200 },
  { id: '3', nome: 'XPML11', valor: 330 },
]

const Investimentos = () => {
  const [investimentos, setInvestimento] = useState<Array<Investimento>>([])
  const { tipo } = useParams()

  const loader = () => {
    // get investimentos por tipo
    if (tipo === "Ações") {
      setInvestimento(mockedAcoes)
    } else if (tipo === "Fiis") {
      setInvestimento(mockedFiis)
    }
    /// ...
  }

  useEffect(() => {
    loader()
  }, [investimentos])

  return (
    <Container title={`${tipo}`} navLevelUp>
      <Itens>
        {investimentos.map(investimento => (
          <InvestimentoItem key={investimento.id} investimento={investimento} />
        ))}
      </Itens>
    </Container>
  )
}

export default Investimentos;