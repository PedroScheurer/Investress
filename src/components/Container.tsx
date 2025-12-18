import React from 'react'
import Title from './ui/Title'

type Props = {
    children: React.ReactNode,
    title: string,
}

const Container: React.FC<Props> = ({ children, title }) => {
    return (
        <div className='container'>
            <Title>{title}</Title>
            {children}
        </div>
    )
}

export default Container