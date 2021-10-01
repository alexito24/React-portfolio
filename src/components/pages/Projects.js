import React from "react";

export default function Project() {
  return (
    <>
      <h2>Work</h2>
      <p>Click on the image to visit my websites.</p>
      <div className=".sample-img">
        <a
          href="https://alexito24.github.io/responsive-webpage/"
          target="_blank"
        >
          <img
            src="https://www.nsha.org/wp-content/uploads/2017/06/computer-coding-600x600.jpg"
            alt="computer coding"
            width="50%"
            height="50%"
          ></img>
        </a>
      </div>
      <div className=".sample-img">
        <a href="https://havoxprime.github.io/cocktailAndFood/" target="_blank">
          <img
            src="https://raw.githubusercontent.com/HavoxPrime/cocktailAndFood/main/Images/Cocktails-and-Food-Homepage.png"
            alt="computer coding"
            width="50%"
            height="50%"
          ></img>
        </a>
      </div>
      <div className=".sample-img">
        <a
          href="https://alexito24.github.io/password-generator/"
          target="_blank"
        >
          <img
            src="https://cybernews.com/wp-content/uploads/2021/02/Strong-Password-Generator.jpg"
            alt="computer coding"
            width="50%"
            height="50%"
          ></img>
        </a>
      </div>
      <div className=".sample-img">
        <a href="https://alexito24.github.io/daily-planner/" target="_blank">
          <img
            src="https://cdn.lifehack.org/wp-content/uploads/2021/03/todoist.png"
            alt="computer coding"
            width="50%"
            height="50%"
          ></img>
        </a>
      </div>
      <div className=".sample-img">
        <a href="https://shielded-mesa-10854.herokuapp.com/" target="_blank">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_23/1576079/family-gathering-covid-mc-main1-200603.jpg"
            alt="people hanging out"
            width="50%"
            height="50%"
          ></img>
        </a>
      </div>
      <div className=".sample-img">
        <a href="https://serene-retreat-19634.herokuapp.com/" target="_blank">
          <img
            src="https://imgix.bustle.com/uploads/shutterstock/2020/3/11/5db1bc6b-4d71-4000-951f-eb147257fc21-shutterstock-1667721061.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress"
            alt="people exercising"
            width="50%"
            height="50%"
          ></img>
        </a>
      </div>
    </>
  );
}
