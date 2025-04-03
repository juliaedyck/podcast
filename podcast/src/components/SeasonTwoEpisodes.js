import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import James from "../photos/james_2.jpg";
import Square1 from "../photos/squares/8.jpg";
import Square2 from "../photos/squares/11.jpg";
import Square3 from "../photos/squares/36.jpg";

const SeasonTwoEpisodes = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

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
            <Heading> SEASON 2</Heading>

            <StyledLink
              onClick={() =>
                newWindow(
                  "https://phi.ca/en/events/habitat-sonore-a-kind-of-harmony/#schedule"
                )
              }
              target="_blank"
            >
              Produced in immersive multichannel for the PHI Centre's Habitat
              Sonore
            </StyledLink>
            <Des>
              Season 2 explores sound in the context of its social, political,
              and environmental implications. This series of immersive
              conversations investigate the ways that sound and listening can
              shape and inform our daily interactions.
            </Des>
            <br></br>
            <Des>
              Through six interviews and accompanying sound pieces, hosts Julia
              and Amanda invite us to reconsider our relationship with sound;
              how can we resonate with what’s around us?
            </Des>
            <br></br>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 1:</Heading>

            <StyledNavLink to="/Amanda">
              Amanda Gutierréz, Feminist Sonographies and Decolonial Listening
            </StyledNavLink>

            <Des>
              {" "}
              Amanda describes her soundwalking practice from a decolonial and
              feminist approach{" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 2:</Heading>

            <StyledNavLink to="/Chantal">
              Chantal Dumas, publique et intime
            </StyledNavLink>

            <Des>
              {" "}
              Chantal partage sa connaissance de la perception et de
              l'interaction avec l'espace public, ainsi que ses recherches sur
              les sons de refuge.{" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 3:</Heading>

            <StyledNavLink to="/Rehab">
              Rehab Nazzal, Listening to Occupation and Sounding Resistance
            </StyledNavLink>

            <Des>
              {" "}
              Rehab describes the sonic environment of living in occupied
              Palestine and discusses sounds of resistance and the implications
              of silence.{" "}
            </Des>
          </EpisodeContainer>

          <EpisodeContainer>
            <Heading> EPISODE 4:</Heading>

            <StyledNavLink to="/Sandra">
              Sandra Volny, sonores matérielles, sensorielles et sociales
            </StyledNavLink>

            <Des>
              {" "}
              Sandra s'intéresse tout particulièrement à ces occurrences où la
              conscience qu’a un individu de son environnement se construit par
              le biais du son. Elle considère l'utilisation des espaces sonores
              comme des vecteurs qui permettent à l'imagination individuelle et
              collective d'émerger.
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
  margin-top: 3%;
  padding-bottom:3%;


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
  color: #162fc3;
  /* margin-top: 2%; */
  margin-bottom: 2%;

  font-size: 20px;

  &:hover {
    color: #9e93f4;
    /* transition: 300ms ease-in-out; */
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  font-family: "DM Serif Display", serif;
  font-style: italic;
  color: #162fc3;
  /* margin-top: 2%; */
  margin-bottom: 2%;

  font-size: 20px;

  &:hover {
    color: #9e93f4;
    /* transition: 300ms ease-in-out; */
    cursor: pointer;
  }
`;

const Img = styled.img`
  max-width: 33%;

  @media (min-width: 768px) {
    height: 33%;
    max-height: 33%;
    max-width: fit-content;
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
  background-color: #ceb2ff;
  overflow-y: scroll;
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
  color: #162fc3;
  margin-bottom: 2%;
  font-size: 20px;
`;

const Des = styled.h2`
  font-family: var(--font-body);
  color: #162fc3;
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

    height: 100vh;
  }
`;

export default SeasonTwoEpisodes;
