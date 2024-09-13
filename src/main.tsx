import { createTheme, ThemeProvider } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router.tsx'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1d7331',
            light: '#479e5a',
            dark: '#051308',
            contrastText: '#fff',
        },
        secondary: {
            main: '#000000',
            light: '#000000',
            dark: '#000000',
            contrastText: '#fff',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
                    border: '2px solid rgba(0, 13, 26, 0.25)',
                },
            },
        },
    },
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    </StrictMode>
)
