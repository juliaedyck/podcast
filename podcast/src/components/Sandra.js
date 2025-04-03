import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import Photo from "../photos/ep4.jpg";
import { BsInstagram } from "react-icons/bs";
import { RiPatreonLine } from "react-icons/ri";
import PDF from "../components/transcripts/A Kind of Harmony_Andrea_Transcript.pdf";

const Sandra = () => {
  const newWindow = (url) => {
    window.open(url, "newwindow");
    return false;
  };

  const embedUrl =
    "https://open.spotify.com/embed/episode/5tGXVGkJXUjtYNEkoK5Dvi?utm_source=generator";

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
          <Heading>
            {" "}
            EPISODE 4: Sandra Volny, sonores matérielles, sensorielles et
            sociales
          </Heading>
          <Img src={Photo} alt=" Rehab Nazzal" />

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
            Sandra Volny (franco-tchèque) est une artiste, chercheuse et
            enseignante qui s’intéresse à la perception des espaces
            sonores.Titulaire d'un doctorat en Arts et Sciences de l'Art de
            l'Université Paris 1 Panthéon Sorbonne, sa thèse porte sur le
            concept de "la survivance des espaces sonores", explorant la
            persistance du son dans les espaces à travers ses constellations
            matérielles, sensorielles et sociales. Ses recherches et sa pratique
            actuelle s’intéressent à la navigation dans les espaces par le son,
            « les résidus sonores », les « fossiles sonores », et l’interaction
            avec des êtres humains et non-humains par l'acte d'écoute.
          </Des>
          <Des>
            Volny s'intéresse tout particulièrement à ces occurrences où la
            conscience qu’a un individu de son environnement se construit par le
            biais du son. Elle considère l'utilisation des espaces sonores comme
            des vecteurs qui permettent à l'imagination individuelle et
            collective d'émerger.
          </Des>
          <Des>
            Rehab’s soundpiece is made of coexisting and contradictory sounds of
            Sandra Volny est actuellement chercheuse postdoctorale au
            Département de sciences biologiques de l'Université de Montréal et
            au sein de la Chaire Médiane de l'Université du Québec à Montréal.
            Ses recherches ont été publiées dans différentes revues et journaux
            académiques, dont plus récemment aux presses du MIT. Entre 2019 et
            2023, Volny était récipiendaire d’une résidence aux ateliers
            montréalais de la Fonderie Darling. Son travail a fait l’objet
            d’expositions individuelles et collectives notamment au Musée d'art
            de Joliette, à la Fonderie Darling, au Centre Clark, à la galerie
            FOFA, au Centre d’exposition de l’Université de Montréal, à la
            galerie Michel Journiac (Paris), au Ionion Center (Céphalonie), et
            au Raumlabor-267 (Braunschweig). Ses œuvres figurent au sein de
            collections publiques et privées, dont celles du Musée d'art
            contemporain de Montréal, de Hydro-Québec et de Majudia.
          </Des>
          <Des>
            La pièce sonore de Sandra est composée de vibrations sismiques
            captées grâce à des sismographes dans la glace en Antarctique.
          </Des>
          <Des>
          L'entrevue est offerte en format bilingue EN/FR
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
  color: #3b38b1;
  margin-bottom: 2%;
  font-size: 20px;
`;

const Des = styled.h2`
  font-family: var(--font-body);
  margin-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
  color: #3b38b1;
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
  background-color:#e4cdff;
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
export default Sandra;
