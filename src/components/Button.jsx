import checkoutIcon from "../assets/checkoutIcon.svg"

const Button = ({ className, href, text}) => {
  const renderButton = () => (
    <a className={`${className || ""} button relative inline-flex bg-black text-white rounded-full px-4 py-2 font-dmSans uppercase font-medium text-sm  hover:opacity-80 transition-all duration-300 ease-in-out`} href={href} target="_blank">
      {text} 
      <img 
        src={checkoutIcon}
        className="pl-2 w-[1.65rem]"
      />
    </a>
  )

  return renderButton()
}

export default Button