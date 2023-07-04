import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;

function ListProjectsGH() {

    let ListProjects = [
        {
            name: "Tic Tac Toe",
            description: "Tic Tac Toe é um jogo da velha simples utilizando apenas javascript PURO ",
            img: "/Projects/TicTacToePage.png"
        }, {
            name: "Mp3Web",
            description: "Tic Tac Toe é um jogo da velha simples utilizando apenas javascript PURO ",
            img: "/Projects/Mp3WebPage.png"
        },
        {
            name: "Mp3Web",
            description: "Tic Tac Toe é um jogo da velha simples utilizando apenas javascript PURO ",
            img: "/Projects/Mp3WebPage.png"
        }
    ]

    const RenderCardProjects = ListProjects.map((valueList) => {
        return <Card_projects>
            <Title_card_projects>{valueList.name}
                <Img_card_projects src={valueList.img} />
            </Title_card_projects>
        </Card_projects>
    });
    return (
        <>
            <Container_cardsP>
                {RenderCardProjects}
            </Container_cardsP>

        </>
    )
}

 const Container_cardsP = styled.div`
display: inline-flex;
flex-wrap:wrap;
flex-direction: column;
 justify-content: center;
 justify-items: center;
align-items: center; 
width: 55rem;

height: 25rem;
margin-bottom: 1rem;
overflow-y: hidden;
::-webkit-scrollbar{
display: none;
}
::-webkit-scrollbar-thumb{

}
@media screen and (max-width:768px) {
  width: 15rem;
  height:15rem ;
}
`

 const Card_projects = styled.div`
display: flex;
justify-content: center;

height: 20rem;
text-align: center;
width: 20rem;
margin: 1rem;
background-color: ${dark};

border-radius: 30px;
border: 2px solid ${mars};
@media screen and (max-width:768px) {
  width: 14rem;
  height: 15rem;

}


`

 const Title_card_projects = styled.div`
display: flex;
flex-direction: column;
align-items: center;

text-shadow: 1px 2px 3px ${dark};
font-family: ${mainFont};
color: ${WWhite} ;
border-end-end-radius: 10rem;
border-end-start-radius: 10rem;
background-color: ${mars};
width: 13rem;
height: 2rem;

@media screen and (max-width:768px) {
 font-size: 10pt;
 width: 8rem;
 height: 1.5rem;
}

`

 const Img_card_projects = styled.img`
width: 17rem;
height: 15rem;
margin-top: 1rem;
border-radius: 30px;
@media screen and (max-width:768px) {
  width: 10rem;
  height: 10rem;

}
`

export default ListProjectsGH