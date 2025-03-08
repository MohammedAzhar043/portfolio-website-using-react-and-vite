import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = "Mohammed Azhar";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project One",
      description: "A web application built using react and Node.js",
      link: "#",
    },
    {
      title: "Project Two",
      description: "An ecommerce project built using react and spring boot",
      link: "#",
    },
  ];

  return (
    <div className="App">
      {/* header section here */}
      <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">projects</a>
          <a href="#contact">Contacts</a>
        </nav>
      </header>
      {/* About section here */}

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello , I am {name} and passionate {profession} , I love building web
          application that solve real world problmes
        </p>
      </section>

      {/* project section here */}

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* contact section here */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>
          if you would like to get in touch , feel free to email me at 
          <a href="mailto:mohammedazhar@gmail.com"> mohammedazhar@gmail.com</a>
        </p>
      </section>

       {/* footer section here */}

       <footer className="footer">
          <p>2025.  All Right Reserved</p>
       </footer>
    </div>
  );
}

export default App;
