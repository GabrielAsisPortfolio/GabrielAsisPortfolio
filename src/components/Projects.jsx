import Heading from "./Heading"
import ProjectBox from "./ProjectBox"
import Section from "./Section"

import { projectDetails } from "../constants"

const Projects = () => {

  return (
    <Section bottomLine={false} id="projects">
      <div className="container py-8">
        <Heading 
          title="Projects-"
          subtitle="discover my work"
          className="mb-8"
          glow={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-2">
          <div className="flex lg:hidden xl:flex flex-col gap-y-2 mb-2 lg:mb-0">
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

          <div className="flex lg:hidden xl:flex flex-col gap-y-2 mb-2 lg:mb-0">
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

          <div className="flex lg:hidden xl:flex flex-col gap-y-2">
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

          <div className="absolute -right-20 top-10 bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[68%] h-[8%] lg:w-[53%] lg:h-[23%]  xl:w-[45%] xl:h-[38%] blur-[14px] rounded-full -z-10"></div>

          <div className="flex lg:hidden absolute -left-20 top-[50rem] md:top-[65rem] bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[80%] h-[8%] blur-[14px] xl:blur-[20px] rounded-full -z-10"></div>

          <div className="flex lg:hidden absolute -right-20 bottom-[50rem] md:bottom-[65rem] bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[68%] h-[8%] blur-[14px] rounded-full -z-10"></div>

          <div className="absolute -left-20 bottom-0 lg:bottom-20 xl:bottom-0 bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-[68%] h-[8%] lg:w-[53%] lg:h-[23%] xl:w-[45%] xl:h-[38%] blur-[14px] xl:blur-[20px] rounded-full -z-10"></div>
        </div>
      </div>
    </Section>
  )
}

export default Projects