import styled from "styled-components"
import AdditionalText from "./AdditionalText"
import { Colors, ScreenSize, fontsImport } from "./Theme"
import MainTitle from "./MainTitle"

function ProfessionalSkills({ One, Two, Tree, Four, Five, Six }) {
    return (
        <>

            <Container_professional_skills>
                <MainTitle Skills="Competências" />
                <Itens_list_professional_skills>
                    {One}
                </Itens_list_professional_skills>
                <Itens_list_professional_skills>
                    {Two}
                </Itens_list_professional_skills>
                <Itens_list_professional_skills>
                    {Tree}
                </Itens_list_professional_skills>
                <Itens_list_professional_skills>
                    {Four}
                </Itens_list_professional_skills>
                <Itens_list_professional_skills>
                    {Five}
                </Itens_list_professional_skills>
                <Itens_list_professional_skills>
                    {Six}
                </Itens_list_professional_skills>
            </Container_professional_skills>
        </>
    )
}

//ESTILIZAÇÃO DOS COMPONENTES
const Container_professional_skills = styled.ul`
display: flex;
justify-content: center;
flex-direction: column;
list-style: none;
box-shadow: 1px 1px 3px #000;
width: ${ScreenSize.cardSkills};
margin: 1rem;
margin-bottom: 2rem;
li::before {
content: counter(li); color: ${Colors.aquaIce};
 display: inline-block; width: 1em;
 margin-left: -1em
  }
`
const Itens_list_professional_skills  = styled.li`
margin-top: 1rem;
font-size: 12pt;
font-family: ${fontsImport.textFont};
color: ${Colors.WWhite};
margin-bottom: 1rem;
margin-left: 2rem;
@media screen and (max-width: 1000px) {
  font-size: 9pt;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}


`
export default ProfessionalSkills