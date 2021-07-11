import React from "react"
import ProjectOne from "../images/project-one.png"
import ProjectTwo from "../images/project-two.png"

function ProjectPg(){
    return(
        <div className="project-container" id="projectPg">
            <h1 className="project-head">Projects</h1>
            <div className="projects">
                <div className="project-one">
                    <div className="project-text-container">
                        <h1 className="project-title">Sitting Clean Mobile Detailing</h1>
                        <p className="project-text">This project was created using React for a client's mobile detailing business.
                        It is fully responsive in design and comes with a contact form linked to the client's google email address.
                        With this project I tried to experiment with banner ads along with the entire copyright.
                        </p>
                        <div className="button-container">
                            <a className="project-button" href="https://sittingcleanmobiledetailing.com/">VIEW LIVE</a>
                            <a className="project-button" href="https://github.com/AnthonyG98/sitting-clean-mobile-detailing">VIEW SOURCE CODE</a>
                        </div>
                    </div>
                    <div className="project-img-container">
                        <img src={ProjectOne} alt="Sitting Clean Mobile Detailing" className="project-img" />
                    </div>
                </div>
                <div className="project-one">
                    <div className="project-text-container">
                        <h1 className="project-title">JessFarla Art Portfolio</h1>
                        <p className="project-text">For this project, the client needed an online art portfolio to
                        display her artworks. It was a challenge experimenting with React Router DOM but I managed to pull
                        it off. There are four pages total, all fully optimized for mobile.
                        </p>
                        <div className="button-container">
                        <a className="project-button" href="https://jessfarlaart.com/">VIEW LIVE</a>
                            <a className="project-button" href="https://github.com/AnthonyG98/jess-farla-portfolio">VIEW SOURCE CODE</a>
                        </div>
                    </div>
                    <div className="project-img-container">
                        <img src={ProjectTwo} alt="Jess Farla Art" className="project-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectPg