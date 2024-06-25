import checkoutIcon from "../assets/checkoutIcon.svg"

const Button = ({ className, href, text}) => {
  const renderButton = () => (
    <a className={`${className || ""} button flex items-center drop-shadow-md w-fit bg-black text-white rounded-full px-4 py-2 font-dmSans uppercase font-medium text-xs md:text-sm hover:scale-105 hover:opacity-80 transition-all duration-200`} href={href} target="_blank">
      {text}
      <img
        src={checkoutIcon}
        className="pl-1 md:pl-2 w-[1.4rem] md:w-[1.65]"
      />
    </a>
  )

  return renderButton()
}

export default Button