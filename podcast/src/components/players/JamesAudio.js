import styled from "styled-components";

const  JamesAudio= () => {

    // const embedUrl = "https://www.podbean.com/player-v2/?i=p5wwt-f53d86-pbblog-playlist&share=0&download=0&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=none&order=episodic&limit=1&filter=season&season=1&ss=6c1485f3902023a8569ec192de59f17d&btn-skin=ff6d00&size=315"
 const embedUrl = "https://open.spotify.com/embed/episode/10QMg8KuEmAhk4rTXBm6R2?utm_source=generator"
 return (
<>

<IFrameMobile

src={embedUrl}
className="iframe"
title="a Kind of Harmony"
frameBorder="0" 
wmode="transparent" 
ratio='8:1'
style= {{position: 'relative', border: '0', width: '100%', height: '150px'

}}
data-name="pb-iframe-player"


/>

<IFrameDesk

src={embedUrl}
className="iframe"
title="a Kind of Harmony"
frameBorder="0" 
wmode="transparent" 
ratio='8:1'
style= {{position: 'relative', border: '0', width: '30%', height: '150px'

}}
data-name="pb-iframe-player"


/>
</>
    );
}

const IFrameMobile = styled.iframe`
  @media (min-width: 768px) {
display: none;
  }
`

const IFrameDesk = styled.iframe`
padding-bottom: none;
margin-bottom: none;
  @media (max-width: 768px) {
display: none;
  }
`
export default JamesAudio