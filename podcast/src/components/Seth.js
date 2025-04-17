import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/seth.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Andrea_Transcript.pdf";

const Seth = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/7bHDJEhEw320zpL4BjstxB?utm_source=generator";

  return (
    <>
      <Background>
        <a href="SeasonTwo">
          <Close>
            {" "}
            <CloseButton aria-label="Hide" />
          </Close>
        </a>

        <Wrapper>
          <Heading>
            {" "}
            EPISODE 6: Seth Cardinal Dodginghorse, Land and radio waves
          </Heading>
          <Img src={Photo} alt=" Seth Cardinal Doginghorse" />

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
            Seth Cardinal Dodginghorse is a multidisciplinary artist, Prairie
            Chicken Dancer, experimental musician, and cultural researcher. They
            grew up eating dirt and exploring the forest on their family’s
            ancestral land on the Tsuut’ina Nation. In 2014, their family was
            forcibly removed from their homes and land for the construction of
            the Southwest Calgary Ring Road. This life changing event has been
            the focus of their creative work. [In this interview] Seth shares
            their practice of translating displacement into performance, and
            dreaming through pirate radio
          </Des>
          <Des>
            Seth Cardinal Dodginghorse is currently a part of the artist
            collective tīná gúyáńí (Deer Road) which also includes their mother,
            Glenna Cardinal. tīná gúyáńí was longlisted for the Sobey Art Award
            in 2022. 
          </Des>
    

       
          {/* <Transcript href={PDF} target="blank">
            {" "}
            TRANSCRIPTION
          </Transcript> */}
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
  color: #3736a3;
  margin-bottom: 2%;
  font-size: 20px;
`;

const Des = styled.h2`
  font-family: var(--font-body);
  margin-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
  color: #3736a3;
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
    padding-left: 10%;
    padding-right: 10%;
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
  background-color:#e4cdff;
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
  color: #3736a3;
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

  color: #3736a3;
  &:hover {
    color: #9e93f4;
    /* transition: 300ms ease-in-out; */
    cursor: pointer;
  }
`;
export default Seth;
