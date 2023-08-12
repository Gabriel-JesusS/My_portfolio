import styled from "styled-components";
import { Colors, ScreenSize } from "./Theme";

//FOOTER DE ESTILO 
function Wave() {
  return (
    <>

      <Style_wave>
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </Style_wave>

    </>
  )
}

//ESTILIZAÇÃO DOS COMPONENTES
const Style_wave = styled.div`

position: fixed;
  margin: 0;
bottom: 0;
left: 0;
width: ${ScreenSize.mainScreenWidth};
transition: top 250ms ease-in-out;
overflow: hidden;
@media screen and (max-width:1000px) {
  height: 49vh;
  display: flex;
  align-items: end;
bottom: 5rem;
margin: 0;
bottom: 0;
left: 0;
position: relative;
width: 100%;
}
/* @keyframes waveanimation {
    0% {
   filter: drop-shadow(0 0  10px aqua);
  }
  70% {
    filter: drop-shadow(0 0  0px aqua);
  }
  100% {
    filter: drop-shadow(0 0  2px aqua);
  }
} */
`
export default Wave;





