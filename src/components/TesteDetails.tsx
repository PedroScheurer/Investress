import { useNavigate, useActionData, useNavigation, useParams } from 'react-router'

import Container from './Container'
import TesteForm from './TesteForm'
import TesteResults from './TesteResults'

import { formatTitle } from '../utils'
import { Loading } from './ui'
import { useEffect } from 'react'

const TesteDetails = () => {
    const { metric } = useParams()
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting"

    const isInvalidMetric =
        !metric || (metric !== "drawdown_maximo" && metric !== "value_at_risk");

    useEffect(() => {
        if (isInvalidMetric) {
            navigate("/stress-test", { replace: true });
        }
    }, [isInvalidMetric, navigate]);

    if (isInvalidMetric) {
        return null;
    }

    return (
        <>
            {isSubmitting && <Loading />}
            <Container title={formatTitle(metric)} navLevelUp>
                <div>
                    <TesteForm metric={`${metric}`} />
                </div>
                <div>
                    {data && data.success && <TesteResults data={data} />}
                </div>
            </Container>
        </>

    )
}

export default TesteDetails