import AdditionalText from "../../Components/AdditionalText";
import ContainerWave from "../../Components/ContainerWave";
import MainTitle from "../../Components/MainTitle";
import { Button_description } from "../../Components/ProjectsCardsRender";
import { useState } from "react";
function AboutMe() {
    const [view, setView] = useState("10rem");
    const moreText = () => view == "100%" ? setView("10rem") : setView("100%");

    return (

        <>
            <div id="AboutMe"></div>
            <main>
                <div style={{ marginTop: "2rem" }} >
                    <MainTitle AboutMeTitle={"Sobre-mim"} />
                </div>
                <div className="ContainerCenterText">
                    <AdditionalText AboutMe="Me chamo Gabriel de Jesus Silva ,tenho 17 anos e estudo programação a 1 ano com o objetivo de me auto desenvolver tanto nessa área como pessoa.
                    Desde o momento em que escrevi minha primeira linha de código, fui cativado pela magia da programação. A paixão instantânea que senti naquele momento tornou-se a base do meu percurso como desenvolvedor. Ao longo do último ano, mergulhei de cabeça nesse mundo fascinante, explorando suas infinitas possibilidades e desafios emocionantes." />
                    {/* <Button_description onClick={moreText}>Veja mais</Button_description> */}
                </div>
            </main>
        </>
    )
}

export default AboutMe