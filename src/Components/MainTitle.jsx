import styled from "styled-components"
import { Colors, fontSizeResponsive, fontsImport,fontSize } from "./Theme";


function MainTitle({ HomeTitle, TitleProjects, AboutMeTitle, SkillsTitle,technologies, Skills }) {
    return (
        <>
            <Main_title >{HomeTitle}</Main_title>
            <Main_title style={{ fontSize: fontSize.TitleFontSecondary }}>{TitleProjects}</Main_title>
            <Main_title style={{ fontSize: fontSize.TitleFontSecondary }}>{AboutMeTitle}</Main_title>
            <Main_title style={{ fontSize: fontSize.TitleFontSecondary }}>{SkillsTitle}</Main_title>
            <Main_title style={{fontSize: "15pt"}}>{technologies}</Main_title>
            <Main_title style={{fontSize: "15pt" }}>{Skills}</Main_title>
        </>
    )
}

//ESTILIZAÇÃO DOS COMPONENTES
const Main_title = styled.h1`
color: ${Colors.WWhite};
font-size: ${fontSize.titleFontMain};
font-family: 'Lalezar', 'cursive';
text-indent: 1rem;
@media screen and (max-width:768px) {
    font-size: ${fontSizeResponsive.titleFontMain};
}

`
export default MainTitle;