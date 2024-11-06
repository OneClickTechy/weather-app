import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsOn(!isOn);
  };
  return (
    <>
      <div
        className="md:absolute sm:right-6 sm:top-6 toggler-container w-[50px] bg-primary rounded-3xl"
        onClick={handleToggleTheme}
      >
        <div
          className={`${
            theme === "dark" ? "translate-x-[100%]" : null
          } transition-transform ease-linear duration-300 w-[25px] h-[25px] bg-text-primary rounded-3xl flex justify-center items-center`}
        >
          {!isOn ? (
            <MdDarkMode className="text-[black] " />
          ) : (
            <MdLightMode className="text-[white]" />
          )}
        </div>
      </div>
    </>
  );
};

export default ThemeToggler;
