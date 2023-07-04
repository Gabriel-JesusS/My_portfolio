import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";
import { Red_marking } from "./Theme";
import MainTitle from "./MainTitle";
import ContainerWave from "./ContainerWave";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;


function AdditionalText({ }) {

    return (
        <>
            <div className="ContainerLeft">
                <Adtional_text style={{ textIndent: "1rem", }}><Red_marking>Ola</Red_marking>! eu sou:</Adtional_text>
            </div>
            <MainTitle MyName="Gabriel de Jesus .S" />
            <Adtional_text style={{ textIndent: "2.5rem" }}>Desenvolvedor <Red_marking>FRONT-END</Red_marking></Adtional_text>
            <div className="ContainerRight" >
                <Adtional_text style={{ zIndex: "1", textAlign: "left", animation: "sweep 1s linear " }}>Bem vindo ao meu portifolio,<br /> nele você ira conhecer mais sobre <br /> os meus projetos e  <Red_marking>sobre-mim</Red_marking>.</Adtional_text>
               
            </div>
            <ContainerWave />
            <Adtional_text style={{marginTop:"1rem", top: "-4rem", marginRight: "1rem", textAlign: "right", animation: "ScrollDow 1s ease-out infinite" }}>Scroll-Dow⇩</Adtional_text>


        </>
    )
}

 const Adtional_text = styled.p`
transition: top 2s ease-in-out;
font-size: 20pt;
font-weight: bold;
color: white;
position: relative;
font-family: 'Lalezar', 'cursive';
/* animation: sweep 1s ease-in-out; */

@keyframes ScrollDow {
25%{
   text-shadow: 5px 2px 1px ${shadowBlue};
   
}
50%{
   text-shadow: 2px 1px 1px ${shadowBlue};
   top: -4rem;
}
50%{
   text-shadow: 5px 2px 5px ${shadowBlue};
   top: -4.5rem;
}
}
@keyframes sweep {
    0% {
        opacity: 0;
        margin-right: 5rem;
        margin-top: 1rem;
    }

    100% {
        opacity: 1;
        margin-top: 0;
        margin-left: 0px
    }
}
@media screen and (max-width:668px) {
text-align: left;
    font-size: 15pt;

 
}

`
export default AdditionalText