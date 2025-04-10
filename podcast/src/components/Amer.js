import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/amer.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Andrea_Transcript.pdf";

const Amer = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/4FvpH8H4X64zXWcPF7EnqB?utm_source=generator";

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
          <Heading> EPISODE 5: AM Kanngieser, Listening as coming to</Heading>
          <Img src={Photo} alt=" Am Kanngieser" />

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
            AM Kanngieser is an award-winning geographer, sound artist and
            Research Fellow in Geography at Royal Holloway University of London.
            Their practice engages listening and attunement to approach how
            people collectively determine conditions of liberation and care in
            the face of ecocide and environmental change. In this interview,
            Kanngieser re-frames listening as a practice that is embodied,
            confrontational, challenging and truly transformative, and discusses
            how one can enter into dialogue with the environment.
          </Des>
          <Des>
            AM Kanngieser is a co-founder of the Institute for Freshwater Fish
            Futures and works in collaboration with Oceania-based anti-colonial
            storytellers, artists and grassroots organizers. They are the author
            of Experimental Politics and the Making of Worlds (2013) and Between
            Sound and Silence: Listening towards Environmental Relations
            (forthcoming), and have written for a range of interdisciplinary
            journals. Their audio work has been commissioned by Documenta 14
            Radio, BBC, ABC Radio National, The Natural History Museum London,
            and Deutschland Radio, amongst many others, and has been reviewed in
            publications including The Wire, Quietus, Transmediale, Outline and
            Art Quarterly.
          </Des>
          <Des>
            Their commissioned soundpiece is an experience of a place, across Nauru, over time.

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
  color: #3b38b1;
  margin-bottom: 2%;
  font-size: 20px;
`;

const Des = styled.h2`
  font-family: var(--font-body);
  margin-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
  color: #3b38b1;
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
  background-color:#cb9efb;
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
export default Amer;
