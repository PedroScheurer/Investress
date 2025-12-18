import React, { useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

type Props = {
    children: React.ReactNode
}

const ModalProvider: React.FC<Props> = ({ children }) => {
    const [openedModal, setOpenedModal] = useState<string | null>(null)

    const open = (nome: string) => {
        setOpenedModal(nome)
    }

    const close = () => {
        setOpenedModal(null)
    }

    const ctxValue = {
        openedModal,
        open,
        close,
    }

    return (
        <ModalContext.Provider value={ctxValue}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;