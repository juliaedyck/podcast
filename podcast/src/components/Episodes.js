
import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";



const Episodes = () =>  {

    return (

        <>
    <a href="/"><CloseButton aria-label="Hide" /></a>


        episodes
           <Container>
           <Row>
        <Col>1 of 2</Col>
        <Col> <Scroll> 2 of 2

        <EpisodeContainer>

<h1> EPISODE 9 : NAME </h1>
<h2>a short descripttion </h2> 
<StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
</EpisodeContainer>  
 
    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>  


    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>   
    
  
    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>  

   
    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>    


    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>  


    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>   


 
    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>   

    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>  


    <EpisodeContainer>

     <h1> EPISODE 9 : NAME </h1>
     <h2>a short descripttion </h2> 
    <StyledNavLink to="/EpisodePage">LISTEN</StyledNavLink>
    </EpisodeContainer>    
            
            </Scroll></Col>
        </Row>

    </Container>
        </>
    )
}
const EpisodeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: space-between;
`

const Scroll = styled.div`
/* display: flex; */
/* height: 100%;
width: 50%; */
overflow: auto;
`
const StyledNavLink = styled(NavLink)`
`



export default Episodes;