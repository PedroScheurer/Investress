import { redirect, type ActionFunction, type ActionFunctionArgs } from "react-router";
import { api } from "../utils/axiosConfig";

type NovoTesteForm = {
    scenario: string,
    investimentoType: string,
}

export const novoTesteAction: ActionFunction = async ({ request, params }: ActionFunctionArgs<NovoTesteForm>) => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return redirect('/login')
    }

    const formData = await request.formData()
    const data: NovoTesteForm = {
        scenario: formData.get("scenario") as string,
        investimentoType: formData.get("type") as string,
    }

    const scenario = data.scenario.length === 0 ? `scenario=${data.scenario}` : "";
    const metric = params.metric?.toUpperCase()

    try {
        const res = await api.post(`/ws/stress-test?${scenario}&${metric}`, { type: data.investimentoType }, {
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