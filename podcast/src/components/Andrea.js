import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/andrea.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Andrea_Transcript.pdf"


const Andrea = () => {

  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl ="https://open.spotify.com/embed/episode/5QfJCJcq8EYaVLpsenNXF3?utm_source=generator"



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
      <Heading> EPISODE 6: ANDREA IYA YOUNG </Heading>
        <Img src={Photo} alt=" Andrea Iya Young" />

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
          Andrea Young is a multi-disciplinary artist, writer, healer and
          gardener living in Potton, Quebec. She is the founder of Young
          Ascension Hypnosis since 2015 and since 2020 The Mystical Order of the
          Infinite Fountain, her own hypnosis lineage and school.
          </Des>
          <Des>
          Her work swims at the intersection of Art x Earth x Spirit and how
          finding trance in that space can elicit or preserve an experience of
          Home.
          </Des>
          <Des>
          She is anchored by life ways of the circumpolar and Pacific regions
          and is of Ukrainian and Mohawk heritage. She was raised on Treaty 4
          lands surrounding the Qu'apelle Valley in the Saskatchewan prairies.
          </Des>

          <Des>Andrea’s sound piece is titled <i>when you listen, they listen back</i></Des>
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

const Heading = styled.h1`
  font-family: "DM Serif Display", serif;
  font-style: italic;
  color: var(--color-green);
  margin-bottom: 2%;
  font-size: 20px;
`;

const Des = styled.h2`
  font-family: var(--font-body);
  margin-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
  color: var(--color-green);
  font-size: 18px;
`;

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
export default Andrea;
