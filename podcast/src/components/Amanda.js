import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/Ep1.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Andrea_Transcript.pdf";

const Amanda = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/0WOhsqPx30WE49ZVyk2Bov?utm_source=generator";

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
          <Heading> EPISODE 1:
Amanda Gutierréz, Feminist Sonographies and Decolonial Listening
 </Heading>
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
            Amanda Gutierréz is an artist and researcher who uses sound and
            performance art to investigate how aural conditions affect everyday
            life. She describes her soundwalking practice from a decolonial and
            feminist approach and shares how oral history, recording and
            producing sound can offer the potential to take back and to resist.
          </Des>
          <Des>
            Trained and graduated initially as a stage designer from The
            National School of Theater (Mexico City). Gutierréz uses sound and
            performance art to investigate how these aural conditions affect
            everyday life. Gutierréz is actively advocating listening practices
            while being one of the board of directors of the World Listening
            Project, formerly working with The Midwest Society of Acoustic
            Ecology, and currently as the scientific comitée of the Red Ecología
            Acústica México.
          </Des>
          <Des>
            Now, she is a Ph.D. student at Concordia University in the
            Department of Art and Humanities. Gutierréz is a recipient of the
            FRQSC Doctoral Award, developing her research-creation,
            Sono-(soro)rities, a multi-year sound studies project in
            collaboration with feminist scholars from Latin America and Canada.
          </Des>

          <Des>
            Amanda’s soundpiece retraces her grandmother's steps while in
            dialogue about indigenous traditions of rootness, and her ancestors'
            experience of migration
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
  color:#3736a3;
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
  background-color: #c9bade;
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
export default Amanda;
