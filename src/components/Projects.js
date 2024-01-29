import React from 'react';
import { BiLinkExternal } from "react-icons/bi";


function Projects() {
  return (
    <section className="projects" id="projects">
    <h2 className="heading">Latest <span>Projects</span></h2> 

    <div className="projects-container">
        <div className="projects-box">
            <img src="assets/images/ambulance.jpg" alt="" />
            <div className="projects-layer">
                <h4>Emergency Aid Website</h4>
                <p>
                    Developed a website to be used in the event of an Emergency
                    to assist users to locate the nearest Emergency service providers
                    closest to them.
                    <a href="https://github.com/KendiN/Emergency-Aid-System"><i className="bx bx-link-external"></i><BiLinkExternal /></a>
                </p>
            </div>
        </div>

        <div className="projects-box">
            <img src="assets/images/course1.jpg" alt="" />
            <div className="projects-layer">
                <h4>Online Courses Recommendations</h4>
                <p>Developed a website using python and Django
                    to recommend online courses to students 
                    based on their career interests around
                    academic performance.
                    <a href="#"><i className="bx bx-link-external"></i><BiLinkExternal /></a>
                </p>
            </div>
        </div>

        <div className="projects-box">
            <img src="assets/images/rest.jpg" alt="" />
            <div className="projects-layer">
                <h4>Restuarant Management Website</h4>
                <p>Develeloped a website designed to help in the 
                    management of a Restuarant. Tracks all the 
                    orders and payments made by customers.
                    <a href="#"><i className="bx bx-link-external"></i><BiLinkExternal /></a>
                </p>
            </div>
        </div>

        <div className="projects-box">
            <img src="assets/images/school.jpg" alt="" />
            <div className="projects-layer">
                <h4>Elearning esoma website</h4>
                <p>Redesigned the esoma elearning website and improving
                    the user design and experience of the wesbite.
                    <a href="https://github.com/KendiN/esoma"><i className="bx bx-link-external"></i><BiLinkExternal /></a>
                </p>
            </div>
        </div>

        <div className="projects-box">
            <img src="assets/images/books.jpg" alt="" />
            <div className="projects-layer">
                <h4>Book review mobile app</h4>
                <p>Developed a mobile applications 
                    that allows users to track the books they have
                    read and  their give reviews.
                    <a href="#"><i className="bx bx-link-external"></i><BiLinkExternal /></a>
                </p>
            </div>
        </div>

        <div className="projects-box">
            <img src="assets/images/dash.jpg" alt="" />
            <div className="projects-layer">
                <h4>Bank Logs Dashboard</h4>
                <p>Redesigned the Dashboard for co-operative banks
                    logs by trying to and improve
                    the user design and experience.
                    <a href="#"><i className="bx bx-link-external"></i><BiLinkExternal /></a>
                </p>
            </div>
        </div>

    </div>
</section>
  )
}

export default Projects
