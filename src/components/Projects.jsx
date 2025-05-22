import Heading from "./Heading"
import ProjectBox from "./ProjectBox"
import Section from "./Section"

import { projectDetails } from "../constants"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
  const sectionRef = useRef(null);

  const col1 = useRef(null);
  const col2 = useRef(null);
  const col3 = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline({
        scrollTrigger: {
        trigger: sectionRef.current,
        toggleActions: "play none none none",
        start: "top center",
        end: "bottom center",
        markers: false, 
      },});

      tl.fromTo(
        [sectionRef.current, col1.current, col2.current, col3.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.6, ease: "power2.inOut" }
      );
    }
  }, []);
  
  return (
    <Section bottomLine={false} id="projects">
      <div className="container py-8" ref={sectionRef}>
        <Heading 
          title="Projects-"
          subtitle="discover my work"
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-2">
          <div ref={col1} className="flex lg:hidden xl:flex flex-col gap-y-2 mb-2 lg:mb-0">
            {projectDetails.slice(0, 2).map((project) => (
              <ProjectBox 
                key={project.id}
                title={project.title}
                urlTitle={project.urlTitle}
                createdWhen={project.createdWhen}
                img1={project.img1}
                img2={project.img2}
                img3={project.img3}
                url={project.url}
                categories={project.categories}
                flex={project.flex}
              />
            ))}
          </div>

          <div ref={col2} className="flex lg:hidden xl:flex flex-col gap-y-2 mb-2 lg:mb-0">
            {projectDetails.slice(2, 4).map((project) => (
              <ProjectBox 
                key={project.id}
                title={project.title}
                urlTitle={project.urlTitle}
                createdWhen={project.createdWhen}
                img1={project.img1}
                img2={project.img2}
                img3={project.img3}
                url={project.url}
                categories={project.categories}
                flex={project.flex}
              />
            ))}
          </div>

          <div ref={col3} className="flex lg:hidden xl:flex flex-col gap-y-2">
            {projectDetails.slice(4, 6).map((project) => (
              <ProjectBox 
                key={project.id}
                title={project.title}
                urlTitle={project.urlTitle}
                createdWhen={project.createdWhen}
                img1={project.img1}
                img2={project.img2}
                img3={project.img3}
                url={project.url}
                categories={project.categories}
                flex={project.flex}
              />
            ))}
          </div>

          <div className="hidden lg:flex xl:hidden flex-col gap-y-2 mb-2 lg:mb-0">
            {[0, 3, 4].map((index) => (
              <ProjectBox 
                key={projectDetails[index].id}
                title={projectDetails[index].title}
                urlTitle={projectDetails[index].urlTitle}
                createdWhen={projectDetails[index].createdWhen}
                img1={projectDetails[index].img1}
                img2={projectDetails[index].img2}
                img3={projectDetails[index].img3}
                url={projectDetails[index].url}
                categories={projectDetails[index].categories}
                flex={projectDetails[index].flex}
              />
            ))}
          </div>

          <div className="hidden lg:flex xl:hidden flex-col gap-y-2 mb-2 lg:mb-0">
            {[2, 1, 5].map((index) => (
              <ProjectBox 
                key={projectDetails[index].id}
                title={projectDetails[index].title}
                urlTitle={projectDetails[index].urlTitle}
                createdWhen={projectDetails[index].createdWhen}
                img1={projectDetails[index].img1}
                img2={projectDetails[index].img2}
                img3={projectDetails[index].img3}
                url={projectDetails[index].url}
                categories={projectDetails[index].categories}
                flex={projectDetails[index].flex}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Projects