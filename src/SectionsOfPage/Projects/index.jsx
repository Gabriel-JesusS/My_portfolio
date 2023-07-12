import React from "react";

import MainTitle from "../../Components/MainTitle";
import ProjectsCardsRender from "../../Components/ProjectsCardsRender";
import ContainerWave from "../../Components/ContainerWave";

function Projects() {

    // const childre = teste.map((val) => { return <CardProjects>{val.Name}</CardProjects> })

    return (
        <>

            <div id="Projects"></div>
            <main>
                <div style={{ marginTop: "2rem" }}>
                    <MainTitle TitleProjects="Projetos" />
                </div>
                
                <ProjectsCardsRender />
            </main>
        </>
    )
}

export default Projects;