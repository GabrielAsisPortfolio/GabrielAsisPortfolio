import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { navigation } from "../constants";

import hamburgerMenu from "../assets/hamburgerMenu.svg"
import X from "../assets/X.svg"

const Header = () => {
  const pathName = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <div className="top-0 py-2 lg:py-6 z-50 bg-white border-b border-black/60 lg:backdrop-blur-sm text-black">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-14 max-lg:py-4">
        <a className="block w-[12rem]" href="#hero">
          <h1 className="font-sonderSans text-2xl lg:text-3xl">GA</h1>
        </a>

        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <img 
              src={menuOpen ? X : hamburgerMenu}
              className="w-6 h-6"
              alt="Hamburger Menu" 
            />
          </button>
        </div>

        <nav className={`${menuOpen ? "flex w-full h-full py-96" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-offWhite/90 lg:bg-none lg:backdrop-blur-0 backdrop-blur-sm lg:static lg:flex lg:ml-auto  lg:bg-transparent z-40`}>
          <div className={`${menuOpen ? "w-full h-full backdrop-blur-sm" : ""} relative z-2 flex flex-col items-center justify-center ml-auto lg:flex-row`}>
            {navigation.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                className={`block relative font-dmSans text-black text-2xl px-4 py-8 md:py-4 lg:text-[1rem] ${item.url === pathName.hash ? 'z-2 font-semibold' : 'font-normal'} lg:leading-5 xl:px-11`}
                onClick={() => setMenuOpen(false)}
              >
                <p className="group relative w-max text-black">
                  <span>{item.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 h-[1px] bg-black group-hover:w-full"></span>
                </p>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header