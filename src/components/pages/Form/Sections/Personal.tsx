import { Box, CardContent, Divider, Grid, MenuItem } from '@mui/material'
import { formatToCPF, isCPF } from 'brazilian-values'
import { useContext } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import SelectAvatar from '../../../template/SelectAvatar/SelectAvatar'
import StyledCard from '../../../template/StyledCard/StyledCard'
import StyledInput from '../../../template/StyledInput/StyledInput'
import StyledSelect from '../../../template/StyledSelect/StyledSelect'
import StyledTitle from '../../../template/StyledTitle/StyledTitle'

export default function Personal() {
    const { form, setForm } = useContext(FormContext)

    return (
        <StyledCard>
            <CardContent>
                <StyledTitle
                    variant='h5'
                    color='black'
                >
                    Informações Pessoais
                </StyledTitle>
                <Divider sx={{ opacity: 1 }} />
                <Box sx={{ mt: 2 }} />
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '30px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <SelectAvatar
                                onImageChange={(image) =>
                                    setForm({
                                        ...form,
                                        personal: {
                                            ...form.personal,
                                            avatar: image,
                                        },
                                    })
                                }
                            />
                        </Box>
                        <Grid
                            item
                            xs={12}
                        >
                            <StyledInput
                                label='Nome Completo'
                                fullWidth
                                onChange={(event) =>
                                    setForm({
                                        ...form,
                                        personal: {
                                            ...form.personal,
                                            name: event.target.value,
                                        },
                                    })
                                }
                                value={form?.personal?.name || ''}
                            />
                            <StyledTitle
                                variant='h6'
                                color='#000'
                            >
                                Documentos
                            </StyledTitle>
                            <Box sx={{ mb: '4px', mt: '3px' }} />
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <StyledInput
                                        label='CPF'
                                        fullWidth
                                        onChange={(event) => {
                                            let value = event.target.value
                                            if (isCPF(value))
                                                value = formatToCPF(value)
                                            setForm({
                                                ...form,
                                                personal: {
                                                    ...form.personal,
                                                    cpf: value,
                                                },
                                            })
                                        }}
                                        value={form?.personal?.cpf || ''}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <StyledInput
                                        label='Número da Reservista'
                                        fullWidth
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                personal: {
                                                    ...form.personal,
                                                    reservist_number:
                                                        event.target.value,
                                                },
                                            })
                                        }
                                        value={
                                            form?.personal?.reservist_number ||
                                            ''
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <StyledInput
                                        label='Data da Baixa'
                                        type='date'
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                personal: {
                                                    ...form.personal,
                                                    retirement_date:
                                                        event.target.value,
                                                },
                                            })
                                        }
                                        value={
                                            form?.personal?.retirement_date ||
                                            ''
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <StyledTitle
                            variant='h6'
                            color='#000'
                        >
                            Informações
                        </StyledTitle>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{ paddingTop: '0px !important' }}
                    >
                        <StyledInput
                            label='Data de Nascimento'
                            type='date'
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    personal: {
                                        ...form.personal,
                                        birth_date: event.target.value,
                                    },
                                })
                            }
                            value={form?.personal?.birth_date || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{ paddingTop: '0px !important' }}
                    >
                        <StyledSelect
                            label='Estado Civil'
                            fullWidth
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    personal: {
                                        ...form.personal,
                                        marital_status: event.target.value as
                                            | 'married'
                                            | 'single',
                                    },
                                })
                            }
                            value={form?.personal?.marital_status || ''}
                        >
                            <MenuItem value='single'>Solteiro</MenuItem>
                            <MenuItem value='married'>Casado</MenuItem>
                        </StyledSelect>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{ paddingTop: '0px !important' }}
                    >
                        <StyledSelect
                            label='Sexo'
                            fullWidth
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    personal: {
                                        ...form.personal,
                                        sex: event.target.value as
                                            | 'male'
                                            | 'female',
                                    },
                                })
                            }
                            value={form?.personal?.sex || ''}
                        >
                            <MenuItem value='male'>Masculino</MenuItem>
                            <MenuItem value='female'>Feminino</MenuItem>
                        </StyledSelect>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledInput
                            label='Profissão'
                            fullWidth
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    personal: {
                                        ...form.personal,
                                        profession: event.target.value,
                                    },
                                })
                            }
                            value={form?.personal?.profession || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledSelect
                            label='Tipo Sanguíneo'
                            fullWidth
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    personal: {
                                        ...form.personal,
                                        blood_type: event.target.value as
                                            | 'A+'
                                            | 'A-'
                                            | 'B+'
                                            | 'B-'
                                            | 'AB+'
                                            | 'AB-'
                                            | 'O+'
                                            | 'O-',
                                    },
                                })
                            }
                            value={form?.personal?.blood_type || ''}
                        >
                            <MenuItem value='A+'>A+</MenuItem>
                            <MenuItem value='A-'>A-</MenuItem>
                            <MenuItem value='B+'>B+</MenuItem>
                            <MenuItem value='B-'>B-</MenuItem>
                            <MenuItem value='AB+'>AB+</MenuItem>
                            <MenuItem value='AB-'>AB-</MenuItem>
                            <MenuItem value='O+'>O+</MenuItem>
                            <MenuItem value='O-'>O-</MenuItem>
                        </StyledSelect>
                    </Grid>
                </Grid>
            </CardContent>
        </StyledCard>
    )
}
