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
      <div className="container" ref={sectionRef}>
        <Heading 
          title="Projects-"
          subtitle="discover my work"
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
          {projectDetails.map((project) => (
            <div key={project.id} className="flex flex-col h-full">
              <ProjectBox 
                title={project.title}
                img={project.img}
                url={project.url}
                categories={project.categories}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects