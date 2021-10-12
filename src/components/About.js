import React from "react";
import Links from './Links'
import * as user from "../data/user";

function display(stuff) {
  if (stuff) {
    return (<p>{stuff}</p>)
  } else{
    return
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {display(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
