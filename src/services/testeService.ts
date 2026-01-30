import { redirect, type ActionFunction, type ActionFunctionArgs } from "react-router";
import { api } from "../utils/axiosConfig";

type NovoTesteForm = {
    scenario: string,
    typeInvestimento: string,
}

export const novoTesteAction: ActionFunction = async ({ request, params }: ActionFunctionArgs<NovoTesteForm>) => {
    // const token = sessionStorage.getItem('token');

    // if (!token) {
    //     return redirect('/login')
    // }
    const token = "123";

    const formData = await request.formData()
    const data: NovoTesteForm = {
        scenario: formData.get("scenario") as string,
        typeInvestimento: formData.get("typeInvestimento") as string,
    }

    const scenario = data.scenario
    const metric = params.metric
    const dataPost = {
        typeInvestimento: data.typeInvestimento,
        confindence: 0.95,
    }

    try {
        const res = await api.post(`/ws/stress-test?scenario=${scenario}&metrics=${metric}`, dataPost, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return { success: true, results: res.data, };

    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 }
    }
}