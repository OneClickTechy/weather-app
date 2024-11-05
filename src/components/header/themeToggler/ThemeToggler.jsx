import { useEffect, useState } from "react";

const ThemeToggler = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    console.log(theme)
  }, [theme]);
  const handleToggleTheme = () => {
    setTheme(theme==="light" ? "dark" : "light");
  };
  return (
    <>
      <button onClick={handleToggleTheme} className="button-default" >change theme: {theme}</button>
        
    </>
  )
}

export default ThemeToggler