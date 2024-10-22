import {
    AddSharp,
    CloseSharp,
    DeleteSharp,
    PhoneSharp,
    SaveSharp,
} from '@mui/icons-material'
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
} from '@mui/material'
import { formatToPhone, isPhone } from 'brazilian-values'
import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../../../../contexts/FormContext'
import StyledInput from '../../../../template/StyledInput/StyledInput'
import StyledTitle from '../../../../template/StyledTitle/StyledTitle'

type Phone = {
    phone: string
    primary: boolean
}

export default function ContactPhone() {
    const [phones, setPhones] = useState<Phone[]>([])
    const [newPhone, setNewPhone] = useState('')
    const [primary, setPrimary] = useState(false)
    const [isFormVisible, setIsFormVisible] = useState(false)
    const { form, setForm } = useContext(FormContext)

    const validatePhone = (phone: string): boolean => isPhone(phone)

    const handleSave = () => {
        if (!validatePhone(newPhone)) {
            alert('Telefone inválido!')
            return
        }

        const formattedPhone = formatToPhone(newPhone)

        const updatedPhones = primary
            ? phones.map((phone) => ({ ...phone, primary: false }))
            : phones

        setPhones([...updatedPhones, { phone: formattedPhone, primary }])
        setIsFormVisible(false)
        setNewPhone('')
        setPrimary(false)
    }

    const handleDelete = (indexToDelete: number) => {
        const updatedPhones = phones.filter(
            (_, index) => index !== indexToDelete
        )
        setPhones(updatedPhones)
    }

    useEffect(() => {
        setForm({
            ...form,
            contact: {
                ...form.contact,
                phones,
            },
        })
    }, [phones])

    return (
        <React.Fragment>
            <StyledTitle
                variant='h6'
                color='black'
            >
                Telefone (s)
            </StyledTitle>
            <List
                dense
                component={Paper}
                elevation={0}
                sx={{ borderRadius: '0px', padding: 0 }}
                className='mb-3 mt-2'
            >
                {phones.map((phone, index) => (
                    <React.Fragment key={index}>
                        <ListItem
                            secondaryAction={
                                <IconButton
                                    edge='end'
                                    aria-label='delete'
                                    onClick={() => handleDelete(index)}
                                >
                                    <DeleteSharp />
                                </IconButton>
                            }
                        >
                            <ListItemIcon>
                                <PhoneSharp />
                            </ListItemIcon>
                            <ListItemText>
                                {phone.phone}{' '}
                                {phone.primary ? '(Principal)' : ''}
                            </ListItemText>
                        </ListItem>
                        {phones.length > index + 1 && (
                            <Divider
                                variant='fullWidth'
                                flexItem
                                sx={{ opacity: 1 }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </List>
            {isFormVisible && (
                <Box
                    sx={{
                        mb: 2,
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                    }}
                >
                    <StyledInput
                        type='tel'
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        placeholder='Digite o telefone'
                        fullWidth
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={primary}
                                onChange={(e) => setPrimary(e.target.checked)}
                            />
                        }
                        label='Principal'
                    />
                    <ButtonGroup
                        variant='contained'
                        size='small'
                    >
                        <Button
                            onClick={handleSave}
                            color='inherit'
                        >
                            <SaveSharp fontSize='small' />
                        </Button>
                        <Button
                            onClick={() => setIsFormVisible(false)}
                            color='error'
                        >
                            <CloseSharp fontSize='small' />
                        </Button>
                    </ButtonGroup>
                </Box>
            )}
            <Button
                onClick={() => setIsFormVisible(true)}
                disabled={isFormVisible}
                variant='contained'
                size='small'
            >
                <AddSharp sx={{ mr: '5px' }} /> Telefone
            </Button>
        </React.Fragment>
    )
}
