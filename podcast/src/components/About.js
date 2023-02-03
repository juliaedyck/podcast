import CloseButton from 'react-bootstrap/CloseButton';
import styled from "styled-components";

const About = () => {

    return (

        <>
        <Close>
    <a href="/"><CloseButton aria-label="Hide" /></a>
    </Close>
        about
        
        </>
    )

}
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
`;

export default About;