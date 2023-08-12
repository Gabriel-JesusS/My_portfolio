import styled from "styled-components";
import { Colors, fontSize } from "./Theme";
import { Red_marking } from "./Theme";
import { fontsImport } from "./Theme";

//COMPONENTE USADO PARA ADICIONAR TEXTO EM ALGUM CAMPO DA PAGÍNA   
function AdditionalText({ MyGreetings, WhatIAm, ComplementaryphraseMG, ComplementaryphraseWIA, ApresentationAboutMe, ApresentationAboutMe2, AboutMe, AboutMe2 }) {
    return (
        <>
            <Adtional_text style={{ textIndent: "1rem" }}><Red_marking>{MyGreetings}</Red_marking>{ComplementaryphraseMG}</Adtional_text ><Adtional_text style={{ textIndent: "2rem", }}>{WhatIAm} <Red_marking>{ComplementaryphraseWIA}</Red_marking></Adtional_text>
            <Adtional_text style={{animation: "sweep 0.5s ease-out",  position: "relative", transition: "top 250ms ease-in-out" }}>
                {ApresentationAboutMe}<Red_marking>{ApresentationAboutMe2}</Red_marking>
            </Adtional_text  >
            <Adtional_text style={{ fontSize: fontSize.TextFontMain, fontFamily: fontsImport.textFont }} >{AboutMe}</Adtional_text>
            <br />
            <Adtional_text style={{ fontSize: fontSize.TextFontMain, fontFamily: fontsImport.textFont }} >{AboutMe2}</Adtional_text>
        </>
    )
}
//ESTILIZAÇÃO DOS COMPONENTES
const Adtional_text = styled.p`
font-size: 20pt;
color: ${Colors.WWhite};
font-family: 'Lalezar', 'cursive';  
`
export default AdditionalText