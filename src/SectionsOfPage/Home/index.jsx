import NavigationGuides from "../../Components/NavigationGuides"
import AdditionalText from "../../Components/AdditionalText"

function Home() {


    return (
        <>
            <NavigationGuides GuidesProjects="Projetos" GuidesHome="Inicio" GuidesAboutMe="Sobre-mim" GuidesSkills="Habilidades" />
            <AdditionalText />
        </>
    )
}

export default Home