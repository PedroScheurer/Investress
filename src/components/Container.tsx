import React from 'react'
import { useNavigate } from 'react-router'
import Title from './ui/Title'
import leftArrowIcon from "../assets/arrow-left.svg"

type Props = {
    children: React.ReactNode,
    title: string,
    navLevelUp?: boolean,
}

const Container: React.FC<Props> = ({ children, title, navLevelUp = false, }) => {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='header'>
                {navLevelUp &&
                    <img src={leftArrowIcon} className='icon'
                        onClick={() => navigate('../')} alt="left-arrow-icon" title='Voltar' />
                }
                <Title>{title}</Title>
            </div>
            {children}
        </div>
    )
}

export default Container