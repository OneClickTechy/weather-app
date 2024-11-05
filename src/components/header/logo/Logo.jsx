import { TiWeatherPartlySunny } from "react-icons/ti";
const Logo = () => {
  return (
    <div className="absolute left-4 top-4 flex justify-center items-center gap-2 p-2">
        <TiWeatherPartlySunny className="text-4xl"/>
        <p className="text-2xl font-bold">Live Weather</p>
    </div>
  )
}

export default Logo