import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/rebecca.jpg";

const Rebecca = () => {
  return (
    <>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
        EPISODE : REBECCA MANANKIL
        <Img src={Photo} alt="Skin Tone " />
        audio
        <p>
          Rebecca Manankil is a multidisciplinary healer based in the unceded
          territory of many nations including the Mississaugas of the Credit,
          the Anishinabek, the Chippewa, the Haudenosaunee and the Wendat.
          Rebecca serves her community through her alternative medicine
          practice, Inspire and Instruct, where she guides others to become
          experts in self healing. 
        </p>
        <p>
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
        </p>
        <p>
        As a Filipina womxn, Rebecca is committed to shifting the
          spiritual paradigm within the wellness industry. By sharing
          traditional knowledge and unique wellness modalities, she creates
          spaces for healing to happen. Rebecca finds her purpose by inspiring
          and instructing others to courageously step into the highest version
          of themselves - from soul to surface
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
  max-width: 60%;
  margin-top: 2%;
  margin-bottom: 2%;
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
`;
export default Rebecca;
