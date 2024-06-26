import React from "react";

const Project = ({ handleSkills, handleProjects, skills, projects }) => {
  return (
    <section
      className={skills && projects ? "grid-project-item" : "hidden"}
      id="projects"
    >
      <div class="project-items">
        <img src="menu/Project tile 1.png" alt="Project 1" />
        <div class="project-overlay">
          <h3>Web App</h3>
          <p>Dice game</p>
          <a
            href="https://olajutemot.github.io/Dice-game-/"
            target="_blank"
            rel="noreferrer"
            id="project-link"
          >
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div class="project-items">
        <img src="menu/project tile 2.png" alt="Project 2" />
        <div class="project-overlay">
          <h3>Web</h3>
          <p>interactive and responsive website</p>
          <a
            href="https://docs.google.com/document/d/1Qr93NMRdaiEXkNffimNsAe4TDVsc3UkB-OlbcrLAN_A/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            id="project-link"
          >
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div class="project-items">
        <img src="menu/project tile 4.png" alt="Project 4" />
        <div class="project-overlay">
          <h3>Web</h3>
          <p>Responsive website</p>
          <a
            href="https://docs.google.com/document/d/1Qr93NMRdaiEXkNffimNsAe4TDVsc3UkB-OlbcrLAN_A/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            id="project-link"
          >
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div class="project-items">
        <img src="menu/project tile 5.png" alt="Project 5" />
        <div class="project-overlay">
          <h3>Web App</h3>
          <p>A guess game built with react</p>
          <a
            href="https://guessgame-3m8a.onrender.com/"
            target="_blank"
            rel="noreferrer"
            id="project-link"
          >
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
