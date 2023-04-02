import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"


const Header = styled.header`
line-height: 100px;
color:#fff;
background:#1d1d20;
h1{
    font-size:20px;
    font-weight:700;
}
nav{
    display:flex;
    gap: 30px;
    justify-content: flex-start;
}
`
const Inner_F = styled.div`
display:flex;
justify-content: space-between;

width:1200px;
margin:0 auto;
`


const Layout = () => {
    return (
        <>
            <Header>
                <Inner_F>
                    <h1>
                        <Link to="/"> Redux TODO List</Link>
                    </h1>
                    <nav>
                        <Link to='/'>home</Link> &nbsp;&nbsp;
                        <Link to='/board'>board</Link>&nbsp;&nbsp;
                        <Link to='/write'>write</Link>
                    </nav>
                    <div class="bars">
                        <i class="xi-bars"></i>
                    </div>
                </Inner_F>
            </Header>
            <Outlet />
        </>
    )
}

export default Layout