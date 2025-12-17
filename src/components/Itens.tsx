import React from 'react'
import classes from "./Itens.module.css"

type Props = {
    children: React.ReactNode,
}

const Itens: React.FC<Props> = ({ children }) => {
    return (
        <ul className={classes.itens}>
            {children}
        </ul>
    )
}

export default Itens