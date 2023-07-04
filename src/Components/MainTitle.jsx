import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;

function MainTitle({ MyName, TitleProjects }) {
    return (
        <>
            <Main_title >{MyName}</Main_title>
            <Main_title >{TitleProjects}</Main_title>
        </>
    )
}

const Main_title = styled.h1`
color: ${WWhite};
font-size: ${NameFontSize};
font-family: 'Lalezar', 'cursive';
text-indent: 2rem;
@media screen and (max-width:768px) {
    font-size: 30pt;
}
`

export default MainTitle