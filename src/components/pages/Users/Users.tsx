import { PeopleAltRounded, SaveRounded } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import PageHeader from '../../template/PageHeader/PageHeader'
import SelectAvatar from '../../template/SelectAvatar/SelectAvatar'

export default function Users() {
    return (
        <Box>
            <PageHeader
                icon={<PeopleAltRounded />}
                title='Usuários'
            />
            <Card>
                <CardContent>
                    <Typography variant='h6'>
                        Informe os dados do usuário
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
                            md={6}
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
                        >
                            <TextField
                                variant='standard'
                                label='Senha'
                                fullWidth
                                type='email'
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
                                Cadastrar Usuário
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}
