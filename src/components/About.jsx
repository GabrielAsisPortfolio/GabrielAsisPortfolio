import Section from "./Section"
import face from "../assets/Face.png"
import bathspa from "../assets/bathspa logo.png"
import Heading from "./Heading"

const About = () => {
  return (
    <Section bottomLine={true} id="#about">
      <div className="container py-8"  id="about">
        <div className="flex flex-col lg:flex-row justify-between items-center relative h-full">

          <div className="flex flex-col w-full mb-4 lg:mb-0 lg:w-[50%]">
            <Heading 
              title="About-"
              subtitle="get to know me"
              className="mb-4"
              glow={true}
            />

            <div className="relative">
              <p className="font-dmSans text-[0.5rem] sm:text-[0.65rem] md:text-xs lg:text-xs xl:text-sm 2xl:text-base text-gray text-justify z-10">
              Hello! My name is Gabriel Gono Asis, and I'm an 18-year-old third-year student at Bath Spa University RAK. I'm passionate about the digital world and have honed my skills in UI/UX design, front-end development, prototyping, and other digital design disciplines. <br /> <br /> Throughout my academic journey, I've developed a keen eye for design and a strong understanding of the latest technologies and trends in the digital space. My coursework and projects have equipped me with the ability to create user-friendly and visually appealing interfaces, ensuring a seamless and engaging user experience.
              </p>
            </div>
          </div>

          <div className="w-full h-full lg:w-[45%] flex flex-row items-center justify-between lg:justify-center lg:items-center relative">
            <img 
              src={face} 
              className="w-2/5 lg:w-3/5 xl:w-[56%] 2xl:w-[50%] drop-shadow-xl"
              alt="Face" 
            />

            <img  
              src={bathspa}
              className="w-2/5 lg:hidden"
              alt="Bath spa Logo" 
            />
          </div>
        </div>
        
      </div>
    </Section>
  )
}

export default About