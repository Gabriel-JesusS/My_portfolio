import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";
import { Link } from "react-scroll"
const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;

function NavigationGuides({ GuidesHome, GuidesProjects, GuidesAboutMe, GuidesSkills }) {




    return (
        <>

            <Navigation_guides >
                <Guides_for_section >
                    <Link to="/" spy={true} smooth={true} duration={500}>
                        {GuidesHome}
                    </Link>
                </Guides_for_section >
                <Guides_for_section >
                    <Link to="Projects" spy={true} smooth={true} duration={500}>
                        {GuidesProjects}
                    </Link>
                </Guides_for_section>
                <Guides_for_section>
                    <Link to="AboutMe" spy={true} smooth={true} duration={500}>
                        {GuidesAboutMe}
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
background-color: ${mars};
top: 0;
width: 100%;
position: fixed;
height: 2rem;
list-style: none;

z-index: 1;
:hover,:focus{

    background-color: ${WWhite};
    color: ${mars};
}
@media screen and (max-width:668px) {
    height: 1.5rem;
justify-content: right;


}

`
const Guides_for_section = styled.button`
appearance: none;
background-color: transparent;
transition: background 0.2s linear;
font-size: 17pt;
font-weight: bold;
margin-right: 2rem;
padding-top: 1.5rem;
border: none;
color: ${shadowBlue};
font-family: 'Lucida Sans', 'Lucida Sans Regular';

cursor: pointer;

@media screen and (max-width:668px) {
    font-size: 10pt;
margin-right: 1rem;

}
`
export default NavigationGuides