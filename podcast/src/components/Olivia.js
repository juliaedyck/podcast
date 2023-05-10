import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/olivia.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Olivia_transcription.pdf"

const Olivia = () => {

   const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl ="https://open.spotify.com/embed/episode/4amWsMNyW1RV9WcWQvYM2N?utm_source=generator"


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
       <Heading> EPISODE 7: OLIVIA DREISINGER</Heading>
        <Img src={Photo} alt="Olivia Dreisinger " />
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
        
          Olivia Dreisinger (b. 1991) is a disability scholar, filmmaker, and
          writer. Her own fluctuating abilities often dictate how she produces
          work—a process that regularly leads her to new and generative mediums
          to explore. Her work has been supported by Canada Council for the Arts
          and BC Arts Council. In 2021, she received the Emerging Digital Artist
          Award from EQ Bank. Currently, she is pursuing a PhD at the University
          of British Columbia in the Rhetoric of Health and Medicine. 
          </Des>
   <Des>
          <StyledLink
              onClick={() =>
                newWindow("https://oliviadreisinger.com/")
              }
              target="_blank"
            > oliviadreisinger.com</StyledLink>
          </Des>
<Des>

        Image
          Description: A selfie of Olivia standing in her living room. She is
          using an Instagram filter that envelops her body in CG flames. She
          holds the phone camera high above her head, her face smiling softly
          into her phone. She is a youngish white woman and her dark brown hair
          is pulled back into a ponytail.
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

export default Olivia;
