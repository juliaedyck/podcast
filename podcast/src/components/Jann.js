import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/jann.jpg";
import PDF from "../components/transcripts/A Kind of Harmony Ep.3 Jann Tomaro_transcript.pdf";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Jann = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/0uLy51N524BGtBQbe5jKp8?utm_source=generator";

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
          <Heading>EPISODE 3: JANN TOMARO</Heading>
          <Img src={Photo} alt="Jann Tomaro " />

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
            Jann Tomaro is a doctoral candidate at McGill University in
            Counselling Psychology, participating in research via the Social
            Justice and Diversity Lab. Her research and clinical interests lie
            in the socio-political factors that influence mental health, as well
            as access to care.
          </Des>
          <Des>
            In 2016 Tomaro began organizing and curating <i>Practice</i>, an
            experimental sound and meditation series. <i>Practice</i> is an
            investigation of the capability of sound and listening practices to
            induce different states of awareness and being. Exploring
            transformational properties of sound and fostering listening
            experiences for individuals within a group context is at the heart
            of practice. This project is undergirded by burgeoning literature on
            music and listening practices, which demonstrates positive mental
            health outcomes through relaxation, pleasure, mindfulness, and
            reflexivity. Most importantly, <i>practice</i> is a series that
            works with musicians and draws from the unique knowledge that
            artists hold about sound, listening, and connection.
          </Des>
          <Transcript href={PDF} target="blank">
            {" "}
            TRANSCRIPTION
          </Transcript>
          <Des>photo by Saad Al-Hakkak</Des>
          <Des>
            {" "}
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
  background-color: var(--color-orange);
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
export default Jann;
