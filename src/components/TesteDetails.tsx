import Container from './Container'
import { useParams } from 'react-router'


const TesteDetails = () => {
    const { tipo } = useParams()
    return (
        <Container title={`${tipo}`} navLevelUp>
            <div>
                formulario do teste
            </div>
            <div>
                resultado do teste
            </div>
        </Container>
    )
}

export default TesteDetails