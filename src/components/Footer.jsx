import phone from "../assets/phone.svg"
import email from "../assets/email.svg"

const Footer = () => {
  return (
    <div className='w-full bg-lightPeach flex items-center flex-col justify-center py-8' id="contact">
      <h1 className='font-roboto text-3xl text-black mb-8'>Get In Touch</h1>
      <div className='flex flex-row justify-center gap-x-24'>
        <a className='flex flex-col justify-center items-center group hover:cursor-pointer' href="tel:+971581605217">
          <img 
            src={phone}
            className="bg-black p-4 rounded-full overflow-visible mb-2 w-14 drop-shadow-lg"
            alt="Number" 
          />
          <p className="black font-dmSans w-max relative text-black">
            <span>+971 581605217</span>
            <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 h-[1px] bg-black group-hover:w-full"></span>
          </p>
          
        </a>

        <a className='flex flex-col justify-center items-center group hover:cursor-pointer' href="mailto:asisgab24@gmail.com">
          <img 
            src={email}
            className="bg-black p-4 rounded-full overflow-visible mb-2 w-14 drop-shadow-lg"
            alt="Number" 
          />
          <p className="w-max relative font-dmSans text-black">
            <span>asisgab24@gmail.com</span>
            <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 h-[1px] bg-black group-hover:w-full"></span>
          </p>
        </a>
      </div>
    </div>
  )
}

export default Footer