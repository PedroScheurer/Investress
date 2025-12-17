import React from 'react'
import classes from "./Ativos.module.css"

type Props = {
    children: React.ReactNode,
}

const Ativos: React.FC<Props> = ({ children }) => {
    return (
        <ul className={classes.ativos}>
            {children}
        </ul>
    )
}

export default Ativos