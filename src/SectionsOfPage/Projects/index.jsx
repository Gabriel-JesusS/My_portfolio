import React from "react";

import MainTitle from "../../Components/MainTitle";
import ProjectsCardsRender from "../../Components/ProjectsCardsRender";


function Projects() {


    return (
        <>

            <div id="Projects"></div>
            <div style={{ marginTop: "5rem" }}>
                <MainTitle TitleProjects="Projetos" />
            </div>
            <ProjectsCardsRender />
        </>
    )
}

export default Projects;