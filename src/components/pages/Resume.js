import React, { useState } from "react";
import HeribertoLopezResume from "./HeribertoLopezResume.pdf";

export default function Resume() {
  return (
    <>
      <a href={HeribertoLopezResume}>
        Click here to view it full screen resume
      </a>
      <iframe src={HeribertoLopezResume} width="100%" height="500px"></iframe>
    </>
  );
}
