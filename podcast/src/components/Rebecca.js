import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/rebecca square.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Ep.9_Rebecca.pdf"


const Rebecca = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl ="https://open.spotify.com/embed/episode/1mErFClD7EjvH1wa4Vt2ve?utm_source=generator"



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
        <Heading>EPISODE 9: REBECCA MANANKIL</Heading>
        <Img src={Photo} alt="Rebecca Manankil" />
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
          Rebecca Manankil is a multidisciplinary healer based in the unceded
          territory of many nations including the Mississaugas of the Credit,
          the Anishinabek, the Chippewa, the Haudenosaunee and the Wendat.
          Rebecca serves her community through her alternative medicine
          practice, Inspire and Instruct, where she guides others to become
          experts in self healing. 
        </Des>
        <Des>
        What makes Rebecca a multidisciplinary healer
          is the wide variety of alternative medicine modalities she offers to
          her recipients that cater to the mind, body and spirit. Her mission is
          to partner with her clients to explore different healing practices and
          create a holistic wellness regimen that resonates so deeply it is no
          longer a routine, but a lifestyle. Sound healing is a traditional
          practice used by many cultures that allows intention to be channeled
          through the vibrations of sound created by specialized instruments and
          the voice. This creates deep cellular healing in the physical body,
          while bringing harmony to energetic and mental bodies. Through Human
          Design, an incredible system that incorporates ancient wisdom with
          modern science, Rebecca uses your birthdate, time and location to
          unlock the codes of stored your DNA that formulate your highest
          potential. For those looking to get out of their mind and into their
          body, Yoga is utilized as a sacred movement to align your breath with
          form to create balance - both on and off the mat. For those seeking
          spiritual guidance, cartomancy is used as a divination tool to find
          clarity; while past life regression hypnotherapy explores the root of
          deep seeded issues in the psyche so her clients can evolve from those
          challenges. 
        </Des>
        <Des>
        As a Filipina womxn, Rebecca is committed to shifting the
          spiritual paradigm within the wellness industry. By sharing
          traditional knowledge and unique wellness modalities, she creates
          spaces for healing to happen. Rebecca finds her purpose by inspiring
          and instructing others to courageously step into the highest version
          of themselves - from soul to surface
        </Des>
        <Des>
        <StyledLink
            onClick={() =>
              newWindow("https://www.rebeccamanankil.com/")
            }
            target="_blank">
              www.RebeccaManankil.com</StyledLink>
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
export default Rebecca;
