import React from 'react'
import classes from "./Button.module.css"

type Props = {
    children : React.ReactNode,
}

const Button: React.FC<Props> = ({children}) => {
    return (
        <button className={classes.button}>{children}</button>
    )
}

export default Button