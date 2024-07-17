import React from 'react';
import '../Style/Education.css';

const Education = () => {
    return (
        <div className="education">
            <center><h2>EDUCATION</h2></center>
            <br/>
            <li className="li1">
                <b>University of Moratuwa</b>
            </li>
            <p className="topic">BSc. (Hons) in Artificial Intelligence</p>
            <p className="Duration">2022-2026</p><br/>
            <p className="skills"><b>Skills:</b> Prolog · Data Structures · C (Programming Language) · Java ·
                Object-Oriented Programming (OOP)</p>
            <br/>
            <li className="li1">
                <b>University of Colombo School of Computing</b>
            </li>
            <p className="topic">Fundamentals of IT for Beginners</p>
            <p className="Duration">2019</p>
            <p className="content">• Web development (HTML, CSS, PHP, MYSQL, Wordpress)</p>
            <p className="content">• Graphic Design ( Adobe Photoshop, Adobe Illustrator, Inkscape)</p>
            <p className="content">• MS Office Package</p><br/>
            <p className="skills"><b>Skills:</b> PHP · Inkscape · WordPress</p>
            <br/>
            <li className="li1">
                <b>Newstead Girls' College, Negombo</b>
            </li>
            <p className="topic">G.C.E. Advanced Level</p>
            <p className="Duration">2020</p>
            <p className="content">• Combined Mathematics</p>
            <p className="content">• Physics</p>
            <p className="content">• Information and Communication Technology</p>
        </div>
    );
}

export default Education;
