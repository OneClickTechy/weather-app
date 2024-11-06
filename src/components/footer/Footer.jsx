import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-text-primary">
      <div className="footer-content">
        <p>
          &copy; {year} <span className="text-accent">{"Live Weather"}</span>.
          All rights reserved.
        </p>
        <p>
          This website developed by{" "}
          <a href="https://github.com/OneClickTechy" className="text-accent">
            Jeyapandi(OneClickTechy)
          </a>
        </p>
        
        <div className="social-media flex gap-4">
          <a href="https://www.linkedin.com/in/oneclicktechy/" target="_blank">
            <FaLinkedin />
          </a>{" "}
          <a
            href="https://github.com/OneClickTechy"
            
            target="_blank"
          >
            <FaGithub />
          </a>{" "}
        </div>
        <p>
          Powered by{" "}
          <a
            href="https://openweathermap.org/"
            className="text-accent font-semibold"
          >
            openweathermap
          </a>
        </p>
        <p>
          Disclaimer: Weather data is provided for informational purposes only
          and is subject to change.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
