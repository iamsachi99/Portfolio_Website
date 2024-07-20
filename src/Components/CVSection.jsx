import React, { useState } from 'react';
import '../Style/About.css';

const CVSection = () => {
    const [activeTab, setActiveTab] = useState('experience');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'experience':
                return (
                    <div className="tab-content tab-content-active">
                        <h3>Experience</h3>
                        <ul>
                            <li>Pending...</li>
                        </ul>
                    </div>
                );
            case 'education':
                return (
                    <div className="tab-content tab-content-active">
                        <div className="education">
                            <h3>Education</h3>
                            <br />
                            <li className="li1">
                                <b>University of Moratuwa</b>
                            </li>
                            <p className="topic">BSc. (Hons) in Artificial Intelligence</p>
                            <p className="Duration">2022-2026</p><br />
                            <p className="skills"><b>Skills:</b> Prolog · Data Structures · C (Programming Language) · Java · Object-Oriented Programming (OOP)</p>
                            <br />
                            <li className="li1">
                                <b>University of Colombo School of Computing</b>
                            </li>
                            <p className="topic">Fundamentals of IT for Beginners</p>
                            <p className="Duration">2019</p>
                            <p className="content">• Web development (HTML, CSS, PHP, MYSQL, Wordpress)</p>
                            <p className="content">• Graphic Design ( Adobe Photoshop, Adobe Illustrator, Inkscape)</p>
                            <p className="content">• MS Office Package</p><br />
                            <p className="skills"><b>Skills:</b> PHP · Inkscape · WordPress</p>
                            <br />
                            <li className="li1">
                                <b>Newstead Girls' College, Negombo</b>
                            </li>
                            <p className="topic">G.C.E. Advanced Level</p>
                            <p className="Duration">2020</p>
                            <p className="content">• Combined Mathematics</p>
                            <p className="content">• Physics</p>
                            <p className="content">• Information and Communication Technology</p>
                        </div>
                    </div>
                );
            case 'Technicalskills':
                return (
                    <div className="tab-content tab-content-active">
                        <h3 id="TechnicalSkills">Technical Skills</h3>
                        <ul>
                            <li> Programming Languages</li>
                            <ul type="circle">
                                <li className="s1">C Language</li>
                                <li className="s1">Python</li>
                                <li className="s1">Java</li>
                                <li className="s1">Prolog</li>
                                <li className="s1">Arduino</li>
                            </ul>
                            <li>Web Development</li>
                            <ul type="circle">
                                <li className="s1">HTML</li>
                                <li className="s1">CSS</li>
                                <li className="s1">PHP</li>
                                <li className="s1">Javascript</li>
                                <li className="s1">ReactJS</li>
                                <li className="s1">Wordpress</li>
                            </ul>
                            <li>Database Management</li>
                            <ul type="circle">
                                <li className="s1">MongoDB</li>
                                <li className="s1">MYSQL</li>
                                <li className="s1">MSSQL</li>
                            </ul>
                            <li>Version Control</li>
                            <ul type="circle">
                                <li className="s1">GitHub</li>
                            </ul>
                            <li>UI Design</li>
                            <ul type="circle">
                                <li className="s1">Figma</li>
                            </ul>
                            <li>Video Editing</li>
                            <ul type="circle">
                                <li className="s1">Premier Pro</li>
                                <li className="s1">After Effects</li>
                                <li className="s1">Capcut</li>
                            </ul>
                            <li>Designing Tools</li>
                            <ul type="circle">
                                <li className="s1">Photoshop</li>
                                <li className="s1">Illustrator</li>
                                <li className="s1">Lightroom</li>
                                <li className="s1">Coreldraw</li>
                                <li className="s1">GIMP</li>
                                <li className="s1">InkScape</li>
                                <li className="s1">Canva</li>
                            </ul>
                            <li>3D Modelling</li>
                            <ul type="circle">
                                <li className="s1">Blender</li>
                                <li className="s1">SketchUp</li>
                                <li className="s1">ZBrush</li>
                            </ul>
                        </ul>
                    </div>
                );
            case 'interpersonalskills':
                return (
                    <div className="tab-content tab-content-active">
                        <h3 id="InterpersonalSkills">Interpersonal Skills</h3>
                        <ul>
                            <li>Creativity</li>
                            <li>Adaptability</li>
                            <li>Project Management</li>
                            <li>Public Relations</li>
                            <li>Leadership</li>
                            <li>Teamwork</li>
                            <li>Time Management</li>
                            <li>Effective Communication</li>
                            <li>Problem Solving</li>
                            <li>Self Motivation</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="cv-container">
            <div>
                <div
                    className={`tab ${activeTab === 'experience' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('experience')}
                >
                    Experience
                </div>
                <div
                    className={`tab ${activeTab === 'education' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </div>
                <div
                    className={`tab ${activeTab === 'Technicalskills' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('Technicalskills')}
                >
                    Technical Skills
                </div>
                <div
                    className={`tab ${activeTab === 'interpersonalskills' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('interpersonalskills')}
                >
                    Interpersonal Skills
                </div>
            </div>
            {renderTabContent()}
            <div style={{ marginTop: '2em' }}>
                <a href="/Sachini%20Senanayake.pdf" download className="btn-download">
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default CVSection;
