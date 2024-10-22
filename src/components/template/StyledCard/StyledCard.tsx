import { Card } from '@mui/material'

export default function StyledCard({ children }: any) {
    return (
        <Card
            sx={{
                backgroundColor: '#BFBFBF',
                border: 'none',
                boxShadow: '6px 6px 0px #888',
                borderRadius: '0px',
            }}
            elevation={0}
        >
            {children}
        </Card>
    )
}
