import {
    AddSharp,
    CloseSharp,
    DeleteSharp,
    PersonSharp,
    SaveSharp,
} from '@mui/icons-material'
import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Paper,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../../../../contexts/FormContext'
import StyledInput from '../../../../template/StyledInput/StyledInput'
import StyledSelect from '../../../../template/StyledSelect/StyledSelect'
import StyledTitle from '../../../../template/StyledTitle/StyledTitle'

type Social = {
    username: string
    platform: string
}

const socialPlatforms = [
    { value: 'Instagram', label: 'Instagram' },
    { value: 'Facebook', label: 'Facebook' },
    { value: 'X', label: 'X' },
    { value: 'Youtube', label: 'YouTube' },
    { value: 'TikTok', label: 'TikTok' },
    { value: 'LinkedIn', label: 'LinkedIn' },
]

export default function ContactSocial() {
    const [socials, setSocials] = useState<Social[]>([])
    const [newUsername, setNewUsername] = useState('')
    const [newPlatform, setNewPlatform] = useState('')
    const [isFormVisible, setIsFormVisible] = useState(false)
    const { form, setForm } = useContext(FormContext)

    const handleSave = () => {
        if (!newUsername || !newPlatform) {
            alert('Por favor, preencha ambos os campos!')
            return
        }

        setSocials([
            ...socials,
            { username: newUsername, platform: newPlatform },
        ])
        setIsFormVisible(false)
        setNewUsername('')
        setNewPlatform('')
    }

    const handleDelete = (indexToDelete: number) => {
        const updatedSocials = socials.filter(
            (_, index) => index !== indexToDelete
        )
        setSocials(updatedSocials)
    }

    useEffect(() => {
        setForm({
            ...form,
            contact: {
                ...form.contact,
                socials,
            },
        })
    }, [socials])

    return (
        <React.Fragment>
            <StyledTitle
                variant='h6'
                color='black'
            >
                Redes Sociais
            </StyledTitle>
            <List
                dense
                component={Paper}
                elevation={0}
                sx={{ borderRadius: '0px', padding: 0 }}
                className='mb-3 mt-2'
            >
                {socials.map((social, index) => (
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
                                <PersonSharp />
                            </ListItemIcon>
                            <ListItemText>
                                {social.username} - {social.platform}
                            </ListItemText>
                        </ListItem>
                        {socials.length > index + 1 && (
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
                        label='Seu @'
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        fullWidth
                    />
                    <StyledSelect
                        label='Rede Social'
                        value={newPlatform}
                        onChange={(e) =>
                            setNewPlatform(e.target.value as string)
                        }
                        fullWidth
                    >
                        {socialPlatforms.map((platform) => (
                            <MenuItem
                                key={platform.value}
                                value={platform.value}
                            >
                                {platform.label}
                            </MenuItem>
                        ))}
                    </StyledSelect>
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
                <AddSharp sx={{ mr: '5px' }} /> Rede Social
            </Button>
        </React.Fragment>
    )
}
