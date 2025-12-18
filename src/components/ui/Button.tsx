import React from 'react'
import classes from "./Button.module.css"

type Props = {
    children: React.ReactNode,
    className?: string,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, className, ...props }) => {
    console.log("Classes carregadas:", classes);
    return (
        <button className={`${classes.button} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button