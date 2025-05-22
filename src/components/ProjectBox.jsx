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
    <a href={url} className="bg-offWhite rounded-xl w-full relative overflow-hidden h-full hover:cursor-pointer">
      <div className="py-4 px-4 w-full">
        <div className={`mb-2 justify-between w-full overflow-hidden rounded-lg border-black/30 border group`}>
          <img 
            src={img1} 
            className="w-full h-auto aspect-[16/9] object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
            alt="Image 1" 
          /> 
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
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
          <div className="flex flex-col items-start">
            <h1 className="font-roboto font-medium text-xl lg:text-[1.4rem]">{title}</h1>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectBox