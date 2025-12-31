import React from 'react'
import classes from "./DetailsOptions.module.css"

type Props = {
    children: React.ReactNode,
}

const DetailsOptions: React.FC<Props> = ({ children }) => {
    return (
        <ul className={classes.container}>
            {children}
        </ul>
    )
}

export default DetailsOptions