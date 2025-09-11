import Section from "./Section"
import face from "../assets/Graduation Photo No bg.jpeg"
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
        <div className="flex flex-col lg:flex-row justify-between items-center relative h-full gap-10" ref={sectionRef}>

          <div 
            ref={headingRef}
            className="flex flex-col w-full mb-4 lg:mb-0 flex-[1.5]">
            <Heading 
              title="About-"
              subtitle="get to know me"
              className="mb-4"
            />
            <div 
              ref={glowRef}
              className="absolute top-[1rem] -left-[1rem] bg-radient-ellipse-c from-gradientStartBlue to-gradientEndBlue m-auto w-32 h-32 md:w-50 md:h-50 blur-[40px] rounded-full -z-10"></div>
            <div className="relative">
              <p 
                ref={descRef}
                className="font-dmSans text-gray z-10">
              Hello! My name is Gabriel Gono Asis, and I’m a graduate of Bath Spa University RAK with a BSc (Hons) in Creative Computing. I’m passionate about the digital world and have honed my skills in web development, UI/UX design, prototyping, and other digital design disciplines.
              <br /><br />
              Throughout my academic journey, I developed a keen eye for design and a strong understanding of the latest technologies and trends in the digital space. My coursework and projects equipped me with the ability to create user-friendly, visually appealing, and functional websites, ensuring a seamless and engaging user experience.
              </p>
            </div>
          </div>

          {/* FACE */}
          <div className="gap-4 lg:gap-0 max-w-full w-full h-full flex-1 flex flex-row items-center justify-betweem lg:justify-center lg:items-center relative">
            <img 
              ref={imgRef}
              src={face} 
              className="w-[47%] lg:w-3/5 xl:w-[56%] 2xl:w-[90%] drop-shadow-xl"
              alt="Face" 
            />

            <img  
              ref={imgRef2}
              src={bathspa}
              className="w-[47%] lg:hidden"
              alt="Bath spa Logo" 
            />
          </div>
        </div>
        
      </div>
    </Section>
  )
}

export default About