import styled from 'styled-components'
import Content from '../template/Content/Content'
import Sidebar from '../template/Sidebar/Sidebar'

const Container = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-areas: 'sidebar content';
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

export default function Dashboard() {
    return (
        <Container>
            <Sidebar />
            <Content />
        </Container>
    )
}
