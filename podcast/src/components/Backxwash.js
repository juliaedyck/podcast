import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/backxwash.jpg";
import PDF from "../components/transcripts/A Kind of Harmony_Backxwash_Transcript.pdf"
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";

const Backxwash = () => {

  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl ="https://open.spotify.com/embed/episode/0rO2An4FV7ZJbbC9bbdhHk?utm_source=generator"


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
       <Heading>EPISODE 5: BACKXWASH</Heading> 
        <Img src={Photo} alt="Backxwash " />
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
          Backxwash aka Ashanti Mutinta is a Zambian-Canadian rapper & producer
          based in Montreal, Quebec. She is most noted for her 2020 Polaris
          Music Prize-winning album <i>God Has Nothing To Do With This Leave Him
          Out Of It</i>.
          </Des>
          <Des>
          Her work is based in the horrorcore, hip-hop and industrial metal
          genres, and includes a culmination of themes around the intersection
          between faith, identity, and queerness. The poetry of her lyrics are
          the beginning of a cathartic healing process in which she is granting
          herself permission to be angry.
          </Des>
          <Des>
          In 2021 Backxwash released her 3rd album titled <i>I LIE HERE BURIED WITH
          MY RINGS AND MY DRESSES</i> and announced that it would be the second
          album in a trilogy. Whereas God Has Nothing was a study in mercy &
          forgiveness and provided some semblance of hope, I LIE HERE BURIED
          presents Backxwash finding solace in being completely consumed by her
          malevolent behaviors.
          </Des>
          <Des>
          Her latest album <i> HIS HAPPINESS SHALL COME FIRST EVEN THOUGH WE ARE
          SUFFERING </i> (2022) is the final LP in the trilogy. It is entirely
          self-produced and includes instrumental and vocal features by
          Morgan-Paige, Pupil Slicer, Michael Go, Censored Dialogue, Sadistik,
          and Ghais Guevara.
          </Des>
          <Transcript href = {PDF} target= "blank"> TRANSCRIPTION</Transcript> 
  <Des>photo by Méchant Vaporwave</Des>
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
  background-color: var(--color-orange);
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
export default Backxwash;
