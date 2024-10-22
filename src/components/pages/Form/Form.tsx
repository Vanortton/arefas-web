import { Box } from '@mui/material'
import React from 'react'
import Association from './Sections/Association'
import Buttons from './Sections/Buttons'
import Contact from './Sections/Contact'
import Military from './Sections/Military'
import Personal from './Sections/Personal'

export default function Form() {
    return (
        <React.Fragment>
            <Personal />
            <Box sx={{ my: 3 }} />
            <Military />
            <Box sx={{ my: 3 }} />
            <Contact />
            <Box sx={{ my: 3 }} />
            <Association />
            <Box sx={{ my: 3 }} />
            <Buttons />
        </React.Fragment>
    )
}
