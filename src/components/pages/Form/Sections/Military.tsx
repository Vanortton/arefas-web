import { Box, CardContent, Divider, Grid, MenuItem } from '@mui/material'
import { useContext } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import StyledCard from '../../../template/StyledCard/StyledCard'
import StyledInput from '../../../template/StyledInput/StyledInput'
import StyledSelect from '../../../template/StyledSelect/StyledSelect'
import StyledTitle from '../../../template/StyledTitle/StyledTitle'

export default function Military() {
    const { form, setForm } = useContext(FormContext)

    return (
        <StyledCard>
            <CardContent>
                <StyledTitle
                    variant='h5'
                    color='black'
                >
                    Informações Militares
                </StyledTitle>
                <Divider sx={{ opacity: 1 }} />
                <Box sx={{ mt: 2 }} />
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledInput
                            label='Unidade que Serviu'
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    military: {
                                        ...form.military,
                                        unit_served: e.target.value,
                                    },
                                })
                            }
                            value={form.military?.unit_served || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <StyledInput
                            label='Nome de Gerra'
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    military: {
                                        ...form.military,
                                        war_name: e.target.value,
                                    },
                                })
                            }
                            value={form.military?.war_name || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <StyledInput
                            label='Ano que Serviu'
                            fullWidth
                            type='number'
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    military: {
                                        ...form.military,
                                        year_served: e.target.value,
                                    },
                                })
                            }
                            value={form.military?.year_served || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <StyledInput
                            label='Número/Ano'
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    military: {
                                        ...form.military,
                                        number_year: e.target.value,
                                    },
                                })
                            }
                            value={form.military?.number_year || ''}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <StyledSelect
                            label='Companhia'
                            fullWidth
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    military: {
                                        ...form.military,
                                        company: e.target.value as string,
                                    },
                                })
                            }
                            value={form.military?.company || ''}
                        >
                            <MenuItem value='1'>Primeira CIA</MenuItem>
                            <MenuItem value='2'>Segunda CIA</MenuItem>
                            <MenuItem value='support'>CIA de Apoio</MenuItem>
                            <MenuItem value='ccs'>CCS</MenuItem>
                            <MenuItem value='other'>Outra</MenuItem>
                        </StyledSelect>
                    </Grid>
                </Grid>
            </CardContent>
        </StyledCard>
    )
}
