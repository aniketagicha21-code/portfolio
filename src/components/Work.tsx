import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type Project = {
  title: string;
  category?: string;
  tools: string;
  image: string;
  link: string;
  github?: string;
  description?: string;
};

const projects: Project[] = [
  {
    title: "PrepAI",
    category: "AI Mock Interview Coach",
    tools: "React, FastAPI, OpenAI Whisper, GPT-4, PostgreSQL",
    image: "/images/prepai.png",
    link: "https://prep-ai-sepia-iota.vercel.app",
    github: "https://github.com/aniketagicha21-code/PrepAI",
  },
  {
    title: "CrowdSim",
    category: "Real-Time Crowd Evacuation Simulator",
    tools: "JavaScript, HTML5 Canvas, Node.js, Express, BFS Pathfinding",
    image: "/images/crowdsim.png",
    link: "https://github.com/CSC317-S26/assignment-3-aniketagicha21-code",
  },
  {
    title: "HealthSync — AI Lab Report Analyzer",
    tools: "React, FastAPI, GPT-4, pdfplumber, PostgreSQL",
    image: "/images/healthsync.png",
    link: "https://health-sync-topaz.vercel.app",
    github: "https://github.com/aniketagicha21-code/HealthSync",
    description:
      "AI-powered lab report analyzer that parses PDF pathology reports, extracts 25+ biomarkers, classifies NORMAL/HIGH/LOW/CRITICAL via GPT-4, tested against real pathology reports flagging 13 abnormal values.",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        {project.category ? (
                          <p className="carousel-category">{project.category}</p>
                        ) : null}
                        {project.description ? (
                          <p className="carousel-description">
                            {project.description}
                          </p>
                        ) : null}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.github ? (
                          <p className="carousel-repo">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                            >
                              GitHub repository
                            </a>
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;