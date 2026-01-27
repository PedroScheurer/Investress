import React from 'react'
import classes from "../../styles/Title.module.css"

type Props = {
    children : React.ReactNode,
}

const Title : React.FC<Props> = ({children}) => {
  return (
    <h1 className={classes.title}>{children}</h1>
  )
}

export default Title