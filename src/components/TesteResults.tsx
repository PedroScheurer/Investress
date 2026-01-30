import React from "react"
import Container from "./Container"

type Props = {
    data: { success: true, results: { var: number }, }
}

const TesteResults: React.FC<Props> = ({ data }) => {

    return (
        <Container title={`Resultado`}>
            <h4>{data.results.var}</h4>
        </Container>
    )
}

export default TesteResults