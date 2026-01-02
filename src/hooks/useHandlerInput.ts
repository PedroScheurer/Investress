import { useState } from "react"

export const useHandlerInput = <T extends object>(initialState: T) => {
    const [formData, setFormData] = useState<T>(initialState);
    const [didEdit, setDidEdit] = useState(() => {
        const newObj = Object.keys(initialState).reduce((acc, key: string) => {
            acc[key as keyof typeof initialState] = false;
            return acc;
        }, {} as Record<keyof typeof initialState, boolean>)
        return newObj;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => {
            return { ...prevFormData, [e.target.name]: e.target.value }
        })
    }

    const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDidEdit((prevDidEdit) => {
            return {...prevDidEdit, [e.target.name] : false }
        })
    }

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDidEdit((prevDidEdit) => {
            return {...prevDidEdit, [e.target.name] : true }
        })
    }

    return {
        formData,
        didEdit,
        setFormData,
        handleChange,
        handleFocus,
        handleBlur,
    }
}