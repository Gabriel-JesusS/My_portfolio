import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;

function NavigationGuides({ GuidesHome, GuidesProjects, GuidesAboutMe, GuidesSkills }) {
    return (
        <>
            <Navigation_guides>
                <Guides_for_section>{GuidesHome}</Guides_for_section>
                <Guides_for_section>{GuidesProjects}</Guides_for_section>
                <Guides_for_section>{GuidesAboutMe}</Guides_for_section>
                <Guides_for_section>{GuidesSkills}</Guides_for_section>
            </Navigation_guides>
        </>
    )
}

export const Navigation_guides = styled.header`
display: flex;
justify-content: right;
align-items: center;
background-color: ${shadowBlue};
width: 100%;
position: fixed;
top: -0rem;
height: 3rem;
list-style: none;
border: none;
transition: underline 500ms ease-in-out;
z-index: 1;
:hover,:focus{
    text-decoration: 3px underline ${mars};
}

`
export const Guides_for_section = styled.button`
appearance: none;
background-color: transparent;
border: none;
font-size: 15pt;
font-weight: bold;
text-indent: 1rem;
margin: 1.5rem;
margin-right: 2rem;
color: white;
font-family: 'Lucida Sans', 'Lucida Sans Regular';

cursor: pointer;

@media screen and (max-width:768px) {
    font-size: 11pt;
    text-indent: 0rem;
    margin: 0.5rem;
}
`
export default NavigationGuides