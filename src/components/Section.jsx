import X from "../assets/X.svg"

const Section = ({ children, bottomLine }) => {
  return (
    <div className="flex justify-center relative">
      {children}
      {bottomLine && (
        <>
          <img
            src={X}
            className="absolute -bottom-[0.43rem] -left-[2.5rem] md:-left-[2.5rem] lg:-left-[3rem]"
            width={15}
            height={15}  
            alt="X corners" />
          <img
            src={X}
            className="absolute -bottom-[0.43rem] -right-[2.5rem] md:-right-[2.5rem] lg:-right-[3rem]"
            width={15}
            height={15}      
            alt="X corners" />
          <div className="border-t border-dashed border-black/35 h-[1.5px] w-[100vw] absolute bottom-0 z-1"></div>
        </>
      )}
    </div>
  )
}

export default Section