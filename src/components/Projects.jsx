import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import projectsData from "../data/projectsData";


export default function Projects() {
  const [resized, setResized] = useState(true);


  const scrollHandler = () => {
    if (window.innerWidth > 850) {
      setResized(true);
    } else {
      setResized(false);
    }
  }

  useEffect(() => {
    scrollHandler();
    window.addEventListener('resize', scrollHandler);
    return () => window.removeEventListener('resize', scrollHandler);
  }, []);

  return (
    <div id="projects" className="projects-container">
      <h1>Projetos</h1>

      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={resized ? "3" : "1"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
      >
        {
          projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <img className="project-img" src={project.image} alt={`${project.title} project`} />
              <div className="project-info">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.deployLink && (
                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 1024 1024" className="project-link-icon">
                        <path fill="#fff" d="M144.624 65.392l735.744 446.592-736.736 446.624zm0-64a63.765 63.765 0 0 0-31.088 8.063c-20.32 11.28-32.912 32.705-32.912 55.937l-.992 893.216a63.958 63.958 0 0 0 32.912 55.936 63.937 63.937 0 0 0 31.088 8.065c11.712 0 23.472-3.216 33.775-9.664l736.72-446.624a63.94 63.94 0 0 0 30.257-54.336c0-22.112-11.44-42.672-30.257-54.352L178.4 11.025a64.084 64.084 0 0 0-33.775-9.632z"></path>
                      </svg>
                    </a>
                  )}
                  <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 16 16" className="project-link-icon">
                      <path
                        fill="#ffffff"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
