import {
    Diversity3Rounded,
    ListAltRounded,
    PeopleAltRounded,
} from '@mui/icons-material'
import { Box, Theme, Typography, useTheme } from '@mui/material'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div<{ theme: Theme }>`
    grid-area: sidebar;
    padding: 20px 20px 10px 20px;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ButtonLink = styled.a<{ $active: boolean; theme: Theme }>`
    border: none;
    outline: none;
    background: ${({ $active, theme }) =>
        $active
            ? `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
            : '#144c2340'};
    box-shadow: ${({ $active }) =>
        $active ? '0px 0px 8px black !important' : 'none'};
    color: white;
    padding: 5px 12px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.5s;
    &:hover {
        box-shadow: 0px 0px 10px ${({ theme }) => theme.palette.primary.main};
    }
`

export default function Sidebar() {
    const theme = useTheme()
    const location = useLocation()
    const circularImage = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    }

    return (
        <Container theme={theme}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src='https://via.placeholder.com/100x100'
                        alt='Logo da AREFAS'
                        style={circularImage}
                    />
                    <Typography variant='h6'>John Doe</Typography>
                </Box>
                <Box>
                    <ButtonLink
                        theme={theme}
                        href='#/dashboard/members'
                        $active={location.pathname === '/dashboard/members'}
                        className='mt-3'
                    >
                        <Diversity3Rounded /> Associados
                    </ButtonLink>
                    <ButtonLink
                        theme={theme}
                        href='#/dashboard/members-form'
                        $active={
                            location.pathname === '/dashboard/members-form'
                        }
                        className='mt-3'
                    >
                        <ListAltRounded /> Ficha
                    </ButtonLink>
                    <ButtonLink
                        theme={theme}
                        href='#/dashboard/users'
                        $active={location.pathname === '/dashboard/users'}
                        className='mt-3'
                    >
                        <PeopleAltRounded /> Usuários
                    </ButtonLink>
                </Box>
            </Box>
            <Box>
                <Typography sx={{ fontSize: '12px' }}>
                    © 2024 – Developed by <a href='#'>VANSISTEM</a>
                </Typography>
            </Box>
        </Container>
    )
}
