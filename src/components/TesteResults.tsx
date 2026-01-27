import React from "react"
import Container from "./Container"

type Props = {
    resultsData: { teste: string }
}

const TesteResults: React.FC<Props> = ({ resultsData }) => {

    return (
        <Container title={`Resultado`}>
            <h1>{resultsData.teste}</h1>
        </Container>
    )
}

export default TesteResults