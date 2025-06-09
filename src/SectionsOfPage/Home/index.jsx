import NavigationGuides from "../../Components/NavigationGuides";
import AdditionalText from "../../Components/AdditionalText";
import MainTitle from "../../Components/MainTitle";
import Wave from "../../Components/Wave";
import Icons from "../../Components/IconsContact";
import ContainerY from "../../Components/ContainerY";

function Home() {
    return (
        <>
            <NavigationGuides GuidesProjects="Projetos" GuidesHome="Inicio" GuidesAboutMe="Sobre-mim" GuidesSkills="Habilidades" />
            <div className="ContainerFixed" >
                <div className="containerLeftFixedHome">
                    <div style={{ marginTop: "2rem" }}>
                        <AdditionalText MyGreetings="Olá" ComplementaryphraseMG="! eu sou:" />
                        <MainTitle HomeTitle="Gabriel de Jesus .S" />
                        <AdditionalText WhatIAm="Desenvolvedor" ComplementaryphraseWIA="FRONT-END" />
                        <Icons github="https://github.com/Gabriel-JesusS" linkedin="https://www.linkedin.com/in/gabriel-jesus-silva-802016281/" />
                    </div>
                    <div className="ContainerHomeText">
                        <AdditionalText ApresentationAboutMe="Bem-vindo ao meu portfólio, nele você ira conhecer mais sobre os meus projetos e " ApresentationAboutMe2="sobre-mim." />
                    </div>
                    <Wave />
                </div>
            </div>
            <div className="ContainerRight">
                <ContainerY />
            </div>
        </>
    )
}

export default Home