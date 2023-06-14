import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/glenn (1).jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_BGC.pdf";

const Glenn = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/11q9JphSSP1ZnkSeKUwcW2?utm_source=generator";

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
          <Heading> EPISODE 10: BEVERLY GLENN-COPELAND </Heading>
          <Img src={Photo} alt=" BEVERLY GLENN-COPELAND" />

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
          In this episode we spoke with legendary Canadian/American singer, composer and transgender activist Beverly Glenn-Copeland 

Glenn’s work has been gathering momentum and recognition in recent years thanks to a reissue of the extraordinary folk-jazz of his debut self-titled album (1970) and the widespread discovery of his masterpiece Keyboard Fantasies (1986). 

          </Des>
          <Des>
          Born in Philadelphia in 1944, Glenn-Copeland grew up in a house obsessed with classical music, his father practised piano for 5 hours a night. Glenn refers to Bach, Chopin and Mozart as his ‘cradle music’, music that seeped into his blood-stream. He moved to Montreal in 1961 to study at McGill University. Faced with challenges and hostility relating to his race, gender and sexual orientation he dropped out of university before completing his degree. He picked up a guitar and started writing music.
.
          </Des>
          <Des>
          In 1970 Glenn-Copeland recorded two brilliant albums. The first was part of CBC Radio’s ‘Transcription Series’ titled Beverly Copeland. It was a virtuosic showcase of classical and jazz vocal stylings, poetry, jazz and folk, accompanied by some of the best players of the time. Original pressings of that album now fetch thousands of dollars when passed from collector to collector – just 250 copies were pressed. Six months later Glenn-Copeland made a studio album with many of those same musicians, this time titled Beverly Glenn-Copeland, it was folk-jazz classic and an album that has been the subject of a mystical reputation and underground following for almost five decades now.

          </Des>


          <Des>
          It wasn’t until 1986 that Glenn-Copeland recorded again. This time he was inspired by a profound relationship with nature, an obsession with science fiction and some of the earliest drum-machines and synthesisers. Keyboard Fantasies is a minimalist, proto-electronic masterpiece with unbelievable soul.it sold less than 100 copies at the time. But Keyboard Fantasies was this record that would break Glenn’s career wide-open more than 30 years later.
          </Des>

          <Des>
          Glenn wasn’t twiddling his thumbs between these now-iconic records. His life has been a non-stop combination self-discovery and part pop-culture fairy-tale. He appeared as regular guest ‘Beverly’ on the beloved Canadian children’s TV show Mr. Dress-up for nearly 30 years. He wrote for Sesame Street. He lived in the cities and in the wild. He wrote musicals, operas, children’s music and hundreds upon hundreds of other songs even though he only had the means to record those few aforementioned albums. 
          </Des>

          <Des>
          In the early 1990’s Beverly Glenn-Copeland first heard the term ‘transgender’. Armed with the language to describe the way he had felt since before he was even a teenager, he found a self-identity which had eluded him his whole life. 
          </Des>

          <Des>
          In 2016 Keyboard Fantasies was discovered by a revered Japanese record-store owner and collector. Word spread in the record-collecting community and several re-issues were released on different labels. Glenn played his first shows of original music in more than 40 years to standing ovation after standing ovation. He formed a band of brilliant and talented young musicians from Nova Scotia, Montreal and Toronto and started touring the world. 

          </Des>

          <Des>
          Glenn will be releasing a new album in July called The Ones Ahead. This will be his first album in about 20 years. 
          </Des>

          <Des>
          Glenn's sound piece is titled Old Melody
          </Des>


          <Transcript href={PDF} target="blank">
            {" "}
            TRANSCRIPTION
          </Transcript>
  <Des>photo by Christa Treadwell</Des>
          
  <Des>
            <StyledLink
              onClick={() =>
                newWindow("https://www.patreon.com/beverlyglenncopeland")
              }
              target="_blank"
            >
                Support Glenn on Patreon
            </StyledLink>

</Des>
        
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
  background-color: var(--color-blue);
  overflow: scroll;
`;

const IFrameMobile = styled.iframe`
  @media (min-width: 768px) {
    display: none;
  }
`;

const IFrameDesk = styled.iframe`
  padding-bottom: none;
  margin-bottom: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Transcript = styled.a`
  font-family: "DM Serif Display", serif;
  font-style: italic;
  color: var(--color-green);
  margin-bottom: 2%;
  margin-top: 2%;
  font-size: 20px;

  &:hover {
    color: var(--color-pink);
  }
`;

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
export default Glenn;
