import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "14px 20px",
      textAlign: "center",
      color: "rgb(83, 235, 83)",
      listStyleType: "none",
    },
  };
  return (
    <div>
      <ul>
        <li>
          <a
            href="#about"
            style={styles.nav}
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "navlink active" : "nav-link"}
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#work"
            style={styles.nav}
            onClick={() => handlePageChange("Project")}
            className={currentPage === "Work" ? "navlink active" : "nav-link"}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={styles.nav}
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "navlink active" : "nav-link"
            }
          >
            Contact me
          </a>
        </li>
        <li>
          <a
            href="#resume"
            style={styles.nav}
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "navlink active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
