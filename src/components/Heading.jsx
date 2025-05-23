const Heading = ({ title, subtitle, glow, className}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center w-full gap-1 sm:gap-3 ${className}`}>
      <h1 className="font-roboto font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
        {title}
      </h1>
      <p className="italic md:text-lg xl:text-2xl 2xl:text-3xl text-left items-center font-roboto font-extralight lowercase text-gray">
        {subtitle}
      </p>
    </div>
  )
}

export default Heading