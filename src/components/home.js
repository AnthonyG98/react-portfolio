import React from "react"
function HomePg(){
    return(
        <div className="home-container" id="home">
            <div className="overlay"></div>
            <div className="logo-container">
                <p className="white">&lt;</p>
                <h1 className="logo">AG</h1>
                <p className="white">/&gt;</p>
            </div>
            <div className="home-bio-container">
                <h1 className="short-bio">FRONT-END DEVELOPER</h1>
                <h1 className="short-bio">DIGITAL MEDIA SPECIALIST</h1>
                <h1 className="short-bio">CAFFEINE ENTHUSIAST</h1>
            </div>
        </div>
    )
}
export default HomePg