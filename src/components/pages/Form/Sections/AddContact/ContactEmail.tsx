import {
    AddSharp,
    CloseSharp,
    DeleteSharp,
    EmailSharp,
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
import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../../../../contexts/FormContext'
import StyledInput from '../../../../template/StyledInput/StyledInput'
import StyledTitle from '../../../../template/StyledTitle/StyledTitle'

type Email = {
    email: string
    primary: boolean
}

export default function ContactEmail() {
    const [emails, setEmails] = useState<Email[]>([])
    const [newEmail, setNewEmail] = useState('')
    const [primary, setPrimary] = useState(false)
    const [isFormVisible, setIsFormVisible] = useState(false)
    const { form, setForm } = useContext(FormContext)

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleSave = () => {
        if (!validateEmail(newEmail)) {
            alert('E-mail inválido!')
            return
        }

        const updatedEmails = primary
            ? emails.map((email) => ({ ...email, primary: false }))
            : emails

        setEmails([...updatedEmails, { email: newEmail, primary }])
        setIsFormVisible(false)
        setNewEmail('')
        setPrimary(false)
    }

    const handleDelete = (indexToDelete: number) => {
        const updatedEmails = emails.filter(
            (_, index) => index !== indexToDelete
        )
        setEmails(updatedEmails)
    }

    useEffect(() => {
        setForm({
            ...form,
            contact: {
                ...form.contact,
                emails,
            },
        })
    }, [emails])

    return (
        <React.Fragment>
            <StyledTitle
                variant='h6'
                color='black'
            >
                E-mail (s)
            </StyledTitle>
            <List
                dense
                component={Paper}
                elevation={0}
                sx={{ borderRadius: '0px', padding: 0 }}
                className='mb-3 mt-2'
            >
                {emails.map((email, index) => (
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
                                <EmailSharp />
                            </ListItemIcon>
                            <ListItemText>
                                {email.email}{' '}
                                {email.primary ? '(Principal)' : ''}
                            </ListItemText>
                        </ListItem>
                        {emails.length > index + 1 && (
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
                        type='email'
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder='Digite o e-mail'
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
                <AddSharp sx={{ mr: '5px' }} /> E-mail
            </Button>
        </React.Fragment>
    )
}
