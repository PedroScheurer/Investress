import React from 'react'
import classes from "./Control.module.css"

type Props = {
    id: string,
    label: string,
    props: object,
    className?: string,
}

const Control: React.FC<Props> = ({ id, label, props, className }) => {
    return (
        <div className={`${classes.control} ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </div>
    )
}

export default Control