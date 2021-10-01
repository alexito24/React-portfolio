import React, { useState } from "react";
import Navigartion from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";

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

  return (
    <>
      <Header />
      <Navigartion
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      {renderPage()}
      <footer className="footer--pin">
        <Footer />
      </footer>
    </>
  );
}
