import Section from "./Section"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const Hero = () => {
  const nameRef = useRef(null);
  const greetRef = useRef(null);
  const titleRef = useRef(null);

  const underlineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const textAnimations = gsap.timeline({ defaults: { ease: "power2.out" } });

      textAnimations.fromTo(
        [greetRef.current, nameRef.current, titleRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.6 }
      );

      gsap.fromTo(
        underlineRef.current,
        { strokeDasharray: "1000", strokeDashoffset: "1000" },
        { strokeDasharray: "1000", strokeDashoffset: "0", duration: 2, delay: 1.6},
      );

      gsap.fromTo(
        glowRef.current,
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 1.6},
      );
    }
  }, []);

  return (
    <>
      <Section bottomLine={true}>
        <div className="container">
          <div className="relative h-[48vh] sm:h-[52vh] md:h-[55vh] lg:h-[82vh] flex flex-col justify-center">
            <div className='w-full mb-20 sm:mb-24 md:mb-28 lg:mb-40'>
              <p ref={greetRef} className="italic font-light font-roboto text-lg sm:text-2xl lg:text-4xl xl:text-[3rem]">
                hi there, I&apos;m
              </p>

              <div  
                ref={nameRef}
                className="font-sonderSans text-2xl sm:text-4xl md:text-[2.5rem] text-black lg:text-6xl xl:text-[5rem] uppercase"
              >
                GABRIEL ASIS  
                <svg 
                  className="mt-1 sm:mt-2 w-[10rem] opacity-100 sm:w-60 md:w-[17rem] lg:w-[26rem] xl:w-[34rem] underline-draw"
                  ref={underlineRef}
                  width="546" 
                  height="21" 
                  viewBox="0 0 546 21" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 19C27.9173 14.8567 52.5853 11.5447 79.95 9.68505C157.061 4.44479 234.542 0.395893 312.051 2.62628C390.449 4.88228 468.22 8.31052 544 19" 
                    stroke="#111111" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-end w-full relative">
              <div className="relative flex items-end justify-end">
                <div 
                  ref={glowRef}
                  className="absolute m-auto mr-6 mb-2 w-[86%] h-[76%] bg-radient-ellipse-c from-gradientStartYellow from-35% to-gradientEndOrange to-80% filter blur-[20px] z-10"></div>
                <p 
                  ref={titleRef}
                  className="text-black font-roboto text-lg sm:text-2xl lg:text-4xl xl:text-[3rem] text-end z-20 relative">
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