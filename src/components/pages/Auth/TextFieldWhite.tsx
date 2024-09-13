import { TextField } from '@mui/material'

export default function TextFieldWhite({ ...props }) {
    return (
        <TextField
            variant='standard'
            color='primary'
            InputLabelProps={{
                style: { color: 'white' },
            }}
            InputProps={{
                style: { color: 'white' },
            }}
            sx={{
                '& .MuiInput-underline:before': {
                    borderBottomColor: 'white',
                },
                '& .MuiInput-underline:hover:before': {
                    borderBottomColor: 'white',
                },
            }}
            {...props}
        />
    )
}
