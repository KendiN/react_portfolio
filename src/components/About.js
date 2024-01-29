import React from 'react';

function About() {
  return (
    <section className="about" id="about">
    <div className="about-img">
        <img src="assets/images/woman4.png" alt="" />
    </div>

    <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <p>My name is Kendi Njeru and I am a computer science student from Strathmore University. 
            As a frontend developer, I channel my creativity through code, specializing in 
            web development and mobile app design. With a keen eye for user experiences, 
            my UI/UX design philosophy revolves around creating interfaces that seamlessly 
            blend aesthetics with functionality. Some of my skills include:
        </p>
        <div className="skills__container container grid">
    
            <div className="skills__content">
                <ol className="skills__group">
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">CSS</li>
                    <li className="skills__item">Java</li>
                    <li className="skills__item">Python</li>
                </ol>
    
                <ol className="skills__group" start="5">
                    <li className="skills__item">Flask</li>
                    <li className="skills__item">Django</li>
                    <li className="skills__item">Git & GitHub</li>
                    <li className="skills__item">Figma</li>
                </ol>
            </div>
        </div>
        <a href="#" className="btn">Contact Me</a>
    </div>
</section>

  )
}

export default About
