import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/james_square.jpg";
import PDF from "../components/transcripts/A Kind of Harmony Ep.1 skin tone_transcript.pdf"
import ResponsiveEmbed from "react-responsive-embed";
import JamesAudio from "./players/JamesAudio";

const SkinTone = () => {
  return (
    <Background>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
<Heading> EPISODE 1: SKIN TONE </Heading> 
        <Img src={Photo} alt="Skin Tone " />
        {/* <Heading> COMING 22.03.23</Heading> */}

      <JamesAudio/>
        <Des>
          skin tone is a solo performance practice; is saxophone, voice, mbira
          and electronics; is an exploration of possible futures; is a space for
          reflection; is an echo of free jazz both spiritual and harsh; is
          black.
        </Des>
        <Des>
          Reflections on a genre by skin tone (electronics, saxophone, voice,
          chimes){" "}
  <br></br>
          words by: Philippe Carles & Jean-Louis Comolli, Archie Shepp, and
          Roscoe Mitchell.
      
        </Des>
        {/* <p>links</p> */}
        <Transcript href = {PDF} target= "blank"> TRANSCRIPTION</Transcript> 
     <Des>photo by Ariel Bader-Shamai</Des>
     </Wrapper>
    </Background>
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
font-family:  'DM Serif Display', serif;
font-style: italic;
color: var(--color-green);
margin-bottom: 2%;
font-size: 20px;
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

const Des = styled.h2`
font-family: var(--font-body);
margin-bottom: 2%;
padding-left: 5%;
padding-right: 5%;
color: var(--color-green);
font-size: 18px;
`

const Background = styled.div`

height: 100vh;
background-color: var(--color-orange);
overflow:scroll;`

export default SkinTone;
