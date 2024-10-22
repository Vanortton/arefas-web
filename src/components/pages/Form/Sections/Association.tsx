import { Box, CardContent, Divider, Grid, MenuItem } from '@mui/material'
import { useContext } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import StyledCard from '../../../template/StyledCard/StyledCard'
import StyledInput from '../../../template/StyledInput/StyledInput'
import StyledSelect from '../../../template/StyledSelect/StyledSelect'
import StyledTitle from '../../../template/StyledTitle/StyledTitle'

type CategoryType =
    | 'director'
    | 'president'
    | 'secretary'
    | 'treasurer'
    | 'associate'
    | 'collaborator'
    | 'friend_emeritus'

export default function Association() {
    const { form, setForm } = useContext(FormContext)

    return (
        <StyledCard>
            <CardContent>
                <StyledTitle
                    variant='h5'
                    color='black'
                >
                    Informações da Associação
                </StyledTitle>
                <Divider sx={{ opacity: 1 }} />
                <Box sx={{ mt: 2 }} />
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={3}
                    >
                        <StyledSelect
                            label='Categoria'
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    association: {
                                        ...form.association,
                                        category: e.target
                                            .value as CategoryType,
                                    },
                                })
                            }
                            value={form.association?.category || ''}
                        >
                            <MenuItem value='director'>Diretor</MenuItem>
                            <MenuItem value='President'>Presidente</MenuItem>
                            <MenuItem value='secretary'>Secretário</MenuItem>
                            <MenuItem value='treasurer'>Tesoureiro</MenuItem>
                            <MenuItem value='associate'>Associado</MenuItem>
                            <MenuItem value='collaborator'>
                                Colaborador
                            </MenuItem>
                            <MenuItem value='emeritus_friend'>
                                Amigo Emérito
                            </MenuItem>
                        </StyledSelect>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                    >
                        <StyledInput
                            label='Data da Associação'
                            type='date'
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    association: {
                                        ...form.association,
                                        association_date: e.target.value,
                                    },
                                })
                            }
                            value={form.association?.association_date || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                    >
                        <StyledInput
                            label='Validade'
                            type='date'
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    association: {
                                        ...form.association,
                                        validity: e.target.value,
                                    },
                                })
                            }
                            value={form.association?.validity || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                    >
                        <StyledSelect
                            label='Status do Associado'
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    association: {
                                        ...form.association,
                                        status: e.target.value as
                                            | 'active'
                                            | 'inactive',
                                    },
                                })
                            }
                            value={form.association?.status || ''}
                        >
                            <MenuItem value='active'>Ativo</MenuItem>
                            <MenuItem value='inactive'>Inativo</MenuItem>
                        </StyledSelect>
                    </Grid>
                </Grid>
            </CardContent>
        </StyledCard>
    )
}
