import styled from "styled-components"
import { Colors, fontSize } from "./Theme";
import { fontsImport } from "./Theme";
import { Link } from "react-scroll"
const { WWhite, dark, shadowBlue, aquaIce: mars } = Colors;
const { TitleFontMain: NameFontSize } = fontSize;
const { mainFont } = fontsImport;

function NavigationGuides({ GuidesHome, GuidesProjects, GuidesAboutMe, GuidesSkills }) {




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

const Navigation_guides = styled.nav`
display: flex;
justify-content: right;
align-items: end;
text-align: center;
margin-bottom: 1rem;
background-color: ${Colors.aquaIce};
top: 0;
width: 100%;
position: fixed;
transition: background 250ms linear;
height: 2rem;
list-style: none;
z-index: 1;

:hover,:focus{

color: ${Colors.WWhite};

}
@media screen and (max-width:768px) {
height: 1.5rem;
justify-content: right;


}

`
const Guides_for_section = styled.button`
appearance: none;
border: none;
background-color: transparent;
transition: background 250ms linear;
background: rgba(212, 206, 206, 0.08);


font-size: 15pt;
font-weight: bold;
margin-right: 1rem;
padding-top: 1.5rem;

color: ${shadowBlue};
font-family: ${fontsImport.mainFont};
cursor: pointer;

@media screen and (max-width:1000px) {
font-size: 12pt;
margin-right: 1rem;

}
`
export default NavigationGuides