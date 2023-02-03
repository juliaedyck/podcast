import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/jann.jpg";

const Jann = () => {
  return (
    <>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
        EPISODE : JANN TOMARO
        <Img src={Photo} alt="Skin Tone " />
        audio
        <p>
          Jann Tomaro is a doctoral candidate at McGill University in
          Counselling Psychology, participating in research via the Social
          Justice and Diversity Lab. Her research and clinical interests lie in
          the socio-political factors that influence mental health, as well as
          access to care. 
        </p>
        <p>
        In 2016 Tomaro began organizing and curating <i>practice</i>,
          an experimental sound and meditation series. <i>Practice</i> is an
          investigation of the capability of sound and listening practices to
          induce different states of awareness and being. Exploring
          transformational properties of sound and fostering listening
          experiences for individuals within a group context is at the heart of
          practice. This project is undergirded by burgeoning literature on
          music and listening practices, which demonstrates positive mental
          health outcomes through relaxation, pleasure, mindfulness, and
          reflexivity. Most importantly, <i>practice</i> is a series that works with
          musicians and draws from the unique knowledge that artists hold about
          sound, listening, and connection.
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
export default Jann;
