import React from "react";
import { GoMarkGithub } from "react-icons/go";

export default function Footer() {
  const styles = {
    footer: {
      color: "white",
      fontSize: "44px",
    },
  };
  return (
    <footer className="footer--pin" style={styles.footer}>
      <a href="https://github.com/alexito24" target="_blank">
        <GoMarkGithub />
      </a>
    </footer>
  );
}
