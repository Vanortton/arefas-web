import { ExpandMoreRounded } from '@mui/icons-material'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material'
import { Member } from '../../../types/MembersType'

export default function MembersItem({
    member,
    expanded,
    onChange,
}: {
    member: Member
    expanded: boolean
    onChange: () => void
}) {
    return (
        <Accordion
            expanded={expanded}
            onChange={onChange}
            sx={{
                '&.Mui-expanded': {
                    margin: '1px 0px 1px 0px',
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls='panel1-content'
                id='panel1-header'
            >
                <Typography className='fw-bold'>
                    Associado: {member.name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography>Endereço: {member.address}</Typography>
                        <Typography>Bairro: {member.neighborhood}</Typography>
                        <Typography>CEP: {member.zip_code}</Typography>
                        <Typography>
                            Telefone: ({String(member.phone_number).slice(0, 2)}
                            ) {String(member.phone_number).slice(2)}
                        </Typography>
                        <Typography>
                            Data de Nascimento:{' '}
                            {String(member.date_of_birth).replace(
                                /(\d{4})(\d{2})(\d{2})/,
                                '$3/$2/$1'
                            )}
                        </Typography>
                        <Typography>
                            Rede Social: {member.social_network}
                        </Typography>
                        <Typography>
                            Ano que Serviu: {member.year_served}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography>Número: {member.number}</Typography>
                        <Typography>CPF: {member.cpf}</Typography>
                        <Typography>
                            Estado Civil: {member.marital_status}
                        </Typography>
                        <Typography>E-mail: {member.email}</Typography>
                        <Typography>
                            Unidade que Serviu: {member.unit_served}
                        </Typography>
                        <Typography>
                            Nome de Guerra: {member.war_name}
                        </Typography>
                        <Typography>OBS: {member.obs}</Typography>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}
