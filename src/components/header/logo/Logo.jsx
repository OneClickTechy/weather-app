import { TiWeatherPartlySunny } from "react-icons/ti";
const Logo = () => {
  return (
    <div className="md:absolute md:left-4 md:top-4 flex justify-center items-center gap-2 p-2">
        <TiWeatherPartlySunny className="text-4xl"/>
        <p className="text-2xl font-bold"><span className="text-[#D24F37]">Live</span> Weather</p>
    </div>
  )
}

export default Logo