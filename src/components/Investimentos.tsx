import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

import Container from './Container'
import Itens from './Itens'
import InvestimentoItem from './InvestimentoItem'
import { formatTitle } from '../utils'

type Investimento = {
  id: number,
  nome: string,
  retornoInvestimento: number,
  type: string,
  valorAtual: number,
  valorInvestido: number,
}

const Investimentos = () => {
  const [investimentos, setInvestimento] = useState<Array<Investimento>>([])
  const { tipo } = useParams()
  const { data } = useLoaderData();

  useEffect(() => {
    setInvestimento(data)
  }, [data])


  return (
    <Container title={formatTitle(tipo || "Investimento")} navLevelUp>
      <Itens>
        {investimentos.map(investimento => (
          <InvestimentoItem key={investimento.id} investimento={investimento} />
        ))}
      </Itens>
    </Container>
  )
}

export default Investimentos;