import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import James from "../photos/james_2.jpg";

const Episodes = () => {
  return (
    <>
        <Close>

      <a href="/">
        <CloseButton aria-label="Hide" />
      </a>
      </Close>
      {/* <Container> */}
      <Wrapper>
        {/* <Row> */}
        {/* <Col>1 of 2</Col> */}
        {/* <Col>  */}
        <Scroll>
          <EpisodeContainer>
            <h1> EPISODE : SKIN TONE </h1>

            {/* <Img src = {James}/> */}
            <h2>a short descripttion </h2>
            <StyledNavLink to="/SkinTone">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE : ANDREA IYA YOUNG </h1>
            <h2>a short descripttion </h2>
            <StyledNavLink to="/Andrea">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE : BACKXWASH </h1>
            <h2>a short description </h2>
            <StyledNavLink to="/Backxwash">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE : JAMILAH MALIKA ABU-BAKARE </h1>
            <h2>a short description </h2>
            <StyledNavLink to="/Jamilah">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE : JANN TOMARO </h1>
            <h2>a short description </h2>
            <StyledNavLink to="/Jann">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE : OLIVIA </h1>
            <h2>a short description </h2>
            <StyledNavLink to="/Olivia">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE : REBECCA </h1>
            <h2>a short description </h2>
            <StyledNavLink to="/Rebecca">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE : SARAH </h1>
            <h2>a short description </h2>
            <StyledNavLink to="/Sarah">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE 9 : NICK </h1>
            <h2>a short description </h2>
            <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
          </EpisodeContainer>

          <EpisodeContainer>
            <h1> EPISODE 9 : NAME </h1>
            <h2>a short descripttion </h2>
            <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
          </EpisodeContainer>
        </Scroll>
        {/* </Col> */}
        {/* </Row> */}
      </Wrapper>
      {/* </Container> */}
    </>
  );
};
const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
`;

const Scroll = styled.div`
  /* display: flex; */
  /* height: 100%;
width: 50%; */
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledNavLink = styled(NavLink)``;

const Img = styled.img`
  max-width: 40%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5%;
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
`;

export default Episodes;
