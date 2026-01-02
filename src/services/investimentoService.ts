import { redirect, type ActionFunction, type ActionFunctionArgs, type LoaderFunction, type LoaderFunctionArgs } from "react-router";
import { api } from "../utils/axiosConfig";

type NovoInvestimentoForm = {
    nome: string,
    type: string,
    valorAtual: number,
    valorInvestido: number,
}

export const novoInvestimentoAction: ActionFunction = async ({ request }: ActionFunctionArgs<NovoInvestimentoForm>) => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return redirect('/login')
    }

    const formData = await request.formData()
    const data: NovoInvestimentoForm = {
        nome: formData.get("nome") as string,
        type: formData.get("tipo") as string,
        valorAtual: formData.get("valorAtual") !== null ? Number(formData.get("valorAtual")) : 0,
        valorInvestido: formData.get("valorAtual") !== null ? Number(formData.get("valorInvestido")) : 0,
    }

    try {
        const res = await api.post("/ws/investimento", data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return redirect(`/carteira/${data.type.toLowerCase()}`)

    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 }
    }
}

export const investimentoLoader: LoaderFunction = async () => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return redirect('/login')
    }
    try {
        const res = await api.get("/ws/investimento/tipo", {
            headers:
            {
                "Authorization": `Bearer ${token}`
            }
        })

        return { success: true, data: res.data }
    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 }
    }

}

export const investimentoPorTipoLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return redirect('/login')
    }
    try {
        const res = await api.get(`/ws/investimento/${params.tipo?.toUpperCase()}`, {
            headers:
            {
                "Authorization": `Bearer ${token}`
            }
        })

        return { success: true, data: res.data }
    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 }
    }

}

export const deleteInvestimento: ActionFunction = async ({ params }: ActionFunctionArgs) => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return redirect('/login')
    }
    const { id, tipo } = params

    try {
        const res = await api.delete(`/ws/investimento/${id}`, {
            headers:
            {
                "Authorization": `Bearer ${token}`
            }
        })

        return redirect("/carteira")
    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return redirect(`/carteira/${tipo?.toLowerCase()}`)
    }

}