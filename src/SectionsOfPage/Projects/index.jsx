import React from "react";

import MainTitle from "../../Components/MainTitle";
import ProjectsCardsRender from "../../Components/ProjectsCardsRender";

function Projects() {

    // const childre = teste.map((val) => { return <CardProjects>{val.Name}</CardProjects> })

    return (
        <>
            <MainTitle TitleProjects="Projetos"   />
            <div className="ContainerRight" id="P'rojects" >
            <ProjectsCardsRender/>
            </div>
        </>
    )
}

export default Projects;