import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import James from "../photos/james_2.jpg";
import Square1 from "../photos/squares/square_1_small.jpg";
import Square2 from "../photos/squares/square_2_small.jpg";
import Square3 from "../photos/squares/square_3_small.jpg";

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

            <StyledNavLink to="/SkinTone"> SKIN TONE</StyledNavLink>

            <Des>
              {" "}
              skin tone AKA James Goddard discusses jazz music, improvisation,
              and their potential social implications.{" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 2: </Heading>
            <StyledNavLink to="/Sarah">SARAH FELDMAN</StyledNavLink>

            <Des>
              Sarah discusses her practice as a musician including production
              process, and her relationship with pop music.{" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 3: </Heading>
            <StyledNavLink to="/Jann"> JANN TOMARO</StyledNavLink>

            <Des>
              Jann speaks to the relationship between sound and the nervous
              system and her practice of listening.
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading>EPISODE 4: </Heading>
            <StyledNavLink to="/Jamilah">
              {" "}
              JAMILAH MALIKA ABU-BAKARE
            </StyledNavLink>
            <Des>
              We spoke with Jamilah about sound as haptic and embodied material
              and how care could be demonstrated through sound, and listening to
              gain agency through systems of power. {" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 5: </Heading>
            <StyledNavLink to="/Backxwash"> BACKXWASH</StyledNavLink>
            <Des>
              We spoke with Backxwash about her practice as a musician. We
              discussed sound as a decolonial force, rage as catharsis and
              sampling as a way to reconnect with lineage & place
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 6: </Heading>
            <StyledNavLink to="/Andrea"> ANDREA IYA YOUNG</StyledNavLink>
            <Des>
              We were curious to speak with Andrea about her practice as a
              hypnotherapist - we discussed the voice as a portal to the
              subconscious and the relationship between sound and trace state.{" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 7: </Heading>
            <StyledNavLink to="/Olivia"> OLIVIA DREISINGER</StyledNavLink>
            <Des>
              Olivia shares her practice as a researcher and podcaster. We
              discuss the intersections of disability and academia as well as
              her unique relationship with sound.{" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 8 : </Heading>
            <StyledNavLink to="/Nick"> NICK DOURADO</StyledNavLink>
            <Des>
              We spoke with Nick about their practice as a musician and
              collaborator. We discussed their time at The Creative Music
              Workshop, the erosion of music literacy, and consciousness
              elevation.
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 9: </Heading>
            <StyledNavLink to="/Rebecca"> REBECCA MANANKIL</StyledNavLink>

            <Des>
              We were curious to speak with Rebecca about her practice as a
              sound healer - we discussed traditional Filipina sound healing
              practices, corporate sound baths and human design.
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 10: </Heading>
            <StyledNavLink to="/Glenn"> BEVERLY GLENN-COPELAND</StyledNavLink>

            <Des>
            We spoke with legendary Canadian/American singer, composer and transgender activist Beverly Glenn-Copeland about his process, making music for future generations and the Universal Broadcasting System.
            </Des>
          </EpisodeContainer>

          {/* 
          <EpisodeContainer>
          <Heading> EPISODE : BEVERLY GLENN COPELAND </Heading>
          <Des>a short descripttion </Des> */}

          {/* <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
          </EpisodeContainer>  */}
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
  margin-top: 5%;
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30%;

  padding-top: 20%;
  padding-bottom: 10%;
  margin-bottom: 7%;
  height: 100vh;

  @media (min-width: 500px) {
    margin-top: 20%;
    padding-top: 20%;
  }

  @media (min-width: 760px) {
    max-width: 700px;
    position: relative;
    margin-left: 50%;
    right: 0;
    /* margin-top: 30%; */
    padding-top: 10%;
  }
  @media (min-width: 1000px) {
    max-width: 700px;
    position: relative;
    margin-left: 50%;
    right: 0;
    padding-top: 5%;
    margin-top: 5%;
  }

  @media (max-width: 376px) {
    padding-top: 20%;
    margin-top: 25%;
  }

  @media (max-width: 300px) {
    padding-top: 20%;
    margin-top: 25%;
  }

  /* @media (min-height: 700px) {
    padding-top: 10%;
    margin-top: 20%;
   
  } */
`;
const StyledNavLink = styled(NavLink)`
  font-family: "DM Serif Display", serif;
  font-style: italic;
  color: var(--color-green);
  /* margin-top: 2%; */
  margin-bottom: 2%;

  font-size: 20px;

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
  padding-bottom: 5%;
  margin-bottom: 5%;

  @media (min-width: 768px) {
    flex-direction: row;
    /* justify-content: space-between; */
    /* align-items: space-between; */
    max-height: 100vh;
    max-width: 100%;
  }
`;

const Background = styled.div`
  height: 100vh;
  max-width: 100%;
  background-color: var(--color-blue);
  overflow: scroll;
`;
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
  font-family: "DM Serif Display", serif;
  font-style: italic;
  color: var(--color-green);
  margin-bottom: 2%;
  font-size: 20px;
`;

const Des = styled.h2`
  font-family: var(--font-body);
  color: var(--color-green);
  font-size: 18px;
`;

const Squares = styled.div`
  width: 100%;
  max-height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 1%;
  position: fixed;
  top: 0;
  margin-top: 2%;

  @media (min-width: 768px) {
    flex-direction: column;
    max-height: 100%;
    max-width: 50%;
    /* position: sticky; */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    margin-top: 0px;
  }
`;

export default Episodes;
