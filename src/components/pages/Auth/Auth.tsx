import { Button } from '@mui/material'
import styled from 'styled-components'
import AREFASLogo from '../../../assets/imgs/arefas.webp'
import BackgroundArmy from '../../../assets/imgs/background-army.png'
import IronTexture from '../../../assets/imgs/iron-texture.jpg'
import StyledTitle from '../../template/StyledTitle/StyledTitle'
import TextFieldWhite from './TextFieldWhite'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BackgroundArmy}),
        linear-gradient(to bottom, #2b4f1524, #2b4f1524);
    background-blend-mode: overlay;
    background-size: 15%, cover;
    background-repeat: repeat;
    height: 100vh;
`

const GlassBox = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${IronTexture}),
        linear-gradient(to bottom, #2d2c2b, #2d2c2b);
    background-blend-mode: overlay;
    background-size: 100%, cover;
    background-repeat: repeat;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        inset 0 -1px 0 rgba(0, 0, 0, 0.4);
    gap: 20px;
    padding: 20px;
    width: calc(100% - 40px);
    max-width: 400px;
    margin: 0px 10px;
    color: #ffffff;
`

export default function Auth() {
    return (
        <Container>
            <img
                src={AREFASLogo}
                alt='Logo da AREFAS'
                height={100}
            />
            <StyledTitle variant='h2'>ENTRAR</StyledTitle>
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
