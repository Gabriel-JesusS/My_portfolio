import styled from "styled-components";
import { ScreenSize } from "./Theme";

//FOOTER DE ESTILO 
function Wave({}) {
    return (
        <>
            <Style_wave></Style_wave>
        </>
    )
}

//ESTILIZAÇÃO DOS COMPONENTES
const Style_wave = styled.div`
position: fixed;
bottom: 0;
margin: 0;
left: 0;
background-image: url("public/Icons/wave.svg");
background-size: cover;
height: 9rem;
width: ${ScreenSize.mainScreenWidth};

@media screen and (max-width:1000px) {
height: 5rem;
   width: 100%;
}

`
export default Wave;





