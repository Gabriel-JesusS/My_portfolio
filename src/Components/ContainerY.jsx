import styled from "styled-components"
import AboutMe from "../SectionsOfPage/AboutMe"
import Skills from "../SectionsOfPage/Skills"
import Projects from "../SectionsOfPage/Projects"
import AdditionalText from "./AdditionalText"
import { ScreenSize } from "./Theme"

//ESSE COMPONENTE É RESPONSAVEL PELO SCROLL VERTICAL QUANDO A TELA FOR MAIOR QUE 1000px
function ContainerY() {
    return (
        <>
            <Container_y>
                <AboutMe />
                <Projects />
                <Skills />
            </Container_y>
        </>
    )
}


export const Container_y = styled.main`
display: flex;
justify-content: left;
margin-top: 2rem;
overflow-x:hidden ;
flex-direction: column;
width: ${ScreenSize.mainScreenWidth} ;
overflow-y: hidden;

@media screen and (max-width:900px) {
flex-direction: column;   
width: 100%;
height: 100%;
 overflow-y: hidden;
}

`
export default ContainerY;