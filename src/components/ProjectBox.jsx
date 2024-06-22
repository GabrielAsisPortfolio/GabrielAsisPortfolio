import circle from "../assets/circle.svg"

import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/reactJS.svg"
import responsive from "../assets/responsive.svg"
import tailwind from "../assets/tailwind.svg"
import figma from "../assets/figma.svg"
import android from "../assets/android studio.svg"

import Button from "../components/Button"

const categoryIcons = {
  html,
  css,
  js,
  react,
  responsive,
  tailwind,
  figma,
  android
};

const ProjectBox = ({ title, urlTitle, createdWhen, img1, img2, img3, url, categories, flex }) => {
  const isFlexCol = flex === "col";

  return (
  <div className="bg-bgPeach3 border-black rounded-lg h-fit relative drop-shadow-md">
      <div className="flex flex-row items-center justify-between py-2 px-4 bg-darkPeach gap-3 relative top-0 border-b-black/30 border-b-[1px] rounded-t-lg">
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
          <h2 className="font-dmSans text-[0.8rem] my-auto">https://
            <span className="font-bold italic">
              {urlTitle} 
            </span>
          </h2>
        </div>
      </div>

      <div className="py-6 px-8">
        <div className={`flex flex-${flex} mb-2`}>
          <img 
            src={img1} 
            className={`w-full ${isFlexCol ? 'mb-1' : 'w-1/3'} ${!isFlexCol && 'mr-1'}`}
            alt="Image 1" /> 

          <img 
            src={img2} 
            className={`w-full ${isFlexCol ? 'mb-1' : 'w-1/3'} ${!isFlexCol && 'mr-1'}`}
            alt="Image 1" /> 

          {img3 && 
            <img 
              src={img3} 
              className={`w-full ${isFlexCol ? '' : 'w-1/3'}`} 
              alt="Image 1" 
            />
          }
        </div>

        <div className="flex flex-row justify-between items-start mb-8">
          <div className="flex flex-col items-start">
            <h1 className="font-roboto font-medium text-[1.7rem] mb-0">{title}</h1>
            <p className="font-roboto text-xs font-gray italic font-extralight">{createdWhen}</p>
          </div>

          <div className=" flex flex-row gap-x-3 items-start mt-1">
            {categories.map(category => (
              <img 
                key={category}
                src={categoryIcons[category]} 
                className="w-6"
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