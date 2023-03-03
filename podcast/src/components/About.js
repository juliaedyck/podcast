import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CCALogo from "../photos/CCA_RGB_black_e.png";
import Photo from "../photos/j_a_square.jpg"

const newWindow = (url) => {
  window.open(url, "newwindow");
  return false;
};

const About = () => {
  return (
    <Background>
      <Close>
        <a href="/">
          <CloseButton aria-label="Hide" />
        </a>
      </Close>
      <Wrapper>
      <Img2 src={Photo} alt="Skin Tone " />

        <Des>
          {" "}
          A Kind of Harmony is a project by{" "}
          <StyledLink
            onClick={() => newWindow("https://juliaedyck.com")}
            target="_blank"
          >
            Julia E. Dyck
          </StyledLink>{" "}
          and{" "}
          <StyledLink
            onClick={() => newWindow("https://www.irlhuman.com/")}
            target="_blank"
          >
            Amanda Harvey
          </StyledLink>
          . Since 2016, we’ve been working collaboratively on projects including
          radio productions, sonic experimentations, performances, audio
          documentaries,installations, interventions, and events.
          <Des>
            A Kind of Harmony was made with the generous support from the Canada
            Council for the Arts </Des>
            <Des> Editing by Laura Dickens </Des>
            
            <Des> Mixing and mastering by Evan Vincent    </Des>
         
            <Des>Project management by Christian Scott     </Des>
            <Des>Graphic design
            
            by   <StyledLink
            onClick={() => newWindow("https://mutualdesign.cc/")}
            target="_blank"
          >
           Mutual Design 
          </StyledLink>     </Des>
        
         
          <Des>
          If you’d like to support this project and what we do, please follow us
          on Instagram, or subscribe to our Patreon
          </Des>
        </Des>
        <Logo>
          <Img src={CCALogo} />
        </Logo>
      </Wrapper>
    </Background>
  );
};
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
`;

const Logo = styled.div``;


const Img = styled.img`
  max-height: 70px;
  max-width: 80%;
  padding-bottom: 5%;
  margin-top: 5%;
`;

const Img2 = styled.img`
max-width: 70%;
margin-bottom: 1%;
@media (min-width: 912px) {

max-height: 350px;}
`
const Des = styled.h2`
  font-family: var(--font-body);
  margin-top: 2%;
  color: var(--color-green);

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  height: 90%;

  @media (min-width: 768px) {
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Background = styled.div`
  height: 100vh;
  background-color: #EA75A8;
  overflow: scroll;
`;

const StyledLink = styled.a`
  margin-left: 3px;
  margin-right: 3px;

  color: var(--color-green);;
  &:hover {
    color: var(--color-orange);
    /* transition: 300ms ease-in-out; */
    cursor: pointer;
  }
`;
export default About;
