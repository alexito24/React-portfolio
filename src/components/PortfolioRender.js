import React, { useState, useEffect, useRef } from "react";
import Navigartion from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import BIRDS from "vanta/dist/vanta.birds.min";

export default function PortfolioRender() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          BIRDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return (
      <div className="whiteText" ref={myRef}>
        {" "}
        <Navigartion
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    );
  };

  return (
    <>
      <Header />

      {MyComponent()}

      {renderPage()}
      <footer className="footer--pin">
        <Footer />
      </footer>
    </>
  );
}
