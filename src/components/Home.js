import React from 'react';
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

function Home() {
  return (
    <section className="home" id="home">
    <div className="home-content">
        <h3>Hello and Welcome!</h3>
        <h1>My name is Kendi Njeru</h1>
        <h3>I am a <span className="multiple-text"></span></h3>
        <p>As a developer passionate about frontend development,
            I'm thrilled to showcase my passion for creating visually stunning 
            and intuitive user interfaces in my portfolio.
        </p>
        <div className="socials">
        <a href="https://www.linkedin.com/in/kendi-njeru-b368a4209/"><i className="bx bxl-linkedin"></i><BiLogoLinkedinSquare /></a>
        <a href="https://github.com/KendiN"><i className='bx bxl-github'></i><BiLogoGithub /></a>
        </div>
        <a href="Resume.pdf" download className="btn">Download CV</a>
    </div>  

    <div className="home-img">
        <img src="assets/images/me3.png" alt="" /> 
    </div>
</section>
  )
}

export default Home
