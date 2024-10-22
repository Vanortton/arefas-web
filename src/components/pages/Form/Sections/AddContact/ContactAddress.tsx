import {
    AddSharp,
    CloseSharp,
    DeleteSharp,
    HomeSharp,
    SaveSharp,
} from '@mui/icons-material'
import {
    Button,
    ButtonGroup,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Paper,
} from '@mui/material'
import { formatToCEP, isCEP } from 'brazilian-values'
import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../../../../contexts/FormContext'
import useAPI from '../../../../../hooks/useAPI'
import StyledInput from '../../../../template/StyledInput/StyledInput'
import StyledSelect from '../../../../template/StyledSelect/StyledSelect'
import StyledTitle from '../../../../template/StyledTitle/StyledTitle'

type Address = {
    cep: string
    state: string
    city: string
    street: string
    number: string
    primary: boolean
}

const states = {
    AC: 'AC - Acre',
    AL: 'AL - Alagoas',
    AP: 'AP - Amapá',
    AM: 'AM - Amazonas',
    BA: 'BA - Bahia',
    CE: 'CE - Ceará',
    ES: 'ES - Espírito Santo',
    GO: 'GO - Goiás',
    MA: 'MA - Maranhão',
    MT: 'MT - Mato Grosso',
    MS: 'MS - Mato Grosso do Sul',
    MG: 'MG - Minas Gerais',
    PA: 'PA - Pará',
    PB: 'PB - Paraíba',
    PR: 'PR - Paraná',
    PE: 'PE - Pernambuco',
    PI: 'PI - Piauí',
    RJ: 'RJ - Rio de Janeiro',
    RN: 'RN - Rio Grande do Norte',
    RS: 'RS - Rio Grande do Sul',
    RO: 'RO - Rondônia',
    RR: 'RR - Roraima',
    SC: 'SC - Santa Catarina',
    SP: 'SP - São Paulo',
    SE: 'SE - Sergipe',
    TO: 'TO - Tocantins',
    DF: 'DF - Distrito Federal',
}

export default function ContactAddress() {
    const { form, setForm } = useContext(FormContext)
    const [addresses, setAddresses] = useState<Address[]>([])
    const [newCEP, setNewCEP] = useState('')
    const [newState, setNewState] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newStreet, setNewStreet] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [primary, setPrimary] = useState(false)
    const [isFormVisible, setIsFormVisible] = useState(false)
    const { APICep } = useAPI()

    const validateCEP = (cep: string): boolean => isCEP(cep)

    const fetchAddressData = async (cep: string) => {
        try {
            const response = await APICep(cep)
            if (response) {
                setNewStreet(response.logradouro)
                setNewCity(response.localidade)
                setNewState(response.uf)
            }
        } catch (error) {
            console.error('Erro ao buscar dados do endereço:', error)
            alert('Erro ao buscar dados do endereço.')
        }
    }

    useEffect(() => {
        if (validateCEP(newCEP)) {
            fetchAddressData(newCEP)
        } else {
            setNewStreet('')
            setNewCity('')
            setNewState('')
        }
    }, [newCEP])

    const handleSave = () => {
        if (!validateCEP(newCEP)) {
            alert('CEP inválido!')
            return
        }

        const formattedCEP = formatToCEP(newCEP)

        const updatedAddresses = primary
            ? addresses.map((address) => ({ ...address, primary: false }))
            : addresses

        setAddresses([
            ...updatedAddresses,
            {
                cep: formattedCEP,
                state: newState,
                city: newCity,
                street: newStreet,
                number: newNumber,
                primary,
            },
        ])
        setIsFormVisible(false)
        setNewCEP('')
        setNewState('')
        setNewCity('')
        setNewStreet('')
        setNewNumber('')
        setPrimary(false)
    }

    const handleDelete = (indexToDelete: number) => {
        const updatedAddresses = addresses.filter(
            (_, index) => index !== indexToDelete
        )
        setAddresses(updatedAddresses)
    }

    useEffect(() => {
        setForm({
            ...form,
            contact: {
                ...form.contact,
                addresses,
            },
        })
    }, [addresses])

    return (
        <React.Fragment>
            <StyledTitle
                variant='h6'
                color='black'
            >
                Endereço (s)
            </StyledTitle>
            <List
                dense
                component={Paper}
                elevation={0}
                sx={{ borderRadius: '0px', padding: 0 }}
                className='mb-3 mt-2'
            >
                {addresses.map((address, index) => (
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
                                <HomeSharp />
                            </ListItemIcon>
                            <ListItemText>
                                {address.street}, {address.number},{' '}
                                {address.city}, {address.state}, {address.cep}{' '}
                                {address.primary ? '(Principal)' : ''}
                            </ListItemText>
                        </ListItem>
                        {addresses.length > index + 1 && (
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
                <Grid
                    container
                    spacing={2}
                    className='mb-3'
                >
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledInput
                            label='CEP'
                            value={newCEP}
                            onChange={(e) => setNewCEP(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledSelect
                            label='Estado'
                            value={newState}
                            onChange={(e) =>
                                setNewState(e.target.value as string)
                            }
                            fullWidth
                        >
                            {Object.entries(states).map(([key, value]) => (
                                <MenuItem
                                    key={key}
                                    value={key}
                                >
                                    {value}
                                </MenuItem>
                            ))}
                        </StyledSelect>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledSelect
                            label='Cidade'
                            value={newCity}
                            onChange={(e) =>
                                setNewCity(e.target.value as string)
                            }
                            fullWidth
                        >
                            <MenuItem value={newCity}>{newCity}</MenuItem>
                        </StyledSelect>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledInput
                            label='Logradouro'
                            value={newStreet}
                            onChange={(e) => setNewStreet(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledInput
                            label='Número'
                            value={newNumber}
                            onChange={(e) => setNewNumber(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={primary}
                                    onChange={(e) =>
                                        setPrimary(e.target.checked)
                                    }
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
                    </Grid>
                </Grid>
            )}
            <Button
                onClick={() => setIsFormVisible(true)}
                disabled={isFormVisible}
                variant='contained'
                size='small'
            >
                <AddSharp sx={{ mr: '5px' }} /> Endereço
            </Button>
        </React.Fragment>
    )
}
