import React from "react";
import Links from "./Links";

const image = "https://via.placeholder.com/150";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
