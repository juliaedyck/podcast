import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../photos/logo.PNG"


const HomePage = () => {

    return (

    
    <Wrapper>
    {/* <p> <Italic><i>a</i> </Italic> KIND <Italic><i>of</i></Italic></p> <p> HARMONY </p> */}
    <Img src = {Logo} />
<p>coming soon..</p>
    {/* <StyledNavLink to="/About">ABOUT</StyledNavLink>
    <StyledNavLink to="/Episodes">EPISODES</StyledNavLink> */}

    </Wrapper>
    )
}
const Wrapper = styled.div`
max-width: 100%;
height: 100vh;
background-color: var(--color-blue);
color: var(--color-green);
font-family: var(--font-body);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const Img = styled.img`
max-width: 80%;
margin-bottom: 2%;
`

const Italic = styled.span`
font-family: var(--font-heading);

`

const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: var(--color-blue);
&:hover {
    color: white;
  }

`


export default HomePage;
