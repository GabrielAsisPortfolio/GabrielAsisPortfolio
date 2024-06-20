import Section from "./Section"
import face from "../assets/Face.png"
import bathspa from "../assets/bathspa logo.png"
import Heading from "./Heading"

const About = () => {
  return (
    <Section bottomLine={true}>
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center relative h-full">

          <div className="flex flex-col w-full mb-4 lg:mb-0 lg:w-[50%]">
            <Heading 
              title="About-"
              subtitle="get to know me"
            />

            <div className="mt-4 relative">
              <p className="font-dmSans text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray text-justify z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="w-full h-full lg:w-[45%] flex flex-row items-center justify-between lg:justify-center lg:items-center relative">
            <img 
              src={face} 
              className="w-2/5 lg:w-3/5 xl:w-[56%] 2xl:w-[50%]"
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