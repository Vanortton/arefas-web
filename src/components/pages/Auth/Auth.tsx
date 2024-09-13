import { Button } from '@mui/material'
import styled from 'styled-components'
import AREFASLogo from '../../../assets/imgs/arefas.webp'
import BackgroundImage from '../../../assets/imgs/background-army.png'
import StyledTitle from '../../template/StyledTitle/StyledTitle'
import TextFieldWhite from './TextFieldWhite'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BackgroundImage});
    background-repeat: repeat;
    background-size: contain;
    height: 100vh;
`

const GlassBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: transparent;
    backdrop-filter: blur(25px);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    width: calc(100% - 40px);
    max-width: 400px;
    margin: 0px 10px;
`

export default function Auth() {
    return (
        <Container>
            <img
                src={AREFASLogo}
                alt='Logo da AREFAS'
                height={100}
            />
            <StyledTitle
                variant='h2'
                color='white'
            >
                ENTRAR
            </StyledTitle>
            <GlassBox>
                <TextFieldWhite
                    label='Email'
                    type='email'
                    fullWidth
                />
                <TextFieldWhite
                    label='Senha'
                    type='password'
                    fullWidth
                />
                <Button
                    variant='contained'
                    fullWidth
                >
                    Entrar
                </Button>
            </GlassBox>
        </Container>
    )
}
