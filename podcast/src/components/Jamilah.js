import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/jamilah_square.jpg";
import { Link } from "react-router-dom";
import PDF from "../components/transcripts/A Kind of Harmony Ep.4_Jamilah Malika Abu-Bakare_transcript.pdf"
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";

const Jamilah = () => {

  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl ="https://open.spotify.com/embed/episode/1SAQ3djsWCXAFLksTzRnjo?utm_source=generator"


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
     <Heading>EPISODE 4: JAMILAH MALIKA ABU-BAKARE</Heading>   
        <Img src={Photo} alt="Jamilah malika abu-bakare " />
        <IFrameMobile
            src={embedUrl}
            className="iframe"
            title="a Kind of Harmony"
            frameBorder="0"
            wmode="transparent"
            ratio="8:1"
            style={{
              position: "relative",
              border: "0",
              width: "100%",
              height: "150px",
            }}
            data-name="pb-iframe-player"
          />

          <IFrameDesk
            src={embedUrl}
            className="iframe"
            title="a Kind of Harmony"
            frameBorder="0"
            wmode="transparent"
            ratio="8:1"
            style={{
              position: "relative",
              border: "0",
              width: "30%",
              height: "150px",
            }}
            data-name="pb-iframe-player"
          />
        <Des>
          jamilah malika abu-bakare is an artist and writer contemplating
          refusal, repetition, dedication, and intimacy through sound art, video
          essay, text off-page and/or installation. whatever the form, she
          centers Black women with care and puts on listening before looking. by
          doing so, both jamilah and the audience move towards their collective
          freedom. her work has played or shown from Sweden to LA, and across
          Canada, including Contemporary Field Gallery (Vancouver,) Circuit
          Gallery (Toronto), and Artscape (Peterborough). her writing most
          recently appeared in Canadian Art magazine. her first curatorial
          project AURAL ALTERITIES is on view at 
          
          <StyledLink
              onClick={() =>
                newWindow("https://www.auralalterities.com/")
              }
              target="_blank"
            >
            www.auralalterities.com.
            </StyledLink>
            </Des>
            <Transcript href = {PDF} target= "blank"> TRANSCRIPTION</Transcript> 
<Des>
            <StyledLink
              onClick={() =>
                newWindow("https://www.instagram.com/akindofharmony/")
              }
              target="_blank"
            >
              <BsInstagram />
            </StyledLink>
            <StyledLink
              onClick={() =>
                newWindow("https://www.patreon.com/aKindofHarmony")
              }
              target="_blank"
            >
              <RiPatreonLine />
            </StyledLink>
            </Des>
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

const Heading = styled.h1`
  font-family: "DM Serif Display", serif;
  font-style: italic;
  color: var(--color-green);
  margin-bottom: 2%;
  font-size: 20px;
`;
const StyledLink = styled.a`
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
`;

const Background = styled.div`
  height: 100vh;
  background-color: var(--color-blue);
  overflow: scroll;
`;


const IFrameMobile = styled.iframe`
  @media (min-width: 768px) {
display: none;
  }
`

const IFrameDesk = styled.iframe`
padding-bottom: none;
margin-bottom: none;
  @media (max-width: 768px) {
display: none;
  }
`

const Transcript = styled.a`
font-family:  'DM Serif Display', serif;
font-style: italic;
color: var(--color-green);
margin-bottom: 2%;
margin-top: 2%;
font-size: 20px;

&:hover {
    color: var(--color-pink);
  }
`
export default Jamilah;
