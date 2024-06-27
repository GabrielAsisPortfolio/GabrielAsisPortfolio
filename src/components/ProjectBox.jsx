import circle from "../assets/circle.svg"

import {
  html,
  css,
  js,
  react,
  responsive,
  tailwind,
  figma,
  android,
  api,
  python,
  json,
} from "../assets";

import Button from "../components/Button"

const categoryIcons = {
  html,
  css,
  js,
  react,
  responsive,
  tailwind,
  figma,
  android,
  api,
  python,
  json,
};

const ProjectBox = ({ title, urlTitle, createdWhen, img1, img2, img3, url, categories, flex }) => {
  return (
  <div className="bg-bgPeach backdrop-blur-lg border-[1px] border-black/5 shadow-lg rounded-lg h-fit w-full relative overflow-hidden">
      <div className="flex flex-row items-center justify-between border-b-[1px] border-b-black/20 py-2 px-4 bg-darkPeach gap-3 relative top-0 overflow-hidden">
        <div className="flex flex-row px-4 bg-darkPeach gap-x-3"> 
          <img 
            src={circle} 
            className="w-3"
            alt="" />

          <img 
            src={circle} 
            className="w-3"
            alt="" />
          
          <img 
            src={circle} 
            className="w-3"
            alt="" />
        </div>
        <div className="bg-lightPeach rounded-full w-[90%] px-4 h-6 flex justify-start items-center">
          <h2 className="font-dmSans text-[0.6rem] md:text-[0.7rem] my-auto">https://
            <span className="font-bold italic">
              {urlTitle} 
            </span>
          </h2>
        </div>
      </div>

      <div className="py-6 px-6 w-full">
        <div className={` ${flex === "col" ? "flex" : "hidden"} flex-${flex} mb-2 justify-between w-full`}>
          <img 
            src={img1} 
            className={`w-full h-auto mb-1 lg:mb-2`}
            alt="Image 1" /> 

          <img 
            src={img2} 
            className={`w-full h-auto mb-1 lg:mb-2`}
            alt="Image 2" /> 
        </div>

        <div className={` ${flex === "row" ? "flex" : "hidden"} flex-${flex} mb-2 justify-between w-full`}>
          <img 
            src={img1} 
            className=" w-[33%]"
            alt="Image 1" /> 

          <img 
            src={img2} 
            className=" w-[33%]"
            alt="Image 2" /> 

          <img 
            src={img3} 
            className=" w-[33%]"
            alt="Image 3" /> 
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="flex flex-col items-start">
            <h1 className="font-roboto font-medium text-xl lg:text-[1.4rem]">{title}</h1>
            <p className="font-roboto text-xs italic font-extralight mb-3 md:mb-0">{createdWhen}</p>
          </div>

          <div className="flex flex-row gap-x-2 mt-1 lg:mt-2">
            {categories.map(category => (
              <img 
                key={category}
                src={categoryIcons[category]} 
                className="h-5 lg:h-4"
                alt={category} 
              />
            ))}
          </div>
        </div>

        <Button 
          text="CHECK OUT"
          href={url}
        />
      </div>
      
    </div>
  )
}

export default ProjectBox