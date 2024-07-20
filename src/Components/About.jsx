import React from 'react';
import '../Style/About.css';
import CVSection from './CVSection';

function About() {
    return (
        <section id="About" className="section">
            <div className="container">
                <div className="left">
                    <div className="m1">
                        <center>
                            <img
                                src="https://media.licdn.com/dms/image/D5603AQEOjPL0i68CmA/profile-displayphoto-shrink_400_400/0/1719042289485?e=1726704000&v=beta&t=KQoJQ2mN5RSzlcs-nX40jGPa8Xsu4wKjvyRjy9mcYbw"
                                alt="Profile" className="profile-image"/>
                            <h1>Sachini Senanayake</h1>
                            <h3>Undergraduate | BSc.( Hons) in Artificial Intelligence | University of Moratuwa</h3>
                            <p className="loc"> Colombo District, Western Province, Sri Lanka </p>
                        </center>
                    </div>
                    <br/>
                    <div align="justify" className="desc">
                        <p>As a dedicated AI undergraduate with a proven track record of excellence, I am driven by a
                            passion for technology and innovation. My ambition is to start my professional journey in a
                            dynamic environment where I can gain valuable, comprehensive experience. I pride myself on
                            being self-motivated and detail-oriented, balancing my academic pursuits with active
                            participation in extracurricular activities. These experiences have been instrumental in
                            shaping my skills, personality, and overall attitude.</p>
                        <br/>
                        <p>Volunteerism is a significant aspect of my life, playing a crucial role in my personal and
                            professional growth. It has allowed me to enhance my abilities, expand my horizons, and make
                            meaningful contributions to society. I am actively seeking opportunities that will allow me
                            to continue this path of growth and service.</p>
                        <h4>Top Skills: </h4>
                        <ul className="topskills">
                            <li>Video Editing</li>
                            <li>Graphic Designing</li>
                            <li>Crocheting</li>
                            <li>Creativity and Innovation</li>
                        </ul>
                    </div>
                    <CVSection />
                </div>
            </div>
        </section>
    );
}

export default About;
