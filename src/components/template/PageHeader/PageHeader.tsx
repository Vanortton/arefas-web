import { Box, Paper, Typography, useTheme } from '@mui/material'

type PageHeaderProps = {
    icon: JSX.Element
    title: string
}

export default function PageHeader({ icon, title }: PageHeaderProps) {
    const theme = useTheme()

    return (
        <Paper
            className='px-2 py-1 d-flex flex-wrap gap-2 mb-3'
            sx={{
                backgroundColor: theme.palette.primary.dark,
                color: 'white',
            }}
        >
            <Box className='d-flex gap-2'>
                {icon} <Typography>{title}</Typography>
            </Box>
        </Paper>
    )
}
