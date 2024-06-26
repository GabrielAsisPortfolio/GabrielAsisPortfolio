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

  const glowRef1 = useRef(null);
  const glowRef2 = useRef(null);
  const glowRef3 = useRef(null);
  const glowRef4 = useRef(null);

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

      tl.fromTo(
        [glowRef1.current, glowRef2.current, glowRef3.current, glowRef4.current,],
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2,  ease: "power2.inOut" },
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

          <div ref={glowRef1} className="absolute -right-12 top-10 bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[68%] h-[8%] lg:w-[53%] lg:h-[23%]  xl:w-[45%] xl:h-[38%] blur-[14px] rounded-full -z-10"></div>

          <div ref={glowRef2}  className="flex lg:hidden absolute -left-20 top-[50rem] md:top-[65rem] bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[68%] h-[8%] blur-[14px] xl:blur-[20px] rounded-full -z-10"></div>

          <div ref={glowRef3}  className="flex lg:hidden absolute -right-12 bottom-[50rem] md:bottom-[65rem] bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[68%] h-[8%] blur-[14px] rounded-full -z-10"></div>

          <div ref={glowRef4}  className="absolute -left-20 bottom-0 lg:bottom-20 xl:bottom-0 bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[68%] h-[8%] lg:w-[53%] lg:h-[23%] xl:w-[45%] xl:h-[38%] blur-[14px] xl:blur-[20px] rounded-full -z-10"></div>
        </div>
      </div>
    </Section>
  )
}

export default Projects