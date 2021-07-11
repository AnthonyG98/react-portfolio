import './App.css';
import HomePg from "./components/home"
import ProjectPg from "./components/projects"
import Aboutpg from './components/about';
import ContactPg from './components/contact';
import Footer from './components/footer';
import { Link, animateScroll as scroll } from "react-scroll";
function App() {
  function openContact(){
    const linksContainer = document.querySelector(".links-container");
    const links = document.querySelector(".links");
    const closeContact = document.querySelector(".close-container");
    linksContainer.style.animation = "open-contact 0.3s ease"
    linksContainer.style.animationFillMode = "forwards"
    links.style.opacity = "1"
    closeContact.style.display = "flex"
  }
  function closeContact(){
    const closeContact = document.querySelector(".close-container");
    const linksContainer = document.querySelector(".links-container");
    linksContainer.style.animation = "close-contact 0.3s ease";
    closeContact.style.display = "none"
  }
  return (
    <div className="app">
      <div className="bars-container" onClick={openContact}>
          <div className="bar" id="open-one"></div>
          <div className="bar" id="open-two"></div>
        </div>
      <div className="links-container">
      <div className="close-container" onClick={closeContact}>
          <div className="bar" id="close-one"></div>
          <div className="bar" id="close-two"></div>
        </div>
        <div className="links">
          <Link
          onClick={closeContact}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} 
          className="link" 
          >HOME</Link>
          <Link
          onClick={closeContact}
          activeClass="active"
          to="projectPg"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500} 
          className="link"   
          >PROJECTS</Link>
          <Link
           onClick={closeContact}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500} 
          className="link"
          >ABOUT ME</Link>
          <Link
          onClick={closeContact}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500} 
          className="link"
          >CONTACT</Link>
        </div>
      </div>
      <HomePg
      id="home"/>
      <ProjectPg id="projectPg"/>
      <Aboutpg id="about"/>
      <ContactPg id="contact"/>
      <Footer />
    </div>
  );
}

export default App;
