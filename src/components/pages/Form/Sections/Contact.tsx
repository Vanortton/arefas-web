import { Box, CardContent, Divider } from '@mui/material'
import StyledCard from '../../../template/StyledCard/StyledCard'
import StyledTitle from '../../../template/StyledTitle/StyledTitle'
import ContactAddress from './AddContact/ContactAddress'
import ContactEmail from './AddContact/ContactEmail'
import ContactPhone from './AddContact/ContactPhone'
import ContactSocial from './AddContact/ContactSocial'

export default function Contact() {
    return (
        <StyledCard>
            <CardContent>
                <StyledTitle
                    variant='h5'
                    color='black'
                >
                    Contato
                </StyledTitle>
                <Divider sx={{ opacity: 1 }} />
                <Box sx={{ mt: 2 }} />
                <ContactEmail />
                <Divider sx={{ opacity: 1, mt: 1 }} />
                <ContactPhone />
                <Divider sx={{ opacity: 1, mt: 1 }} />
                <ContactAddress />
                <Divider sx={{ opacity: 1, mt: 1 }} />
                <ContactSocial />
            </CardContent>
        </StyledCard>
    )
}
