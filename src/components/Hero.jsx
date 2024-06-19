import underline from "../assets/underline.svg"
import Section from "./Section"

const Hero = () => {
  return (
    <>
      <Section bottomLine={true}>
        <div className="container">
          <div className="relative h-[52vh] md:h-[55vh] lg:h-[78vh] flex flex-col justify-center">
            <div className='w-full mb-24 md:mb-28 lg:mb-40'>
              <p className="italic font-light font-roboto text-2xl lg:text-4xl xl:text-[3rem]">
                hi there, I&apos;m
              </p>

              <span className="font-sonderSans text-4xl md:text-[2.5rem] text-black lg:text-6xl xl:text-[5rem] uppercase">
                GABRIEL ASIS
                <img 
                  src={underline} 
                  className="mt-2 w-60 md:w-[17rem] lg:w-[26rem] xl:w-[34rem]"
                  alt="underline" 
                />
              </span>
            </div>
            <div className="flex justify-end w-full relative">
              <div className="relative flex items-end justify-end">
                <div className="absolute inset-0 bg-radial-gradient from-gradientStart to-gradientEnd filter blur-2xl rounded-full z-10"></div>
                <p className="text-black font-roboto text-2xl lg:text-4xl xl:text-[3rem] text-end z-20 relative">
                  Front End Dev<br/>
                  Digital Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Hero