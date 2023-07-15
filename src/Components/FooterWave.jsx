import styled from "styled-components"

function FooterWave({}) {
    return (
        <>
            <Footer_wave></Footer_wave>

        </>
    )
}

const Footer_wave = styled.div`
position: fixed;
bottom: 0rem;
margin: 0;
left: 0rem;
background-image: url("/Home/wave.svg");
background-size: cover;
height: 9rem;
width: 49vw;
@media screen and (max-width:1000px) {
  
    height: 5rem;
z-index: 3;
   width: 100%;
}
`

export default FooterWave