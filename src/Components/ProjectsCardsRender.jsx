import styled from "styled-components"
import { ListProjects } from "./ListProjects";
import { Colors, fontSize } from "./Theme";
import { fontsImport } from "./Theme";


const { WWhite, dark, shadowBlue, aquaIce: mars } = Colors;
const { TitleFontMain: NameFontSize } = fontSize;
const { mainFont } = fontsImport;


function ProjectsCardsRender() {

    const RenderCardProjects = ListProjects.map((valueList) => {
        return <Card_projects key={valueList.id}>
            <Title_card_projects > {valueList.name} </Title_card_projects>
            <ContainerDescription>
                <Img_card_projects src={valueList.img} />
                <DescriptionText>{valueList.description}</DescriptionText>
            </ContainerDescription>
        </Card_projects>
    });

    return (
        <>
            <div style={{ display: "flex", justifyContent: "left" }}>
                <Container_cardsP>
                    {RenderCardProjects}
                </Container_cardsP>
            </div>

        </>
    )
}

const DescriptionText = styled.p`
text-align: center;
color: ${WWhite};
width: 35rem;
height: 13.5rem;
margin-top: 0.5rem;
@media screen and (max-width:1000px ) {
    font-size: 9pt;
}
`
const ContainerDescription = styled.div`
display: flex;
justify-content: right;
`
const Container_cardsP = styled.div`
display: flex;
flex-direction: column;
width: 30rem;
height: 100%;
margin-left: 1rem;


@media screen and (max-width:1000px) {
width: 20rem;
}
`
const Card_projects = styled.div`
width: 40rem;
height: 15rem;
background-color: ${dark};
margin-top: 1rem;
box-shadow: 2px 1px 10px #110f0f;
@media screen and (max-width:1000px) {
width: 21rem;
height: 10rem;
}
@media screen and (max-height: 450px) {
    width: 35rem;
    height: 10rem;
}

`
const Title_card_projects = styled.p`
font-family: ${fontsImport.textFont};
color: ${WWhite};
border: 1px solid ${Colors.aquaIce};
text-align: start;
text-indent: 1rem;
font-weight: bold;
@media screen and (max-width:1000px) {
 font-size: 10pt;
}

`
const Img_card_projects = styled.img`
background-color: ${dark};
height: 13.5rem;

width: 15rem;
@media screen and (max-width:668px) {
height:8.9rem;
width: 10rem;
}

@media screen and (max-height: 450px) {
    width: 20rem;
    height: 8.9rem;
}
`
const ButtonProjects = styled.button`
margin-top: 9rem;
margin-right: 11rem;
background-color: ${mars};
border: none;
height: 7rem;
width: 7rem;
border-radius: 100%;

transition: all .6s ease-in-out;

img{
    height: 2rem;
    width: 2rem;
}

 @media screen and (max-width: 768px ) {

    height: 3rem;
    width: 3rem;
 margin:1rem;
    img{
        height: 2.5rem;
    }
 }
`
export const Button_description = styled.button`
border: none;
color: ${WWhite};
margin: 1rem;
border-radius: 10rem;
font-family: ${mainFont};
background-color: ${mars};
padding: 0.5rem;
width: 13rem;
cursor: pointer;
@media screen and (max-width:668px) {
    width: 8rem;
    padding: 0;
}
`

export default ProjectsCardsRender