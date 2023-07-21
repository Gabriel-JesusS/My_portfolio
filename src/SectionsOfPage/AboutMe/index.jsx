import AdditionalText from "../../Components/AdditionalText";
import MainTitle from "../../Components/MainTitle";

function AboutMe() {
    return (

        <>
            <div id="AboutMe"></div>
            <div style={{ marginTop: "4rem" }} >
                <MainTitle AboutMeTitle={"Sobre-mim"} />
            </div>
            <div className="ContainerText">
                <AdditionalText AboutMe="Me chamo Gabriel de Jesus Silva, tenho 17 anos e estudo programação há 1 ano visando me autodesenvolver tanto nessa área como pessoa.
                    Desde o momento em que escrevi minha primeira linha de código, fui cativado pela magia da programação. A paixão instantânea que senti naquele momento tornou-se a base do meu percurso como desenvolvedor. Ao longo do último ano, comecei a desenvolver meus projetos para obter experiencia e mergulhei de cabeça nesse mundo fascinante, explorando suas infinitas possibilidades e desafios emocionantes.
                    " AboutMe2="Em resumo, minha jornada na programação tem sido emocionante e gratificante até agora. Estou animado para o que o futuro reserva e comprometido em me tornar um profissional de destaque nessa área, sempre buscando maneiras de crescer e me superar. Acredito no poder transformador da programação e estou determinado a fazer a diferença através do meu trabalho como desenvolvedor." />
            </div>

        </>
    )
}

export default AboutMe