import { SvgIconProps } from '@mui/material'
import React from 'react'

interface GradientIconProps {
    icon: React.ElementType<SvgIconProps>
    gradientColors: [string, string]
}

export const GradientIcon: React.FC<GradientIconProps> = ({
    icon: Icon,
    gradientColors,
}) => {
    const gradientId = `gradient-${gradientColors[0]}-${gradientColors[1]}`

    return (
        <>
            <svg
                width={0}
                height={0}
                style={{ position: 'absolute' }}
            >
                <radialGradient
                    id={gradientId}
                    cx='50%'
                    cy='50%'
                    r='50%'
                    fx='50%'
                    fy='50%'
                >
                    <stop
                        offset='0%'
                        stopColor={gradientColors[0]}
                    />
                    <stop
                        offset='100%'
                        stopColor={gradientColors[1]}
                    />
                </radialGradient>
            </svg>
            <Icon
                sx={{
                    fill: `url(#${gradientId})`,
                    width: '24px',
                    height: '24px',
                }}
            />{' '}
            {/* Definindo largura e altura */}
        </>
    )
}
