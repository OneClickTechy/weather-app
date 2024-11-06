import { TiWeatherPartlySunny } from "react-icons/ti";
const Logo = () => {
  return (
    <div className="text-text-primary-primary md:absolute md:left-4 md:top-4 flex justify-center items-center gap-2 p-2">
      <TiWeatherPartlySunny className="lg:text-4xl" />
      <p className="lg:text-2xl font-bold">
        <span className="text-accent">Live</span> Weather
      </p>
      
      <sup className="relative flex h-3 w-3 justify-center items-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D24f37] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fa3c1a]"></span>
      </sup>
    </div>
  );
};

export default Logo;
