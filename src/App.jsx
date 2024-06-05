import Header from "./components/1-header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-main/Main";
import Footer from "./components/footer/Footer";
import Contact from "./components/4-contact/Contact";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [showScrolBtn, setShowScrolBtn] = useState(false);
  console.log(showScrolBtn);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowScrolBtn(true);
      } else {
        setShowScrolBtn(false);
      }
    });
  }, []);

  return (
    <div id="top" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrolBtn ? 1 : 0, transition: "1s" }}
        href="#top"
      >
        <button className="scrol2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
