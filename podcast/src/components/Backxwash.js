import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/ashanti.jpg";

const Backxwash = () => {
  return (
    <>
      <a href="Episodes">
        <Close>
          {" "}
          <CloseButton aria-label="Hide" />
        </Close>
      </a>

      <Wrapper>
        EPISODE : BACKXWASH
        <Img src={Photo} alt="Backxwash " />
        audio
        <p>
          Backxwash aka Ashanti Mutinta is a Zambian-Canadian rapper & producer
          based in Montreal, Quebec. She is most noted for her 2020 Polaris
          Music Prize-winning album <i>God Has Nothing To Do With This Leave Him
          Out Of It</i>.
        </p>
        <p>
          Her work is based in the horrorcore, hip-hop and industrial metal
          genres, and includes a culmination of themes around the intersection
          between faith, identity, and queerness. The poetry of her lyrics are
          the beginning of a cathartic healing process in which she is granting
          herself permission to be angry.
        </p>
        <p>
          In 2021 Backxwash released her 3rd album titled <i>I LIE HERE BURIED WITH
          MY RINGS AND MY DRESSES</i> and announced that it would be the second
          album in a trilogy. Whereas God Has Nothing was a study in mercy &
          forgiveness and provided some semblance of hope, I LIE HERE BURIED
          presents Backxwash finding solace in being completely consumed by her
          malevolent behaviors.
        </p>
        <p>
          Her latest album <i> HIS HAPPINESS SHALL COME FIRST EVEN THOUGH WE ARE
          SUFFERING </i> (2022) is the final LP in the trilogy. It is entirely
          self-produced and includes instrumental and vocal features by
          Morgan-Paige, Pupil Slicer, Michael Go, Censored Dialogue, Sadistik,
          and Ghais Guevara.
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
export default Backxwash;
