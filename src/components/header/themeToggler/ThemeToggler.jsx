import { useEffect, useState } from "react";

const ThemeToggler = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleToggleTheme = () => {
    setTheme(theme==="light" ? "dark" : "light");
  };
  return (
    <>
      <button onClick={handleToggleTheme} className="md:absolute md:right-4 md:top-5" >change theme: {theme}</button>
        
    </>
  )
}

export default ThemeToggler