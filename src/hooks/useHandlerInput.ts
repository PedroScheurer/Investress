import { useState } from "react"

export const useHandlerInput = <T extends object>(initialState: T) => {
    const [formData, setFormData] = useState<T>(initialState);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => {
            return {...prevFormData, [e.target.name] : e.target.value}
        })
    }

    return {
        formData,
        handleChange,
    }
}