import React from "react"
import AboutImg from "../images/about-img.png"
function Aboutpg(){
    return(
        <div className="about-container">
            <h1 className="about-head" id="about">Hey,</h1>
            <p className="about-text">my name is Anthony Gonzalez. I am
            a front-end developer and designer with the creativity of Los 
            Angeles running through my head. Shoot me a message if there's anything I can do for 
            you.
            </p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/anthony-gonzalez-76a9171b7/" className="about-link"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/AnthonyG98" className="about-link"><i class="fab fa-github-square" ></i></a>
            </div>
            <img src={AboutImg} alt="front end developer Anthony G" className="about-img" />
        </div>
    )
}
export default Aboutpg