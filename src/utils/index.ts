export function validarEmail(email: string) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regexEmail.test(email);
}
export function validarSenha(senha: string) {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regexSenha.test(senha);
}

export function validarNome(nome: string) {
    return nome.length > 0
}

export const formatBRL = (value: number) => {
    if (!value) return "R$ 0,00";

    if (isNaN(value)) return "R$ N/A";

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};