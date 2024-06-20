const Heading = ({ title, subtitle}) => {
  return (
    <div className="flex flex-row items-center w-full">
      <h1 className="font-roboto font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
        {title}
      </h1>
      <p className="ml-3 italic md:text-lg xl:text-2xl 2xl:text-3xl items-center font-roboto font-extralight lowercase text-gray">
        {subtitle}
      </p>
      <div className="absolute -top-[2rem] lg:top-[1rem] -left-[1rem] xl:-left-[1rem] bg-radient-ellipse-c from-gradientStartYellow from-15% to-gradientEndYellow to-60% filter m-auto w-32 h-32 md:w-44 md:h-44 blur-[14px] rounded-full -z-10"></div>
    </div>
  )
}

export default Heading