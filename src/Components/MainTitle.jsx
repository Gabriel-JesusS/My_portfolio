import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;

function MainTitle({ HomeTitle, TitleProjects }) {
    return (
        <>
            <Main_title  style={{ textShadow: "1px -2px 2px #252525" }}  >{HomeTitle}</Main_title>
            <Main_title >{TitleProjects}</Main_title>
        </>
    )
}

const Main_title = styled.h1`
color: ${WWhite};
font-size: ${NameFontSize};
font-family: 'Lalezar', 'cursive';
text-indent: 1rem;
@media screen and (max-width:668px) {
    font-size: 30pt;
}
`

export default MainTitle