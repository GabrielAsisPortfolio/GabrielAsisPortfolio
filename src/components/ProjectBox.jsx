import {
  FileCode2,
  Monitor,
  Building2,
  Rocket,
  PanelsTopLeft,
  PanelTop,
  Smartphone,
  Layers,
  Layers2,
  AppWindow,
  ShoppingBag,
} from "lucide-react";

import {
  wordpress,
} from "../assets"

import Button from "../components/Button"

const categoryIcons = {
  "Frontend": Layers2,
  "WordPress": wordpress,
  "Landing Page": AppWindow,
  "Full-Stack": Layers,
  "Organization": Building2,
  "Tech Startup": Rocket,
  "Smartphone App": Smartphone,
  "Python": FileCode2,
  "E-commerce": ShoppingBag,
};

const ProjectBox = ({ title, img, url, categories }) => {
  return (
    <a href={url} className="bg-offWhite rounded-xl w-full relative overflow-hidden h-full hover:cursor-pointer">
      <div className="py-3 px-3 sm:py-4 sm:px-4 w-full">
        <div className={`mb-2 justify-between w-full overflow-hidden rounded-lg border-black/30 border group`}>
          <img 
            src={img} 
            className="w-full h-auto aspect-[16/9] object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
            alt="Image 1" 
          /> 
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex flex-row flex-wrap gap-1 sm:gap-2 mt-1 lg:mt-2">
            {categories.map(category => {
              const Icon = categoryIcons[category];
              return (
                <span key={category} className="flex items-center gap-1 bg-gray-100 rounded-full px-4 py-1.5 sm:px-5 sm:py-1.5 text-xs font-medium bg-accent/20">
                  {typeof Icon === "string" ? (
                    <img src={Icon} className="h-4 w-auto text-accent" alt={category} />
                  ) : (
                    <Icon className="h-4 w-auto text-accent" aria-label={category} />
                  )}
                  <span className="font-dmSans text-accent">{category}</span>
                </span>
              );
            })}
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