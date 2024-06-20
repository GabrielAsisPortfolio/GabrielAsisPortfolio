import Section from "./Section"
import face from "../assets/Face.png"
import bathspa from "../assets/bathspa logo.png"

const About = () => {
  return (
    <Section bottomLine={true}>
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center relative h-full">

          <div className="flex flex-col w-full mb-4 lg:mb-0 lg:w-[45%]">
            <div className="flex flex-row items-center w-full">
              <h1 className="font-roboto font-bold text-3xl md:text-4xl">
                About- 
              </h1>
              <p className="ml-3 italic text-md md:text-lg items-center font-roboto font-extralight text-gray">
                get to know me
              </p>
            </div>

            <div className="mt-4">
              <p className="font-dmSans text-xs md:text-sm text-gray text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="w-full h-full lg:w-[45%] flex flex-row items-center justify-between lg:justify-center relative">
            <img 
              src={face} 
              className="w-2/5 lg:absolute lg:w-[8.5rem] z-20 bottom-0 left-20"
              alt="Face" 
            />

            <img 
              src={bathspa}
              className="w-2/5 lg:absolute lg:w-[8.5rem] z-10"
              alt="Bath spa Logo" 
            />
          </div>
        </div>
        
      </div>
    </Section>
  )
}

export default About