import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";
import { Red_marking } from "./Theme";
import MainTitle from "./MainTitle";
import ContainerWave from "./ContainerWave";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;


function AdditionalText({ MyGreetings, WhatIAm, ComplementaryphraseMG, ComplementaryphraseWIA, ApresentationAboutMe, ApresentationAboutMe2, ScrollDow }) {

    return (
        <>
            <Adtional_text  style={{ textIndent: "1rem" }}><Red_marking>{MyGreetings}</Red_marking>{ComplementaryphraseMG}</Adtional_text ><Adtional_text style={{ textIndent: "2rem", }}>{WhatIAm} <Red_marking>{ComplementaryphraseWIA}</Red_marking></Adtional_text>
            <Adtional_text style={{ animation: "sweep 0.7s ease-in-out ",  }}>
                {ApresentationAboutMe}<Red_marking>{ApresentationAboutMe2}</Red_marking>
            </Adtional_text  >
            <Adtional_text style={{ top: "11.5rem", marginRight: "1rem", animation: "ScrollDow 1s ease-in infinite" }}>{ScrollDow}</Adtional_text>

        </>
    )
}

const Adtional_text = styled.p`
transition: all 1s ease-in-out;
font-size: 20pt;
font-weight: bold;
color: ${WWhite};
position: relative;
font-family: 'Lalezar', 'cursive';
/* animation: sweep 1s ease-in-out; */

    @keyframes ScrollDow {
    25%{
    text-shadow: 5px 2px 1px ${shadowBlue};
    
    }
    40%{
    text-shadow: 2px 1px 1px ${shadowBlue};
    top: 11rem;
    }
    50%{
    text-shadow: 5px 2px 5px ${shadowBlue};
    top: 10.9rem;
    }
    }
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
    @media screen and (max-width:668px) {
    text-align: left;
        font-size: 15pt;

    
    }

`
export default AdditionalText