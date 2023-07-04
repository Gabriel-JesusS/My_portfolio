import styled from "styled-components"
import { Colors, FontsSize } from "./Theme";
import { Fonts } from "./Theme";

const { WWhite, dark, shadowBlue, mars } = Colors;
const { NameFontSize } = FontsSize;
const { mainFont } = Fonts;

function ButtonScroll(){
    
    
    return(
        <>
      <Button_scrollX >
          <Button_scrollXImg src={"/public/Projects/ArrowButton.png"}/>
        </Button_scrollX>
        </>
    )
}

 const Button_scrollXImg = styled.img`
appearance: none;
background-color: ${mars};
background-size: cover;
height:3rem;
width:3rem;
border-radius: 10rem;
`
 const Button_scrollX = styled.button`
appearance: none;
background-color: ${mars};
background-size: cover;
height: 7rem;
width: 7rem;
border-radius: 10rem;
position: relative;
top: 15rem;
right: -7rem;
`
export default ButtonScroll