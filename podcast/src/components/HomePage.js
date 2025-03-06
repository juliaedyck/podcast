import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../photos/12.jpg"

const HomePage = () => {

    return (

    
    <Wrapper>
    <Img src = {Background}/>
    <Links>
    <StyledNavLink to="/Episodes">SEASON 1</StyledNavLink>
    <StyledNavLink to="/SeasonTwo">SEASON 2</StyledNavLink>

    <StyledNavLink to="/About">   ABOUT</StyledNavLink>
    </Links>

    </Wrapper>
    )
}
const Wrapper = styled.div`
max-width: 100%;
height: 100vh;
background-color: #cdacfb;

color: var(--color-green);
font-family: var(--font-body);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* position: relative; */
/* z-index: -10; */

@media (min-width: 900px) {
  /* z-index: -5000;
position: relative; */
align-items:flex-start;
  }
`

const Img = styled.img`
  /* height: 100%; */
  display: block;
  width: 80%;
  height: auto;
  margin-top: 3%;
  object-fit: contain;


  @media (min-width: 500px) {
 width: 70%;
 height: auto;
 max-width: 500px;
 max-height: 100vh;
margin: 0;

  }
  @media (min-width: 912px) {

 max-width: 50%;
 height: auto;
 margin: 0;

  }

`
const Links = styled.div`
display: flex;
flex-direction: row;
align-items: space-between;
justify-content: space-between;
width: 80%;
margin-top: 5%;

@media (min-width: 500px) {
 /* z-index: -1;
 position: fixed; */
 width: 77%;
 
  }

@media (min-width: 900px) {
 z-index: 1000;
 position: fixed;
flex-direction: column;
margin-left: 60%;
width: fit-content;
margin-top: 0%;




  }
`

const StyledNavLink = styled(NavLink)`

text-decoration: none;
font-family:  'DM Serif Display', serif;
font-style: italic;
color:  #162fc3;
font-size: 22px;
&:hover {
    color:  #9e93f4;
  }

  @media (min-width: 768px) {
  font-size: 28px;
  }

  @media (min-width: 900px) {
 z-index: 1000;
 position: sticky;
color: var(--color-green);

  }
`


export default HomePage;
