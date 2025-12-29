export type LoginError = {
    message: string,
    success: false,
};

export type LoginSuccess = {
    token: string,
    success: true,
};