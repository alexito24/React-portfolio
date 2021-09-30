import React from "react";

export const Navigation = () => {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "#0a343b",
      padding: "14px 20px",
      textDecoration: "none",
      textAlign: "center",
      color: "rgb(83, 235, 83)",
    },
  };
  return (
    <div>
      <a href="#top" style={styles.nav}>
        About me{" "}
      </a>
      <a href="#work" style={styles.nav}>
        Work{" "}
      </a>
      <a href="#contact" style={styles.nav}>
        Contact me{" "}
      </a>
      <a href="#bottom" style={styles.nav}>
        Resume
      </a>
    </div>
  );
};
