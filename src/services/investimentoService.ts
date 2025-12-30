import { redirect, type ActionFunction, type ActionFunctionArgs, type LoaderFunction, type LoaderFunctionArgs } from "react-router";
import { api } from "../utils/axiosConfig";

type NovoInvestimentoForm = {
    nome: string,
    tipo: string,
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
        tipo: formData.get("tipo") as string,
        valorAtual: formData.get("valorAtual") !== null ? Number(formData.get("valorAtual")) : 0,
        valorInvestido: formData.get("valorAtual") !== null ? Number(formData.get("valorInvestido")) : 0,
    }

    try {
        const res = await api.post("/ws/investimentos", data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return { success: true, data: res.data }

    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 }
    }
}

export const  investimentoLoader: LoaderFunction = async () => {
    try {
        const res = await api.get("/ws/investimentos?page=0&orderByTipo=true")

        return { success: true, data: res.data }
    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 }
    }

}