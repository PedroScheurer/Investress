import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const useModal = () => {
    const ctx = useContext(ModalContext);

    if (!ctx) {
        throw new Error("ModalContext deve ser usado dentro de <ModalContextProvider/>")
    }

    return ctx
}