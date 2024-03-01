import React from "react";
import "./Projects.css";
import project1Image from '../../assets/buzz.png'
import projectImage2 from '../../assets/django.png'
import projectImage3 from '../../assets/phd.png'
import projectImage4 from '../../assets/codeops.png'

const Projects = () => {
    const projectImages = [
        { src: projectImage4, caption: "CodeOps: Complier Designer" },
        { src: projectImage2, caption: "Django Automation Software" },
        { src: projectImage3, caption: "Univeristy PHD Program WebApp" },
        { src: project1Image, caption: "Buzz" }
    ];

    return (
        <div className="top">
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
