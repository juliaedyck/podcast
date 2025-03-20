import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/ep2.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Andrea_Transcript.pdf";

const Chantal = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/38JQbgCFiPUETQcKl9v391?utm_source=generator";

  return (
    <>
      <Background>
        <a href="SeasonTwo">
          <Close>
            {" "}
            <CloseButton aria-label="Hide" />
          </Close>
        </a>

        <Wrapper>
          <Heading> ÉPISODE 2: Chantal Dumas, publique et intime</Heading>
          <Img src={Photo} alt=" Chantal Dumas" />

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
            Artiste sonore montréalaise, Chantal Dumas explore le médium du son
            depuis plus de 30 ans. Les années ont mis en lumière une récurrence
            thématique (espace, temps, territoire) soulignant une conscience
            environnementale qui se conjugue à un intérêt marqué pour l’écoute.
            Chantal partage sa connaissance de la perception et de l'interaction
            avec l'espace public, ainsi que ses recherches sur les sons de
            refuge.
          </Des>
          <Des>
            Le travail de Chantal Dumas s'incarne sous forme de narration, de
            paysage sonore, de composition, de parcours d'écoute et
            d’installation. Les années ont mis en lumière une récurrence
            thématique (espace, temps, territoire) soulignant une conscience
            environnementale qui se conjugue à un intérêt marqué pour l’écoute.
          </Des>
          <Des>
            Dumas a résidé au Studio du Québec à New York (CALQ-2011) et au
            Studio des Récollets à Paris (CALQ-2016) et profita de nombreuses
            résidences d’artistes dans les centres d‘artistes québécois. Elle a
            reçu les prix Opus - Concert en musique électroacoustique (2009, Qc)
            et les prix Bohemia (République tchèque) et Phonurgia Nova (Fr) en
            radio. Son album Oscillations planétaires qui évoque le monde
            géologique fut finaliste Album de l’année au Prix Opus 2019-20. Son
            travail a été largement diffusé sur les radios publiques européennes
            et lors de festivals étrangers
          </Des>

          <Des>
            Elle est régulièrement invitée à participer à des projets en
            médiation culturelle dans différents contextes (MeM, RAAM, Les
            Incomplètes, Espace Projet) où elle invitent le public à partir à la
            découverte de territoires sonores. Dans cet esprit, elle a réalisé
            en collaboration avec Magali Babin le parcours d’écoute Villeray
            acoustique: https://mtlacoustique.com
          </Des>
          <Des>
            À l’automne 2023, elle a co-organisé avec Frédéric Dallaire le
            colloque Le Partage des écoutes associé à la Faculté des arts et des
            sciences - Département d'histoire de l'art et d'études
            cinématographiques de l’Université de Montréal.
          </Des>
          <Des>
            Son œuvre, Un après-midi au rythme des oiseaux comprend des
            enregistrements réalisés un après-midi d’octobre à la Réserve
            nationale de faune du Lac-Saint-François au Québec. Elle ne voyait
            pas les oiseaux mais elle découvrait leur présence à travers leur
            chant. Ils étaient cachés derrière de groupements végétaux à carex
            et à quenouilles. On entend entre autres la bernache du Canada, la
            grue du Canada et le canard colvert.
          </Des>
          {/* <Transcript href={PDF} target="blank">
            {" "}
            TRANSCRIPTION
          </Transcript> */}
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
  color: #3736a3;
  margin-bottom: 2%;
  font-size: 20px;
`;

const Des = styled.h2`
  font-family: var(--font-body);
  margin-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
  color: #3736a3;
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
    padding-left: 10%;
    padding-right: 10%;
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
  background-color:#b989ed;
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
  color: #3736a3;
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

  color: #3736a3;
  &:hover {
    color: #9e93f4;
    /* transition: 300ms ease-in-out; */
    cursor: pointer;
  }
`;
export default Chantal;
