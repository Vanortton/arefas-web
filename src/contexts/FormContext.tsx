import { ReactNode, createContext, useEffect, useState } from 'react'
import { Entity } from '../types/EntityType'

type FormContextType = {
    form: Entity
    setForm: (form: Entity) => void
}

const FormContext = createContext<FormContextType>({
    form: {} as Entity,
    setForm: () => {},
})

function FormProvider({ children }: { children: ReactNode }) {
    const [form, setForm] = useState<Entity>({} as Entity)

    useEffect(() => {
        console.log(form)
    }, [form])

    return (
        <FormContext.Provider value={{ form, setForm }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider }
