import { ListAltRounded, SaveRounded } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import React from 'react'
import PageHeader from '../../template/PageHeader/PageHeader'
import SelectAvatar from '../../template/SelectAvatar/SelectAvatar'

export default function MembersForm() {
    return (
        <React.Fragment>
            <PageHeader
                icon={<ListAltRounded />}
                title='Cadastrar Associado'
            />
            <Card>
                <CardContent>
                    <Typography variant='h6'>
                        Informe os dados do associado
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <SelectAvatar />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                variant='standard'
                                label='Nome'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                variant='standard'
                                label='Endereço'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={8}
                        >
                            <TextField
                                variant='standard'
                                label='Bairro'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                        >
                            <TextField
                                variant='standard'
                                label='CEP'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                variant='standard'
                                label='Cidade'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='CPF'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Telefone'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Estado Civil'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Data de Nascimento'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                variant='standard'
                                label='E-mail'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                variant='standard'
                                label='Rede Social'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Unidade que Serviu'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Nome de Guerra'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Ano que Serviu'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Número'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Profissão'
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <TextField
                                variant='standard'
                                label='Tipo Sanguíneo'
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                variant='standard'
                                label='OBS.'
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <Button
                                variant='contained'
                                color='success'
                                startIcon={<SaveRounded />}
                            >
                                Cadastrar Associado
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
