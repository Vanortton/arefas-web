import { CloseSharp, SaveSharp } from '@mui/icons-material'
import { Button, ButtonGroup } from '@mui/material'
import { useContext } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import { Entity } from '../../../../types/EntityType'

export default function Buttons() {
    const { form, setForm } = useContext(FormContext)

    const clearForm = () => setForm({} as Entity)

    const handleSave = () => {
        console.log(form)
    }

    return (
        <ButtonGroup
            variant='contained'
            fullWidth
        >
            <Button
                variant='contained'
                color='inherit'
                onClick={clearForm}
            >
                <CloseSharp sx={{ mr: '5px' }} /> Limpar
            </Button>
            <Button
                variant='contained'
                color='secondary'
                onClick={handleSave}
            >
                <SaveSharp sx={{ mr: '5px' }} /> Salvar
            </Button>
        </ButtonGroup>
    )
}
