import React from 'react';
import './App.css'
import Interest from './Components/Interest';
import Certifications from './Components/Certifications';
import About from './Components/About';
import Volunteering from './Components/Volunteering';
import Education from './Components/Education';
import HonorsAwards from './Components/HonorsAwards';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
      <div className="App">
        <header className="header">
          <section id="Home">
            <div className="container3">
              <img src="https://img.freepik.com/free-vector/gradient-background-futuristic-style_23-2149129666.jpg?t=st=1721149939~exp=1721153539~hmac=b5b9a51350c928f28a9b8395633fb0ceb18b8efd02eb1a67371bb79415997000&w=996"
                  className="Home" alt="Snow"/>
              <div className="welcome">
                <ul className="nav-list">
                  <li className="l"><a href="#Home">Home</a></li>
                  <li className="l"><a href="#About">About</a></li>
                  <li className="l"><a href="#Education">Education</a></li>
                  <li className="l"><a href="#Interest">Skills</a></li>
                  <li className="l"><a href="#Certifications">Certifications</a></li>
                  <li className="l"><a href="#Projects">Projects</a></li>
                  <li className="l"><a href="#Volunteering">Volunteering</a></li>
                  <li className="l"><a href="#HonorsAwards">Honors & Awards</a></li>
                  <li className="l"><a href="#Contact">Contact</a></li>
                </ul>
                <p className="welcome2">PORTFOLIO | SACHINI SENANAYAKE</p>
              </div>
            </div>
          </section>
        </header>
        <main className="container">
          <section id="Home" className="section">
            <index/>
          </section>
          <section id="about" className="section">
            <About/>
          </section>
          <section id="education" className="section">
            <Education/>
          </section>
          <section id="interest" className="section">
            <Interest/>
          </section>
          <section id="certifications" className="section">
            <Certifications/>
          </section>
          <section id="projects" className="section">
            <Projects/>
          </section>
          <section id="Volunteering" className="section">
            <Volunteering/>
          </section>
          <section id="HonorsAwards" className="section">
            <HonorsAwards/>
          </section>
          <section id="contact" className="section">
            <Contact/>
          </section>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Sachini Senanayake. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;
