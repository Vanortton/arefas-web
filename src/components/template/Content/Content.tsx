import { Outlet } from 'react-router'
import styled from 'styled-components'

const Container = styled.div`
    grid-area: content;
    padding: 20px;
    overflow-y: auto;
`

export default function Content() {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}
