import React from 'react';
import '../Style/Certifications.css';

function Certifications() {
    return (
        <section id="Certifications" className="section">
            <div className="container">
                <center><h2>CERTIFICATIONS</h2></center>
                <br/>
                    <a href="https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1" className="a2">
                    <li className="li1">
                        <b>Web Design for Beginners</b>
                    </li>
                    <p className="topic">Centre for Open & Distance Learning (CODL) University of Moratuwa, Sri Lanka</p>
                    <p className="Duration">Issued Jul 2024</p>
                    </a>
                    <br/>
                <a href="https://www.hackerrank.com/certificates/3fa683d202ea" className="a2">
                    <li className="li1">
                        <b>CSS (Basic)</b>
                    </li>
                    <p className="topic">HackerRank</p>
                    <p className="Duration">Issued Jun 2024</p>
                    <li className="point">It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.</li>
                </a>
                <br/>
                <a href="https://www.hackerrank.com/certificates/6c1e2b5b1821" className="a2">
                    <li className="li1">
                        <b>Frontend Developer (React)</b>
                    </li>
                    <p className="topic">HackerRank</p>
                    <p className="Duration">Issued Jun 2024</p>
                    <li className="point">It covers topics like React, CSS, and JavaScript.</li>
                </a>
                <br/>
                <a href="https://www.linkedin.com/in/sachi-senanayake/details/certifications/1718920812800/single-media-viewer/?profileId=ACoAAEnbIXYB3oTHUKeZMx82d6AjUm1PKDX2Udw" class="a2">
                    <li className="li1">
                        <b>Responsive Web Design</b>
                    </li>
                    <p className="topic">freeCodeCamp</p>
                    <p className="Duration">Issued Jun 2024</p>
                    <p className="content">As part of this certification, I built the following projects and got all automated test suites to pass:
                    </p>
                    <p className="Cont">
                        <ul>
                            <li className="point">Build a Survey Form</li>
                            <li className="point">Build a Tribute Page</li>
                            <li className="point">Build a Technical Documentation Page</li>
                            <li className="point">Build a Product Landing Page</li>
                            <li className="point">Build a Personal Portfolio Webpage</li>
                        </ul>
                    </p>
                    </a>
                    <br/>
                <a href="https://www.hackerrank.com/certificates/f750cd9ce907" className="a2">
                    <li className="li1">
                        <b>SQL (Basic)</b>
                    </li>
                    <p className="topic">HackerRank</p>
                    <p className="Duration">Issued Jun 2024</p>
                    <li className="point">It includes simple queries, relationships, and aggregators.</li>
                </a>
            </div>
        </section>
    );
}

export default Certifications;
