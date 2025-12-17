import React from 'react'
import classes from "./Control.module.css"

type Props = {
    id: string,
    label: string,
    props : object,
}

const Control: React.FC<Props> = ({ id, label, props }) => {
    return (
        <div className={classes.control}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </div>
    )
}

export default Control