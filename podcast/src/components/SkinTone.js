import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/james_2.jpg";

const SkinTone = () => {
  return (
    <>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
        EPISODE : SKIN TONE
        <Img src={Photo} alt="Skin Tone " />
        audio
        <p>
          skin tone is a solo performance practice; is saxophone, voice, mbira
          and electronics; is an exploration of possible futures; is a space for
          reflection; is an echo of free jazz both spiritual and harsh; is
          black.
        </p>
        <p>
          Reflections on a genre by skin tone (electronics, saxophone, voice,
          chimes){" "}
        </p>
        <p>
          words by: Philippe Carles & Jean-Louis Comolli, Archie Shepp, and
          Roscoe Mitchell.
        </p>
        <p>links</p>
      </Wrapper>
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
export default SkinTone;
