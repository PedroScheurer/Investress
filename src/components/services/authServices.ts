import type { ActionFunction, ActionFunctionArgs } from "react-router";
import { api } from "../../utils/axiosConfig";
import { validarEmail, validarSenha } from "../../utils";

type LoginFormType = {
    email: string,
    senha: string,
}

export const loginAction: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();

    const data: LoginFormType = {
        email: formData.get("email") as string,
        senha: formData.get("senha") as string,
    }

    if (!validarEmail(data.email) || !validarSenha(data.senha)) {
        return { message: "Email/Senha invalidos", success: false };
    }

    return await loginPost(data)
}

async function loginPost(data: LoginFormType) {
    try {
        const res = await api.post("/auth/login", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        return { success: true, token: res.data, };

    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 }
    }
}

type RegisterFormType = {
    nome: string,
    email: string,
    senha: string,
}

export const register: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data: RegisterFormType = {
        nome: formData.get("nomeCompleto") as string,
        email: formData.get("email") as string,
        senha: formData.get("senha") as string,
    }

    try {
        const res = await api.post("/auth/register", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        return await loginPost({ email: data.email, senha: data.senha });

    } catch (error: any) {
        const msg = error.response?.data?.message || error.message || "Um erro ocorreu, tente novamente.";
        return { message: msg, status: 500 };
    }

}