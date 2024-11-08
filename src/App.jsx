import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="transition-colors duration-300 ease-in-out bg-background text-text-primary flex flex-col w-full min-h-screen gap-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
