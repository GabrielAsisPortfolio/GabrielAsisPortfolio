import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='w-full bg-black flex items-center flex-col justify-center py-12 relative' id="contact">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-6xl px-4">
        <h1 className='font-roboto text-3xl lg:text-4xl text-white mb-2 text-center'>Get In Touch</h1>
        <p className="text-offWhite/80 text-center mb-10 font-dmSans">Let's connect and create something amazing together</p>
        
        <div className='flex flex-row justify-center gap-x-12 md:gap-x-20 lg:gap-x-24 mb-12'>
          <a className='flex flex-col justify-center items-center group hover:cursor-pointer transition-all duration-300 hover:transform hover:scale-105' href="tel:+971581605217">
            <span className="bg-accent p-4 rounded-full overflow-visible mb-3 w-14 lg:w-16 drop-shadow-lg flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-2xl group-hover:bg-accent/90">
              <Phone color="white" size={28} className="w-full h-full" />
            </span>
            <p className="black font-dmSans w-max relative text-white">
              <span className="text-sm lg:text-base">+971 581605217</span>
              <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 h-[2px] bg-accent group-hover:w-full"></span>
            </p>
          </a>

          <a className='flex flex-col justify-center items-center group hover:cursor-pointer transition-all duration-300 hover:transform hover:scale-105' href="mailto:asisgab24@gmail.com">
            <span className="bg-accent p-4 rounded-full overflow-visible mb-3 w-14 lg:w-16 drop-shadow-lg flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-2xl group-hover:bg-accent/90">
              <Mail color="white" size={28} className="w-full h-full" />
            </span>
            <p className="w-max relative font-dmSans text-white">
              <span className="text-sm lg:text-base">asisgab24@gmail.com</span>
              <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 h-[2px] bg-accent group-hover:w-full"></span>
            </p>
          </a>
        </div>

        {/* Optional: Add location if relevant */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 text-offWhite/60">
            <MapPin size={18} />
            <span className="font-dmSans text-sm">Sharjah, United Arab Emirates</span>
          </div>
        </div>

        <div className="h-[0.5px] bg-gradient-to-r from-transparent from-0% via-offWhite/20 via-60% to-transparent to-100% w-full mb-8"></div>
        
        <div className="flex items-center justify-between px-4">
          <p className="text-offWhite/60 font-dmSans text-xs lg:text-sm">&copy; 2024 by Gabriel Gono Asis</p>
          
          {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-offWhite/60 hover:text-white transition-colors duration-300"
            aria-label="Back to top"
          >
            <span className="text-xs lg:text-sm font-dmSans">Back to top</span>
            <div className="bg-offWhite/10 group-hover:bg-accent p-2 rounded-full transition-all duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer