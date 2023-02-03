import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/andrea.jpg";

const Andrea = () => {
  return (
    <>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
        EPISODE : ANDREA IYA YOUNG
        <Img src={Photo} alt=" Andrea Iya Young" />
        audio
        <p>
          Andrea Young is a multi-disciplinary artist, writer, healer and
          gardener living in Potton, Quebec. She is the founder of Young
          Ascension Hypnosis since 2015 and since 2020 The Mystical Order of the
          Infinite Fountain, her own hypnosis lineage and school.
        </p>
        <p>
          Her work swims at the intersection of Art x Earth x Spirit and how
          finding trance in that space can elicit or preserve an experience of
          Home.
        </p>
        <p>
          She is anchored by life ways of the circumpolar and Pacific regions
          and is of Ukrainian and Mohawk heritage. She was raised on Treaty 4
          lands surrounding the Qu'apelle Valley in the Saskatchewan prairies.
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
export default Andrea;
