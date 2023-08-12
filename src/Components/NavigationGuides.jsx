import styled from "styled-components"
import { Colors, fontSize } from "./Theme";
import { fontsImport } from "./Theme";
import { Link } from "react-scroll"
const { WWhite, dark, shadowBlue, aquaIce: mars } = Colors;
const { titleFontMain: NameFontSize } = fontSize;
const { mainFont } = fontsImport;

function NavigationGuides({ GuidesProjects, GuidesAboutMe, GuidesSkills }) {




    return (
        <>
            <Navigation_guides >
                <Guides_for_section>
                    <Link to="AboutMe" spy={true} smooth={true} duration={500}>
                        {GuidesAboutMe}
                    </Link>
                </Guides_for_section>
                <Guides_for_section >
                    <Link to="Projects" spy={true} smooth={true} duration={500}>
                        {GuidesProjects}
                    </Link>
                </Guides_for_section>
                <Guides_for_section>
                    <Link to="Skills" spy={true} smooth={true} duration={500}>
                        {GuidesSkills}
                    </Link>
                </Guides_for_section>
            </Navigation_guides>
        </>
    )
}

//ESTILIZAÇÃO DOS COMPONENTES
const Navigation_guides = styled.nav`
display: flex;
justify-content: right;
margin-bottom: 1rem;
background-color: ${Colors.aquaIce};
top: 0;
height: 2rem;
width: 100%;
position: fixed;
transition: background 250ms linear;
list-style: none;
z-index: 1;
:hover,:focus{
color: ${Colors.WWhite};
}

@media screen and (max-width:768px) {
height: 1.5rem;
justify-content: center;
margin: 0;
}

`
const Guides_for_section = styled.button`
background-color: transparent;
transition: background 250ms linear;
border: none;
font-size: 15pt;
font-weight: bold;
margin-right: 2rem;
color: ${shadowBlue};
font-family: ${fontsImport.mainFont};
cursor: pointer;

@media screen and (max-width:1000px) {
font-size: 12pt;
margin-right: 1rem;

}
`
export default NavigationGuides;