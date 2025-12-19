import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'
import classes from "./Modal.module.css"

type Props = {
    children: React.ReactElement,
    id: string,
    className?: string,
}

const Modal: React.FC<Props> = ({ children, id, className }) => {
    const dialog = useRef<HTMLDialogElement | null>(null)
    const { openedModal, close } = useModal();

    const isOpen = openedModal === id;

    useEffect(() => {
        const modal = dialog.current

        if (!modal) {
            return
        }

        if (isOpen) {
            if (!modal.open) {
                modal.showModal();
            }
        } else if (modal.open) {
            modal.close();
        }

    }, [isOpen])

    const handleNativeClose = () => {
        if (isOpen) {
            close();
        }
    };

    return createPortal((
        <dialog
            ref={dialog}
            onClose={handleNativeClose}
            className={`${classes.modal} ${className}`}
        >
            {children}
        </dialog>
    ), document.getElementById('modal')!);
}

export default Modal