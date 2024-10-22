import { Typography, TypographyOwnProps } from '@mui/material'
import '../../../assets/fonts/quantico.ttf'

export default function StyledTitle({
    variant,
    color,
    children,
}: {
    variant: TypographyOwnProps['variant']
    color?: TypographyOwnProps['color']
    children: React.ReactNode
}) {
    return (
        <Typography
            variant={variant}
            sx={{
                fontFamily: '"Quantico", sans-serif !important',
                background: color
                    ? ''
                    : 'linear-gradient(to bottom, #454545, #F9F2DD)',
                WebkitBackgroundClip: color ? '' : 'text',
                WebkitTextFillColor: color ? '' : 'transparent',
                display: 'inline-block',
            }}
        >
            {children}
        </Typography>
    )
}
