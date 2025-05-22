import Section from "./Section"
import face from "../assets/Face.png"
import bathspa from "../assets/bathspa logo.png"
import Heading from "./Heading"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  const headingRef = useRef(null);
  const descRef = useRef(null);

  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const glowRef = useRef(null);

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
        [headingRef.current, descRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.6, ease: "power2.inOut" }
      );

      tl.fromTo(
        [imgRef.current, glowRef.current, imgRef2.current],
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2,  ease: "power2.inOut" },
      );
    }
  }, []);

  return (
    <Section bottomLine={true} id="#about">
      <div className="container py-8"  id="about">
        <div className="flex flex-col lg:flex-row justify-between items-center relative h-full" ref={sectionRef}>

          <div 
            ref={headingRef}
            className="flex flex-col w-full mb-4 lg:mb-0 lg:w-[50%]">
            <Heading 
              title="About-"
              subtitle="get to know me"
              className="mb-4"
            />
            <div 
              ref={glowRef}
              className="absolute -top-[2rem] lg:top-[1rem] -left-[1rem] xl:-left-[1rem] bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-32 h-32 md:w-44 md:h-44 blur-[14px] rounded-full -z-10"></div>
            <div className="relative">
              <p 
                ref={descRef}
                className="font-dmSans text-[0.5rem] sm:text-[0.65rem] md:text-xs lg:text-xs xl:text-sm 2xl:text-base text-gray text-justify z-10">
              Hello! My name is Gabriel Gono Asis, and I'm an 18-year-old third-year student at Bath Spa University RAK. I'm passionate about the digital world and have honed my skills in UI/UX design, front-end development, prototyping, and other digital design disciplines. <br /> <br /> Throughout my academic journey, I've developed a keen eye for design and a strong understanding of the latest technologies and trends in the digital space. My coursework and projects have equipped me with the ability to create user-friendly and visually appealing interfaces, ensuring a seamless and engaging user experience.
              </p>
            </div>
          </div>

          {/* FACE */}
          <div className="w-full h-full lg:w-[45%] flex flex-row items-center justify-between lg:justify-center lg:items-center relative">
            <img 
              ref={imgRef}
              src={face} 
              className="w-2/5 lg:w-3/5 xl:w-[56%] 2xl:w-[50%] drop-shadow-xl hidden"
              alt="Face" 
            />

            <img  
              ref={imgRef2}
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