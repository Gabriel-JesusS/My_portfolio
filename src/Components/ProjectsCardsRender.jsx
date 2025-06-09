import styled from "styled-components"
import { ListProjects } from "./ListProjects";
import { Colors, fontSize } from "./Theme";
import { fontsImport } from "./Theme";

//ESSE COMPONENTE É RESPONSAVEL POR RENDERIZAR O OBJETO (ListProjects) EM FORMA DE CARD
function ProjectsCardsRender() {

    const RenderCardProjects = ListProjects.map((valueList) => {
        return <Card_projects key={valueList.id} >
            <Title_card_projects >
                {valueList.name}
            </Title_card_projects>
            <MainContainer>
                <Container_img_button>
                    <Img_card_projects src={valueList.img} title={valueList.name} />
                    <a href={valueList.link} target="_blank"> Clique aqui <span>»</span> </a>
                </Container_img_button>
                <DescriptionText>
                    {valueList.description}
                </DescriptionText>
            </MainContainer>
        </Card_projects>
    }, 1000);

    return (
        <>
            <Container_cardsP>
                {RenderCardProjects}
            </Container_cardsP>
        </>
    )
}

//ESTILIZAÇÃO DOS COMPONENTES
const Container_img_button = styled.div`
display: flex;
flex-direction: column;
`
const DescriptionText = styled.p`
text-align: left;
color: ${Colors.WWhite};
margin: 0.5rem;
display: block;
font-family: ${fontsImport.textFont};
@media screen and (max-width: 1000px) {
 font-size: 9pt;
 text-align: center;

}
`
const MainContainer = styled.div`
display: flex;
justify-content: start;
`
const Container_cardsP = styled.div`
display: flex;
align-items: left;
margin-left: 1rem;
flex-direction: column;
flex: 100%;
margin-right: 1rem;
`
const Card_projects = styled.div`
display: grid;
margin-bottom: 1rem;
box-shadow: 2px 2px 6px #000;
width: 100%;
a{
transition: all 250ms ease-in-out;
text-align: center;
align-items: center;
border: 0.5rem double transparent;
font-size: 10pt;
color: ${Colors.WWhite};
outline: none;
background-color: ${Colors.aquaIce};
font-family: ${fontsImport.mainFont};
text-decoration: none ;

span{
transition: all 250ms linear;
opacity: 0;
}
}

a:hover{
   text-indent: 1rem;
    span{
        opacity: 1;
    }
    border: 0.5rem double ${Colors.aquaIce};
    background: linear-gradient(to right, rgb(24, 26, 35), rgb(39, 45, 74));
}

@media screen and (max-width: 768px) {
    a{
        height: 1.1rem;
    }
}

`
const Title_card_projects = styled.p`
font-family: ${fontsImport.textFont};
color: ${Colors.WWhite};
background-color: ${Colors.aquaIce};
text-align: start;
height: 1.1rem;
text-indent: 1rem;
font-weight: bold;
`
const Img_card_projects = styled.img`
background-color: ${Colors.dark};
height: 10rem;
width: 13rem;
@media screen and (max-width:768px) {
height:7rem;
width: 10rem;
}


`

export default ProjectsCardsRender