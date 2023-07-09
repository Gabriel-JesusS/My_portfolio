import styled from "styled-components"
import { ListProjects } from "./ListProjects";
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";
import { useRef } from "react";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;

function ProjectsCardsRender() {
    let ref = useRef(null);
    let positionScroll = 0;

    const scroll = () => {
        const SlideScroll = setInterval(() => {
            if (positionScroll == 530 / 2 || positionScroll == 530 || positionScroll == 790 || positionScroll == 1050) stopScroll(SlideScroll);
            ref.current.scrollLeft= positionScroll++
            if (positionScroll > 1050) positionScroll = 0, stopScroll(SlideScroll);
        }, 0.1);

    }

    const stopScroll = (sr) => {
        clearInterval(sr)
    }


    const RenderCardProjects = ListProjects.map((valueList) => {
        return <Card_projects key={valueList.id}>
            <Title_card_projects > {valueList.name}
                <Img_card_projects src={valueList.img} />
                <Button_description>Descrição</Button_description>
            </Title_card_projects>
        </Card_projects>
    });
    return (
        <>
            <ButtonProjects onClick={scroll}>
                <img src="\public\Projects\ArrowButton.png" alt="" />
            </ButtonProjects>
            <div className="Scroll" >
                <Container_cardsP ref={ref} >
                    {RenderCardProjects}
                </Container_cardsP>
            </div>


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
overflow-y: hidden;
overflow-x: scroll;
height: 28rem;
margin-bottom: 1rem;



@media screen and (max-width:668px) {
  width: 15rem;
  cursor: pointer;
  scroll-behavior: smooth;
  height:15rem ;
  :hover,:focus{
top: -1rem;
}
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
position: relative;

border-radius: 30px;
border: 2px solid ${mars};
@media screen and (max-width:668px) {
  width: 14rem;
  height: 15rem;

}


`
const Title_card_projects = styled.p`
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

@media screen and (max-width:668px) {
 font-size: 10pt;
 width: 8rem;
 height: 1.5rem;
}

`
const Img_card_projects = styled.img`
width: 17rem;
height: 15rem;
margin-top: 1rem;
cursor: pointer;
border-radius: 30px;
@media screen and (max-width:668px) {
  width: 10rem;
  height: 10rem;

}
`
const ButtonProjects = styled.button`
margin-top: 8rem;
margin-right: 11rem;
background-color: ${mars};
border: none;
height: 7rem;
width: 7rem;
border-radius: 100%;

transition: all .6s ease-in-out;

img{
    height: 3rem;
}

 @media screen and (max-width: 668px ) {
    margin-top: 4rem;
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
    img{
        height: 2.5rem;
    }
 }
`
const Button_description = styled.button`
border: none;
color: ${WWhite};
margin-top: 0.5rem;
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