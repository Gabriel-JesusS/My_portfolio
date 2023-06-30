import { MyName, ContainerLeft, AdditionalTextName, RedMarking, NavigationGuides, Guides, ContainerRight,AdditionalText,ContainerWave } from "./Styled"
function Home() {
    return (
        <>
            <ContainerRight>
                <NavigationGuides>
                    <Guides >Inicio</Guides>
                    <Guides>Projetos</Guides>
                    <Guides>Sobre-mim</Guides>
                    <Guides>Habilidades</Guides>
                </NavigationGuides>
            </ContainerRight>
            <ContainerLeft>
                <AdditionalTextName> <RedMarking>Ola</RedMarking>!eu sou:</AdditionalTextName>
                <MyName>Gabriel de Jesus .S</MyName>
                <AdditionalTextName > Desenvolvedor <RedMarking>FRONT-END</RedMarking></AdditionalTextName>
                <AdditionalText >Bem vindo ao meu portifolio, nele <br/> você ira conhecer mais sobre<br/> os meus projetos e <RedMarking>sobre-mim</RedMarking>.</AdditionalText>
            </ContainerLeft>
             <ContainerWave ><AdditionalText style={{position:"realative",top:"11rem",marginRight:"1rem",animation: "ScrollDow 1s linear infinite" }}>Scroll-dow⇩</AdditionalText></ContainerWave> 
        </>
    )
}

export default Home