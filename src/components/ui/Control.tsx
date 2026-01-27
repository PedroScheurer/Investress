import React from 'react'
import classes from "../../styles/Control.module.css"

type Props = {
    id: string,
    label: string,
    className?: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Control: React.FC<Props> = ({ id, label, className, ...props }) => {
    return (
        <div className={`${classes.control} ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </div>
    )
}

export default Control