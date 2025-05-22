import X from "../assets/X.svg"

const Section = ({ children, bottomLine, id }) => {
  return (
    <div className="flex justify-center relative py-16" id={id}>
      {children}
      {bottomLine && (
        <>
          <img
            src={X}
            className="absolute -bottom-[0.43rem] -left-[2.5rem] md:-left-[2.5rem] lg:-left-[4.5rem]"
            width={15}
            height={15}  
            alt="X corners" />
          <img
            src={X}
            className="absolute -bottom-[0.43rem] -right-[2.5rem] md:-right-[2.5rem] lg:-right-[4.5rem]"
            width={15}
            height={15}      
            alt="X corners" />
          <div className="border-t border-dashed border-black/35 h-[1.5px] w-[98.5vw] absolute bottom-0 z-1"></div>
        </>
      )}
    </div>
  )
}

export default Section