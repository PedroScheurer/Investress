import { Itens, AtivoItem } from "../components"
import Title from "../components/ui/Title"

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

const Carteira = () => {
  return (
    <div className="container">
      <Title>Carteira de Investimentos</Title>
      <Itens>
        {mockedAtivos.map(ativo => (
          <AtivoItem key={ativo.id} ativo={ativo} peso={ativo.valor / totalValorInvestido} />
        ))}
      </Itens>
    </div>
  )
}

export default Carteira