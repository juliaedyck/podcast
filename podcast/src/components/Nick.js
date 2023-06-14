import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/nick.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Nick_Dourado_Transcript.pdf";

const Nick = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/11q9JphSSP1ZnkSeKUwcW2?utm_source=generator";

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
          <Heading> EPISODE 8: NICK DOURADO </Heading>
          <Img src={Photo} alt=" NICK DOURADO" />

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
            In this episode we spoke with Nicholas Dourado. They are a composer,
            artist and scientist whose work represents the confluence of their
            Konkani heritage, childhood study in European impressionist and
            romantic piano, graduate degree in engineering and ocean acoustics,
            and varied experience as a working creative musician.
          </Des>
          <Des>
            Nick is a disciple and faculty member of the Creative Music
            Workshop; a programme developed by Jerry Granelli that teaches
            embodiment and listening as the fundamentals of music. They have
            modelled their band, Budi, closely after Granelli's esteemed
            ensembles that expand upon bebop and free jazz to include acoustic
            and synthetic voices and contemporary musical ideas.
          </Des>
          <Des>
            They have been touring and recording with a revolving cast of
            musicians, supporting new-age music pioneer Beverly Glenn-Copeland;
            as well as, Lido Pimienta, Aquakultre, Fiver and Special Costello.
            Their productions have been celebrated with numerous nominations for
            the Polaris Music Prize. They have been invited to showcase their
            music internationally as well at major festivals, including Suoni,
            Montreal Jazz Festival and Le Guess Who Festival. They have gone on
            to found the Khyber Sound Club as well as Whole Sound Artist
            Development.
          </Des>

          <Des>
          Nick's sound piece is titled Beyond a New Day
          </Des>
          <Transcript href={PDF} target="blank">
            {" "}
            TRANSCRIPTION
          </Transcript>
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
`;

const IFrameDesk = styled.iframe`
  padding-bottom: none;
  margin-bottom: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Transcript = styled.a`
  font-family: "DM Serif Display", serif;
  font-style: italic;
  color: var(--color-green);
  margin-bottom: 2%;
  margin-top: 2%;
  font-size: 20px;

  &:hover {
    color: var(--color-pink);
  }
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
export default Nick;
