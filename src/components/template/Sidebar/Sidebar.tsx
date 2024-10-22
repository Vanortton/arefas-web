import {
    Diversity3Rounded,
    KeyboardArrowLeftSharp,
    KeyboardArrowRightSharp,
    ListAltRounded,
    PeopleAltRounded,
} from '@mui/icons-material'
import { Box, Button, Theme, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { GradientIcon } from '../GradientIcon/GradientIcon'
import StyledTitle from '../StyledTitle/StyledTitle'

const Container = styled.div<{ theme: Theme }>`
    grid-area: sidebar;
    position: relative;
    padding: 20px 20px 10px 20px;
    background-color: #101010;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ButtonLink = styled.a<{ $active: boolean; theme: Theme }>`
    border: none;
    outline: none;
    background: ${({ $active }) => ($active ? '#303030' : '#404040')};
    box-shadow: ${({ $active }) =>
        $active
            ? 'inset 3px 3px 8px rgba(0,0,0,0.8), inset -3px -3px 8px rgba(255,255,255,0.1) !important'
            : '3px 3px 8px #000'};
    color: white;
    padding: 5px 12px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s;
    border-radius: 0px;
    position: relative;

    &:hover {
        box-shadow: 0px 0px 10px #ffffff50;
    }
`

export default function Sidebar() {
    const theme = useTheme()
    const location = useLocation()
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const links = [
        {
            title: 'Associados',
            icon: Diversity3Rounded,
            href: '/dashboard/members',
        },
        {
            title: 'Ficha',
            icon: ListAltRounded,
            href: '/dashboard/members/form',
        },
        {
            title: 'Usuários',
            icon: PeopleAltRounded,
            href: '/dashboard/users',
        },
    ]

    return (
        <Container theme={theme}>
            <Box>
                <Box>
                    {links.map((link, index) => (
                        <ButtonLink
                            theme={theme}
                            href={`#${link.href}`}
                            $active={location.pathname === link.href}
                            className='mt-3'
                            key={index}
                        >
                            <GradientIcon
                                icon={link.icon}
                                gradientColors={['#dbdbdb', '#707070']}
                            />
                            {isOpen && (
                                <StyledTitle variant='body1'>
                                    {link.title.toUpperCase()}
                                </StyledTitle>
                            )}
                        </ButtonLink>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '30px',
                    }}
                >
                    <Button
                        variant='contained'
                        onClick={() => setIsOpen(!isOpen)}
                        sx={{
                            borderRadius: '0px !important',
                            minWidth: '0px !important',
                            padding: '6px',
                            backgroundColor: '#303030',
                        }}
                    >
                        {isOpen ? (
                            <KeyboardArrowLeftSharp />
                        ) : (
                            <KeyboardArrowRightSharp />
                        )}
                    </Button>
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
