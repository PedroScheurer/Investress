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