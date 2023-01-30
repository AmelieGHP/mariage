import Nav from "./components/Nav";
import Home from "./pages/Home";
import Infos from "./pages/Infos";
import Plans from "./pages/Plans";
import Hebergement from "./pages/Hebergement";
import Liste from "./pages/Liste";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import animationData from "./assets/hamburgerMenu.json";

function App() {
  const [showNav, setShowNav] = useState(window.innerWidth > 1000);
  const animationContainer = useRef(null);
  const anim = useRef(null);
  console.log(
    "Coucou les Dave! Pour les motivés, Nathalie propose de vous accueillir pour un barbecue entre le cocktail et le bal, vu qu'elle habite à côté! Voir avec elle pour l'orga!"
  );
  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });
      return () => anim.current?.destroy();
    }
  }, []);
  const handleClick = () => {
    setShowNav(false);
    anim.current?.setDirection(showNav ? -1 : 1);
    anim.current?.play();
  };
  const updateSize = () => {
    if (window.innerWidth < 1000) {
      setShowNav(false);
    } else setShowNav(true);
  };
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <div className="App">
      {window.innerWidth <= 1000 && (
        <button
          type="button"
          className="menuButton"
          onClick={() => {
            setShowNav(!showNav);
            anim.current?.setDirection(showNav ? -1 : 1);
            anim.current?.play();
          }}
          ref={animationContainer}
          style={{
            position: "fixed",
            zIndex: "2",
            backgroundColor: "#ffffff",
            margin: "8px",
            padding: "4px",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            boxShadow: "2px 2px 4px lightgray",
          }}
        ></button>
      )}
      <Router>
        {showNav && <Nav handleClick={handleClick} />}{" "}
        <Routes>
          <Route path="/Mariage" element={<Home />} />
          <Route path="/Mariage/infos-pratiques" element={<Infos />} />
          <Route path="/Mariage/plans" element={<Plans />} />
          <Route path="/Mariage/hebergement" element={<Hebergement />} />
          <Route path="/Mariage/liste-mariage" element={<Liste />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
