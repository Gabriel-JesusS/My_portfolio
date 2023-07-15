import styled from "styled-components"

import { Colors, fontSize } from "./Theme";
import { Red_marking } from "./Theme";
import { fontsImport } from "./Theme";


function AdditionalText({ MyGreetings, WhatIAm, ComplementaryphraseMG, ComplementaryphraseWIA, ApresentationAboutMe, ApresentationAboutMe2, ScrollDow, AboutMe,AboutMe2 }) {

    return (
        <>
            <Adtional_text style={{ textIndent: "1rem" }}><Red_marking>{MyGreetings}</Red_marking>{ComplementaryphraseMG}</Adtional_text ><Adtional_text style={{ textIndent: "2rem", }}>{WhatIAm} <Red_marking>{ComplementaryphraseWIA}</Red_marking></Adtional_text>
            <Adtional_text style={{ animation: "sweep 1s ease-in-out ", }}>
                {ApresentationAboutMe}<Red_marking>{ApresentationAboutMe2}</Red_marking>
            </Adtional_text  >
            <Adtional_text style={{ marginRight: "1rem", top: "5rem", zIndex: 1, animation: "ScrolDow 1s ease-in infinite" }}>{ScrollDow}</Adtional_text>
            <Adtional_text style={{ fontSize: fontSize.TextFontMain, fontFamily: fontsImport.textFont}} >{AboutMe}</Adtional_text>
            <br/>
            <Adtional_text style={{ fontSize: fontSize.TextFontMain, fontFamily: fontsImport.textFont}} >{AboutMe2}</Adtional_text>
        </>
    )
}

const Adtional_text = styled.p`
transition: margin 1s ease-in-out;
position: relative;
font-size: 20pt;
color: ${Colors.WWhite};
position: relative;
font-family: 'Lalezar', 'cursive';

    @keyframes sweep {
        0% {
            opacity: 0;
            margin-right: 1.2rem;
            margin-top: 0.5rem;
        }

        100% {
            opacity: 0.5;
            margin-top: 0;
            margin-left: 0px
        }
    }
    

`
export default AdditionalText