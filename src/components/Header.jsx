import { navigation } from "../constants";

import { useLocation } from "react-router-dom";

const Header = () => {
  const pathName = useLocation();

  return (
    <div className="fixed top-0 py-6 z-50 bg-lightPeach/80 border-b border-black/60 backdrop-blur-sm text-black w-full">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-14 max-lg:py-4">
        <a className="block w-[12rem]" href="#hero">
          <h1 className="font-sonderSans text-3xl">GA</h1>
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-lightPeach lg:static lg:flex lg:ml-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center ml-auto lg:flex-row">
            {navigation.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                className={`block relative font-dmSans text-black text-xl transition-all duration-300 hover:text-opacity-60 px-4 py-2 md:py-4 lg:text-[1rem] ${item.url === pathName.hash ? 'z-2 lg:font-semibold' : ' lg:font-normal'} lg:leading-5 xl:px-11`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header