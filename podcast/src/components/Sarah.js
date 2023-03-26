import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/sarah_square_compressed.jpg";
import { Link } from "react-router-dom";



const Sarah = () => {
  return (
    <>
    <Background>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
        <Heading>EPISODE 2: SARAH FELDMAN </Heading>
        <Img src={Photo} alt="Sarah Feldman" />
    <Heading> COMING 29.03.2022 </Heading>
        <Des>
          Sarah Feldman is a pop singer, songwriter & producer, and a music
          education content creator. She holds a degree in Electroacoustics and
          Music Composition from Concordia University.
        </Des>

        <Des>find Sarah on <StyledLink to ="https://www.instagram.com/sarah_feldman_"  target ="blank">instagram </StyledLink></Des>
    
        <Des>photo by Sam Garritano</Des>
      </Wrapper>
      </Background>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;

  @media (min-width: 768px) {
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Heading = styled.h1`
font-family:  'DM Serif Display', serif;
font-style: italic;
color: var(--color-green);
margin-bottom: 2%;
font-size: 20px;
`
const StyledLink = styled(Link)`
  margin-left: 3px;
  margin-right: 3px;

  color: var(--color-green);
  &:hover {
    color: var(--color-orange);
    /* transition: 300ms ease-in-out; */
    cursor: pointer;
  }
`;

const Des = styled.h2`
font-family: var(--font-body);
margin-bottom: 2%;
padding-left: 5%;
padding-right: 5%;
color: var(--color-green);
font-size: 18px;
`

const Img = styled.img`
  max-width: 50%;
  margin-top: 2%;
  margin-bottom: 2%;
  @media (min-width: 768px) {
    max-width: 30%;
  }
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
`;

const Background = styled.div`

height: 100vh;
background-color: var(--color-blue);
overflow:scroll;`


export default Sarah;
