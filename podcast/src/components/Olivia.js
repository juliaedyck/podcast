import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/Olivia.jpg";

const Olivia = () => {
  return (
    <>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
       <Head> EPISODE : OLIVIA DREISINGER</Head>
        <Img src={Photo} alt="Skin Tone " />
        audio
        <p>
          Olivia Dreisinger (b. 1991) is a disability scholar, filmmaker, and
          writer. Her own fluctuating abilities often dictate how she produces
          work—a process that regularly leads her to new and generative mediums
          to explore. Her work has been supported by Canada Council for the Arts
          and BC Arts Council. In 2021, she received the Emerging Digital Artist
          Award from EQ Bank. Currently, she is pursuing a PhD at the University
          of British Columbia in the Rhetoric of Health and Medicine. 
        </p>
        <p>
        Image
          Description: A selfie of Olivia standing in her living room. She is
          using an Instagram filter that envelops her body in CG flames. She
          holds the phone camera high above her head, her face smiling softly
          into her phone. She is a youngish white woman and her dark brown hair
          is pulled back into a ponytail.
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

const Head = styled.h1`
  font-family: var(--font-heading);

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  font-family: var(--font-body);



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
    max-width: 20%;
  }
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
`;
export default Olivia;
