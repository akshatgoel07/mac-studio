import React from "react";
import "./Projects.css"; // You'll create this CSS file for styling
import project1Image from '../../assets/buzz.jpg'

const Projects = () => {
    const projectImages = [
        { src: project1Image, caption: "Project 1" },
        { src: project1Image, caption: "Project 2" },
        { src: project1Image, caption: "Project 3" },
        { src: project1Image, caption: "Project 4" }
    ];

    return (
        <div className="main">
        <div className="projects-grid">
            <div className="project-row">
                <div className="project-item">
                    <img src={projectImages[0].src} alt={projectImages[0].caption} />
                    <div className="caption">{projectImages[0].caption}</div>
                </div>
                <div className="project-item">
                    <img src={projectImages[1].src} alt={projectImages[1].caption} />
                    <div className="caption">{projectImages[1].caption}</div>
                </div>
            </div>
            <div className="project-row">
                <div className="project-item">
                    <img src={projectImages[2].src} alt={projectImages[2].caption} />
                    <div className="caption">{projectImages[2].caption}</div>
                </div>
                <div className="project-item">
                    <img src={projectImages[3].src} alt={projectImages[3].caption} />
                    <div className="caption">{projectImages[3].caption}</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;
