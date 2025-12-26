import type { ActionFunction, ActionFunctionArgs } from "react-router";
import { api } from "../../utils/axiosConfig";
import { validarEmail, validarSenha } from "../../utils";

type LoginFormType = {
    email: string,
    password: string,
}

export const loginAction: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();

    const data: LoginFormType = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    if (!validarEmail(data.email)) {
        return new Response(JSON.stringify({ message: "Email/Senha invalidos", success: false }));
    }
    if (!validarSenha(data.password)) {
        return new Response(JSON.stringify({ message: "Email/Senha invalidos", success: false }));
    }

    loginPost(data)
}

async function loginPost(data: LoginFormType) {
    try {
        const res = await api.post("/auth/login", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!res.data) {
            throw new Error("ERRO: " + res.statusText)
        }

        return new Response(JSON.stringify({ token: res.data, success: true }));

    } catch (error) {
        throw new Response(`${error}`, { status: 500 });
    }
}

type RegisterFormType = {
    nome: string,
    email: string,
    password: string,
}

export const register: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data: RegisterFormType = {
        nome: formData.get("nomeCompleto") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    if (!validarEmail(data.email)) {
        return new Response(JSON.stringify({ message: "Login/Email invalido" }), { status: 409 });
    }
    if (!validarSenha(data.password)) {
        return new Response(JSON.stringify({ message: "Senha invalida, deve conter 6 dígitos e 1 letra maíscula e 1 mínuscula" }), { status: 409 });
    }

    try {
        const res = await api.post("/auth/register", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!res.data) {
            throw new Error("Erro no cadastro" + res.statusText)
        }
        return loginPost({ email: data.email, password: data.password });

    } catch (error) {
        throw new Response(`${error}`, { status: 500 });
    }

}