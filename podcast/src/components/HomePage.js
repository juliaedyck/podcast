import { NavLink } from "react-router-dom";
import styled from "styled-components";


const HomePage = () => {

    return (

    
    <>
    <p> a kind of harmony </p>
    <StyledNavLink to="/About">ABOUT</StyledNavLink>
    <StyledNavLink to="/Episodes">EPISODES</StyledNavLink>

    </>
    )
}

const StyledNavLink = styled(NavLink)`
`


export default HomePage;
