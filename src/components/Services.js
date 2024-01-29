import React from 'react';
import { BiCodeBlock, BiCodeAlt, BiMobileAlt } from "react-icons/bi";


function Services() {
  return (
    <section className="services" id="services">
    <h2 className="heading">My <span>Services</span></h2>
    <h3>What I DO</h3>

    <div className="services-container">
        <div className="services-box">
            <i className='bx bx-code-block'><BiCodeBlock /></i>
            <h3>Web Development</h3>
            <p>
                I build eye-catching websites that are both functional and 
                visually appealing,using a mix of HTML, CSS, and JavaScript 
                to create a seamless online experience.
            </p>
        </div>

        <div className="services-box">
            <i className='bx bx-code-alt' ><BiCodeAlt /></i>
            <h3>UI/UX Design</h3>
            <p>
                Crafting user-friendly interfaces and smooth experiences, 
                my design services focus on making websites intuitive and 
                visually engaging, ensuring a delightful journey for users.

            </p>
        </div>

        <div className="services-box">
            <i className='bx bx-mobile' ><BiMobileAlt /></i>
            <h3>Mobile Development</h3>
            <p>
                Transforming ideas into user-friendly mobile apps, 
                I use technologies like React Native to create 
                innovative and responsive applications, bringing 
                concepts to life in the mobile space.
            </p>
        </div>
    </div>

</section>
  )
}

export default Services
