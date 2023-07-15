import styled from "styled-components"
import { ListProjects } from "./ListProjects";
import { Colors, fontSize } from "./Theme";
import { fontsImport } from "./Theme";
import { Link } from "react-scroll";




function ProjectsCardsRender() {


    const RenderCardProjects = ListProjects.map((valueList, D, ARR) => {
        return <Card_projects key={valueList.id} >
            <Title_card_projects >
                {valueList.name}
            </Title_card_projects>
            <MainContainer>
                <Img_card_projects src={valueList.img} title={valueList.name} />
                <DescriptionText>
                    {valueList.description}
                </DescriptionText>
            </MainContainer>
            <a href={valueList.link} target="_blank"> Clique aqui <span>»</span> </a>
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



const DescriptionText = styled.p`
text-align: left;
color: ${Colors.WWhite};
margin: 0.5rem;
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
box-shadow: 1px -3px 10px #000;
width: 100%;
a{
    transition: all 250ms ease-in-out;
    text-align: center;
    border: 0.3rem double transparent;
    display: block;
    width: 12.5rem;
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
    border: 0.3rem double ${Colors.aquaIceCards};
    background-color: ${Colors.textAquaIce};
    color: ${Colors.shadowBlue};

}

@media screen and (max-width: 1000px) {
  
    a{
       width: 9.4rem;
    }
}

`
const Title_card_projects = styled.p`
font-family: ${fontsImport.textFont};
color: ${Colors.WWhite};
background-color: ${Colors.textAquaIce};
text-align: start;
height: 1.1rem;
text-indent: 1rem;
font-weight: bold;
`
const Img_card_projects = styled.img`
background-color: ${Colors.dark};
height: 10.8rem;
width: 13rem;
@media screen and (max-width:1000px) {
height:9rem;
width: 10rem;
}

@media screen and (max-height: 450px) {
    width: 10rem;
    height: 8.9rem;
}
`

export default ProjectsCardsRender