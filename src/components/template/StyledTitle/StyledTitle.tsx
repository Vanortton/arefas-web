import { Typography, TypographyOwnProps } from '@mui/material'
import '../../../assets/fonts/army-rust.ttf'

export default function StyledTitle({
    variant,
    color,
    children,
}: {
    variant: TypographyOwnProps['variant']
    color: string
    children: React.ReactNode
}) {
    return (
        <Typography
            variant={variant}
            sx={{
                fontFamily: '"Army Rust", sans-serif !important',
                color: color,
            }}
        >
            {children}
        </Typography>
    )
}
