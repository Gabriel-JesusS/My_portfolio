import styled from "styled-components";
import { Colors, ScreenSize, fontsImport } from "./Theme";
import MainTitle from "./MainTitle";

function IconsSkills({ JS, HTML, CSS, NodeJS, REACT, FIGMA, MYSQL }) {
    return (
        <>
            <Card_technologies>

                <MainTitle technologies="Tecnologias" />
                <Container_Icons >
                    <Icons_S >
                        <svg viewBox="0 0 128 128">
                            <path fill="#F0DB4F" d={JS} ></path>
                        </svg>
                        <label>Javascript</label>
                    </Icons_S>
                    <Icons_S>
                        <svg viewBox="0 0 128 128">
                            <path fill="#E44D26" d={HTML} ></path>
                        </svg>
                        <label>HTML</label>
                    </Icons_S>
                    <Icons_S>
                        <svg viewBox="0 0 128 128">
                            <path fill="#1572B6" d={CSS}></path>
                        </svg>
                        <label>CSS</label>
                    </Icons_S>
                    <Icons_S>
                        <svg viewBox="0 0 128 128">
                            <path fill="#83CD29" d={NodeJS}></path>
                        </svg>
                        <label>Node.Js</label>
                    </Icons_S>
                    <Icons_S>
                        <svg viewBox="0 0 128 128">
                            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d={REACT}></path></g>
                        </svg>
                        <label>React.Js</label>
                    </Icons_S>
                    <Icons_S>
                        <svg viewBox="0 0 128 128">
                            <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                        </svg>
                        <label>{FIGMA}</label>
                    </Icons_S>
                    <Icons_S>
                        <svg viewBox="0 0 128 128">
                            <path fill="#00618A" d={MYSQL}></path>
                        </svg>
                        <label>My Sql</label>
                    </Icons_S>
                </Container_Icons >
            </Card_technologies>
        </>
    )
}

//ESTILIZAÇÃO DOS COMPONENTES
const Card_technologies = styled.div`
display: flex;
box-shadow: 1px 1px 3px #000;
flex-wrap:wrap;
width: ${ScreenSize.cardSkills};
margin: 1rem;

`
const Container_Icons = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap:wrap;
margin-bottom: 1rem;

`
const Icons_S = styled.div`
text-align: center;
font-size: 10pt;
color: ${Colors.WWhite};
height:4rem;
width:4rem;
margin: 1.5rem;
font-family: ${fontsImport.mainFont};
@media screen and (max-width: 1000px) {
 width: 2rem;
height: 2rem;
margin: 1rem;
    font-size: 6pt;
}
`
export default IconsSkills;