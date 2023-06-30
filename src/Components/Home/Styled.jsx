import { styled } from "styled-components";
import { Colors } from "../Theme";
import './index'
const { white, dark, shadowBlue, mars } = Colors;


export const MyName = styled.h1`
color: white;
font-size: 40pt;
font-family: 'Lalezar', 'cursive';
text-indent: 2rem;
text-shadow:  2px 2px 5px ${dark};
@media screen and (max-width:768px) {
    font-size: 25pt;
}
`

export const ContainerLeft = styled.div`
margin-top: 7rem;

`

export const AdditionalTextName = styled.h2`
font-size: 22pt;
color: white;
text-indent: 1rem;
font-family: 'Lalezar', 'cursive';
@media screen and (max-width:768px) {
    font-size: 12pt;
}

`
export const AdditionalText = styled.p`
text-align: right;
margin-right: 11rem;
font-size: 20pt;
font-weight: bold;
color: white;
position: relative;
font-family: 'Lalezar', 'cursive';
animation: sweep 1s ease-in-out;

@keyframes ScrollDow {
25%{
   text-shadow: 5px 2px 1px ${shadowBlue};
   top: 10rem;
}
50%{
   text-shadow: 2px 1px 1px ${shadowBlue};
   top: 10.2rem;
}
50%{
   text-shadow: 5px 2px 5px ${shadowBlue};
   top: 10.5rem;
}
}
@keyframes sweep {
    0% {
        opacity: 0;
        margin-right: 5rem;
    }

    100% {
        opacity: 1;
        margin-left: 0px
    }
}
@media screen and (max-width:768px) {
    text-align: right;
    font-size: 12pt;
    margin-top: 5rem;
    margin-right: 1rem;
}

`

export const NavigationGuides = styled.ul`
display: inline-flex;
background-color: ${shadowBlue};
position: fixed;
z-index:1;
list-style: none;
border: none;
transition: underline 500ms ease-in-out;
cursor: pointer;
:hover,:focus{
    text-decoration: 3px underline ${mars};
}

`
export const Guides = styled.button`
appearance: none;
background-color: transparent;
border: none;
font-size: 15pt;
font-weight: bold;
text-indent: 1rem;
margin: 1.5rem;
color: white;
font-family: 'Lucida Sans', 'Lucida Sans Regular';

@media screen and (max-width:768px) {
    font-size: 8pt;
    text-indent: 0rem;
    margin: 1rem;
}
`

export const RedMarking = styled.span`
color: ${mars};
`
export const ContainerRight = styled.div`
display: flex;
text-align: right;
justify-content: right;
`
export const ContainerWave = styled.div`
transition: background 3s ease-in-out;
margin-top: 9rem;
background-image: url("/Home/Wave.png");
background-size: cover;
height: 15rem;
filter: drop-shadow(1px -5px 0px ${mars});
@media screen and (max-width:768px) {
   margin-top: -3rem;
}
` 