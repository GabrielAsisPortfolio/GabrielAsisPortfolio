const Heading = ({ title, subtitle, glow, className}) => {
  return (
    <div className={`flex flex-row items-center w-full ${className}`}>
      <h1 className="font-roboto font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
        {title}
      </h1>
      <p className="ml-3 italic md:text-lg xl:text-2xl 2xl:text-3xl items-center font-roboto font-extralight lowercase text-gray">
        {subtitle}
      </p>
    </div>
  )
}

export default Heading