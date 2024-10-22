import {
    FormControl,
    FormControlProps,
    InputLabel,
    keyframes,
    MenuItem,
    Select as MUISelect,
    SelectProps,
    styled,
} from '@mui/material'

const elasticAnimation = keyframes`
  0% {
    transform: translate(6px, 12px) scale(1);
  }
  80%{
    transform: translate(6px, 14px) scale(1);
  }
  90% {
    transform: translate(6px, 6px) scale(1);
  }
  100% {
    transform: translate(0, -10px) scale(0.85);
  }
`

const StyledFormControl = styled(FormControl)<FormControlProps>(() => ({
    '& .MuiInputLabel-root': {
        color: '#000',
        fontSize: '1rem',
        transform: 'translate(6px, 12px)',
        transition: 'transform 0.2s ease-out, color 0.2s ease-out',
    },
    '& .MuiInputLabel-shrink': {
        animation: `${elasticAnimation} 0.3s ease-out forwards`,
    },
    '& .Mui-focused .MuiInputLabel-root': {
        color: '#000',
    },
}))

const Select = styled(MUISelect)<SelectProps>(() => ({
    background: 'white',
    border: '1px solid #888',
    borderRadius: '0px',
    padding: '0px',
    marginTop: '5px',
    '&:has(> .Mui-disabled)': {
        opacity: 0.5,
    },
    '& .MuiInputBase-input': {
        padding: '6px 12px',
        border: 'none',
        outline: 'none',
        borderRadius: '0px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiSelect-select': {
        padding: '6px 12px',
        backgroundColor: 'white',
    },
    '& .MuiPaper-root': {
        backgroundColor: '#f5f5f5',
        borderRadius: '0px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    '& .MuiMenuItem-root': {
        padding: '6px 12px',
        '&:hover': {
            backgroundColor: '#d9d9d9',
        },
        '&.Mui-selected': {
            backgroundColor: '#bfbfbf',
            '&:hover': {
                backgroundColor: '#a6a6a6',
            },
        },
    },
}))

export default function StyledSelect({ children, ...props }: SelectProps) {
    return (
        <StyledFormControl
            {...(props as FormControlProps)}
            size='small'
        >
            <InputLabel>{props.label}</InputLabel>
            <Select {...props}>
                <MenuItem value=''>Selecione um valor</MenuItem>
                {children}
            </Select>
        </StyledFormControl>
    )
}
