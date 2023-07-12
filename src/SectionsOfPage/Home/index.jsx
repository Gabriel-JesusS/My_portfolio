import NavigationGuides from "../../Components/NavigationGuides"
import AdditionalText from "../../Components/AdditionalText"
import MainTitle from "../../Components/MainTitle"
import ContainerWave from "../../Components/ContainerWave"
import Icons from "../../Components/Icons"
import ContainerY from "../../Components/ContainerY"

function Home() {


    return (
        <>


            <div id="/">Home</div>
            <NavigationGuides GuidesProjects="Projetos" GuidesHome="Inicio" GuidesAboutMe="Sobre-mim" GuidesSkills="Habilidades" />

            <div className="MainTeste" >
                <div className="MainContainerLeft">
                    <div style={{marginTop:"2rem"}}>

                    <AdditionalText MyGreetings="Ola" ComplementaryphraseMG="! eu sou:" />
                    <MainTitle HomeTitle="Gabriel de Jesus .S" />
                    <AdditionalText WhatIAm="Desenvolvedor" ComplementaryphraseWIA="FRONT-END" />
                    <Icons github="https://github.com/Gabriel-JesusS" linkedin="https://www.linkedin.com/in/gabriel-jesus-silva-802016281/" />
                    </div>
                    <div className="ContainerText">
                        <AdditionalText ApresentationAboutMe="Bem vindo ao meu portifolio, nele você ira conhecer mais sobre os meus projetos e " ApresentationAboutMe2="sobre-mim." />
                    </div>
                </div>

            </div>
            <div className="ContainerRight">
                <ContainerY />
            </div>




            {/* <ContainerWave /> */}


        </>
    )
}

export default Home