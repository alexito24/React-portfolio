import React from "react";

import { MdPhoneInTalk } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <h2>contact me</h2>

      <p id="contact">
        {" "}
        <MdPhoneInTalk /> cell phone: (720) 551 3601
      </p>
      <p>
        {" "}
        <FaRegEnvelope /> email: alexito2002.ll@gmail.com
      </p>
      <p>
        <FaGithub /> github:{" "}
        <a href="https://github.com/alexito24">alexito24</a>
      </p>
    </>
  );
}
