import React from "react";
import a from "./About.module.css";

function About() {
  return (
    <div className={a.toito}>
      <p className={a.titulo}>
        This App was developed as a Personal Project for the Full-Stack
        Development Bootcamp by "SoyHenry".
      </p>
      <p className={a.titulo}>
        The idea was to fetch data from the weather API and display it in a
        React App.
      </p>
      <p className={a.titulo}>
        GitHub Repo:{" "}
        <a className={a.link} href="https://github.com/Yooololo/WeatherApp">
          {" "}
          &nbsp; https://github.com/Yooololo/WeatherApp
        </a>
      </p>
    </div>
  );
}

export default About;
