import { keyframes, styled, TextField, TextFieldProps } from '@mui/material'

// Animação de elástico
const elasticAnimation = keyframes`
  0% {
    transform: translate(6px, 10px) scale(1);
  }
  80%{
    transform: translate(6px, 12px) scale(1);
  }
  90% {
    transform: translate(6px, 6px) scale(1);
  }
  100% {
    transform: translate(0, -16px) scale(0.85);
  }
`

const Input = styled(TextField)<TextFieldProps>(() => ({
    background: 'white',
    border: '1px solid #888',
    borderRadius: '0px',
    padding: '0px',
    marginTop: '5px',
    '&:has(> .Mui-disabled)': {
        opacity: 0.5,
    },
    '& .MuiInputBase-input': {
        padding: '6px 10px',
        border: 'none',
        outline: 'none',
        borderRadius: '0px',
    },
    '& .MuiInputLabel-root': {
        color: '#000',
        transform: 'translate(6px, 6px)',
        fontSize: '1rem',
        transition: 'transform 0.2s ease-out, color 0.2s ease-out',
    },
    '& .MuiInputLabel-shrink': {
        animation: `${elasticAnimation} 0.3s ease-out forwards`,
        color: '#000',
    },
    '& .Mui-focused .MuiInputLabel-root': {
        color: '#000',
    },
    '& fieldset': {
        border: 'none !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}))

export default function StyledInput({ type, ...props }: TextFieldProps) {
    return (
        <Input
            type={type}
            {...props}
        />
    )
}
