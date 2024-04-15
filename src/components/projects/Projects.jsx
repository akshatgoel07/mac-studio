import React from "react";
import "./Projects.css";
import projectImage4 from '../../assets/fiverr.jpg'
import projectImage2 from '../../assets/fiverr-1.jpg'
import projectImage3 from '../../assets/fiverr-2.jpg'
import project1Image from '../../assets/fiverr-3.jpg'

const Projects = () => {
    const projectImages = [
        { src: projectImage4, caption: "We craft the perfect plan to bring your vision to life." },
        { src: projectImage2, caption: "Building your solution with innovation and precision." },
        { src: projectImage3, caption: " Seamlessly releasing your creation to the world." },
        { src: project1Image, caption: "Keeping your project running smoothly and adapting to change." }
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
