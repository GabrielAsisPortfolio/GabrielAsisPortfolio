import Heading from "./Heading"
import ProjectBox from "./ProjectBox"
import Section from "./Section"

import { projectDetails } from "../constants"

const Projects = () => {
  return (
    <Section bottomLine={true} id="projects">
      <div className="container py-8">
        <Heading 
          title="Projects-"
          subtitle="discover my work"
          className="mb-8"
          glow={false}
        />

        <div className="grid grid-cols-2 gap-4">
        {projectDetails.map((project) => (
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
      </div>
    </Section>
  )
}

export default Projects