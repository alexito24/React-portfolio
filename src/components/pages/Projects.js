import React from "react";
import gathr from "../images/gathr.png";
import moovie from "../images/moovie.png";
import samplewebsite from "../images/samplewebsite.png";

export default function Project() {
  return (
    <>
      <div className="projects">
        <h2>Work</h2>
        <p>Click on the image to visit my websites.</p>
        <div className=".sample-img">
          <a href="https://shielded-mesa-10854.herokuapp.com/" target="_blank">
            <img src={gathr}></img>
          </a>
        </div>
        <div className=".sample-img">
          <a
            href="https://blooming-anchorage-52775.herokuapp.com/"
            target="_blank"
          >
            <img src={moovie}></img>
          </a>
        </div>
        <div className=".sample-img">
          <a href="https://alexito24.github.io/sample-site/" target="_blank">
            <img src={samplewebsite}></img>
          </a>
        </div>
      </div>
    </>
  );
}
