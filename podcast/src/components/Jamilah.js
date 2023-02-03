import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/jamilah.jpg";

const Jamilah = () => {
  return (
    <>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
        EPISODE : JAMILAH MALIKA ABU-BAKARE
        <Img src={Photo} alt="Jamilah malika abu-bakare " />
        audio
        <p>
          jamilah malika abu-bakare is an artist and writer contemplating
          refusal, repetition, dedication, and intimacy through sound art, video
          essay, text off-page and/or installation. whatever the form, she
          centers Black women with care and puts on listening before looking. by
          doing so, both jamilah and the audience move towards their collective
          freedom. her work has played or shown from Sweden to LA, and across
          Canada, including Contemporary Field Gallery (Vancouver,) Circuit
          Gallery (Toronto), and Artscape (Peterborough). her writing most
          recently appeared in Canadian Art magazine. her first curatorial
          project AURAL ALTERITIES is on view at auralalterirites.com.
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
export default Jamilah;
