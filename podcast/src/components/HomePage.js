import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../photos/AKOH Banner Square.png"

const HomePage = () => {

    return (

    
    <Wrapper>
    <Links>
    <StyledNavLink to="/About">   ABOUT</StyledNavLink>
    <StyledNavLink to="/Episodes">EPISODES</StyledNavLink>
    </Links>
    <Img src = {Background}/>

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
/* position: relative; */
/* z-index: -10; */

@media (min-width: 500px) {
  /* z-index: -5000;
position: relative; */
  }
`

const Img = styled.img`
  /* height: 100%; */
  width: 80%;
  margin-top: 3%;
  /* width: 1440; */

  @media (min-width: 500px) {
 width: 70%;
 max-height: 100vh;
/* width: auto; */
margin: 0;
 /* z-index: -1;
 position: fixed; */
  }
  @media (min-width: 912px) {
 /* width: 100%; */
 max-height: 100vh;
 max-width: 50%;
 margin: 0;
 /* z-index: -1;
 position: fixed; */
  }

`
const Links = styled.div`
display: flex;
flex-direction: row;
align-items: space-between;
justify-content: space-between;
width: 80%;

@media (min-width: 500px) {
 /* z-index: -1;
 position: fixed; */
 width: 70%;
  }

@media (min-width: 900px) {
margin-left: 1.5%;
 z-index: 1000;
 position: fixed;



  }
`

const StyledNavLink = styled(NavLink)`

text-decoration: none;
font-family:  'DM Serif Display', serif;
font-style: italic;
color: var(--color-green);
font-size: 20px;
&:hover {
    color: var(--color-orange);
  }

  @media (min-width: 768px) {
  font-size: 26px;
  }

  @media (min-width: 900px) {
 z-index: 1000;
 position: sticky;
color: var(--color-green);

  }
`


export default HomePage;
