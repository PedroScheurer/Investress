import { createContext } from "react";

type ModalContextType = {
    openedModal: string | null,
    open: (nome: string) => void,
    close: () => void,
}

export const ModalContext = createContext<ModalContextType | null>(null)
