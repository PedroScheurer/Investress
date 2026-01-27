import { useActionData, useParams } from 'react-router'

import Container from './Container'
import TesteForm from './TesteForm'
import TesteResults from './TesteResults'

const TesteDetails = () => {
    const { metric } = useParams()
    const data = useActionData();

    return (
        <Container title={`${metric}`}>
            <div>
                <TesteForm />
            </div>
            <div>
                <TesteResults resultsData={data} />
            </div>
        </Container>
    )
}

export default TesteDetails