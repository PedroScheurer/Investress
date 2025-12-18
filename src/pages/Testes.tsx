
import Title from '../components/ui/Title'
import { Itens, TesteItem } from '../components'

const mockedTestes = [
  { id: '0', nome: 'Drawdown Máximo', descricao: 'A maior perda acumulada desde um topo até o fundo antes da recuperação.' },
  { id: '1', nome: 'Value at Risk (VaR)', descricao: 'Perda máxima esperada em um período, com certo nível de confiança.' },
]

const Testes = () => {
  return (
    <div className='container'>
      <Title>Testes de Estresse</Title>
      <Itens>
        {mockedTestes.map(teste => (
          <TesteItem key={teste.id} teste={teste} />
        ))}
      </Itens>
    </div>
  )
}

export default Testes