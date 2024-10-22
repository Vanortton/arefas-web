import styled from 'styled-components'
import Content from '../template/Content/Content'
import Header from '../template/Header/Header'
import Sidebar from '../template/Sidebar/Sidebar'

const Container = styled.div`
    display: grid;
    grid-template-areas: 'header header' 'sidebar content';
    grid-template-rows: auto 1fr;
    grid-template-columns: 250px 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

export default function Dashboard() {
    return (
        <Container>
            <Header />
            <Sidebar />
            <Content />
        </Container>
    )
}
