import React from 'react'
import classes from "./Button.module.css"

type Props = {
    children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    )
}

export default Button