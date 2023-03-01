import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import James from "../photos/james_2.jpg";
import Square1 from "../photos/squares/square_1_small.png"
import Square2 from "../photos/squares/square_2_small.png"
import Square3 from "../photos/squares/square_3_small.png"


const Episodes = () => {
  return (
    <Background>
        <Close>

      <a href="/">
        <CloseButton aria-label="Hide" />
      </a>
      </Close>
      <Wrapper>
   <Squares>
   <Img src={Square1} alt=" " />
   <Img src={Square2} alt=" " />
   <Img src={Square3} alt=" " />



   </Squares>
        <Scroll>
          <EpisodeContainer>
            <Heading> EPISODE 1:</Heading>
              <Heading> SKIN TONE </Heading>

            <Des> skin tone AKA James Goddard discusses jazz music, improvisation, and their potential social implications. </Des>
            <StyledNavLink to="/SkinTone">LISTEN</StyledNavLink>
          </EpisodeContainer>

          {/* <EpisodeContainer>
          <Heading> EPISODE : ANDREA IYA YOUNG </Heading>
          <Des>a short descripttion </Des>
            <StyledNavLink to="/Andrea">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : BACKXWASH </Heading>
          <Des>a short descripttion </Des>

            <StyledNavLink to="/Backxwash">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : JAMILAH MALIKA ABU-BAKARE </Heading>
          <Des>a short descripttion </Des>

            <StyledNavLink to="/Jamilah">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : JANN TOMARO </Heading>
          <Des>a short descripttion </Des>

            <StyledNavLink to="/Jann">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : OLIVIA </Heading>
          <Des>a short descripttion </Des>

            <StyledNavLink to="/Olivia">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : REBECCA </Heading>
          <Des>a short descripttion </Des>

            <StyledNavLink to="/Rebecca">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : SARAH  </Heading>

          <Des>a short descripttion </Des>

            <StyledNavLink to="/Sarah">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : NICK </Heading>
          <Des>a short descripttion </Des>

            <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
          <Heading> EPISODE : BEVERLY GLENN COPELAND </Heading>
          <Des>a short descripttion </Des>

            <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
          </EpisodeContainer> */}
        </Scroll>

      </Wrapper>
    </Background>
  );
};
const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* overflow: scroll; */
`;
const StyledNavLink = styled(NavLink)`
font-family:  'DM Serif Display', serif;
font-style: italic;
color: var(--color-green);
margin-top: 2%;

&:hover {
    color: var(--color-orange);
    /* transition: 300ms ease-in-out; */
    cursor: pointer;
  }
`;

const Img = styled.img`
  max-width: 30%;

  @media (min-width: 768px) {

    max-height: 255px;
    max-width: 255px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 768px) {
flex-direction: row;
justify-content: space-evenly;
align-items: space-evenly;
max-height: 100vh;

  }
  `;

const Background = styled.div`
height: 100vh;
background-color: var(--color-blue);
overflow:scroll

`
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2%;
  padding-top: 2%;
  z-index: 1000;
  position: absolute;
  right: 0;
`;

const Heading = styled.h1`
font-family:  'DM Serif Display', serif;
font-style: italic;
color: var(--color-green);
margin-bottom: 2%;
`


const Des = styled.h2`
font-family: var(--font-body);
`

const Squares = styled.div`
width: 100%;
max-height: 30%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-bottom: 1%;

@media (min-width: 768px) {
flex-direction: column;
max-height: 100%;
max-width:50%;
  }
`


export default Episodes;
