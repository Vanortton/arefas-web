import { NotificationsSharp, PersonSharp } from '@mui/icons-material'
import { Box, Button, ButtonProps } from '@mui/material'
import styled from 'styled-components'
import Logo from '../../../assets/imgs/arefas.webp'
import { GradientIcon } from '../GradientIcon/GradientIcon'
import StyledTitle from '../StyledTitle/StyledTitle'

const HeaderContainer = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-image: linear-gradient(to bottom, #141412, #4d423d);
`

const ButtonStyled = styled(Button)<ButtonProps>(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: 'white',
    background: 'linear-gradient(to bottom, #0C0B0E, #2E2A36)',
    borderRadius: '0px !important',
    minWidth: '0px !important',
    padding: '6px !important',
}))

export default function Header() {
    return (
        <HeaderContainer>
            <Box className='d-flex gap-2 align-items-center'>
                <img
                    src={Logo}
                    alt='Logo da AREFAS'
                    height={35}
                />
                <StyledTitle variant='h5'>AREFAS</StyledTitle>
            </Box>
            <Box className='d-flex gap-3 align-items-center'>
                <ButtonStyled variant='contained'>
                    <GradientIcon
                        icon={NotificationsSharp}
                        gradientColors={['#DAB682', '#a16f33']}
                    />
                </ButtonStyled>
                <ButtonStyled variant='contained'>
                    Gilvan de Jesus
                    <GradientIcon
                        icon={PersonSharp}
                        gradientColors={['#DAB682', '#a16f33']}
                    />
                </ButtonStyled>
            </Box>
        </HeaderContainer>
    )
}
