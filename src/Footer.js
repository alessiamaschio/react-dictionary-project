import React from "react";
import heart from "./images/hearts.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      {" "}
      <div>
        <span className="Reference"> Coded with</span>
        <img src={heart} alt="heart" className="Heart" loading="lazy" />
        by{" "}
        <a
          href="https://www.linkedin.com/in/alessia-maschio-a8317734/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer-link"
        >
          Alessia
        </a>{" "}
        &copy;2021
      </div>
      <div>
        Open-source code on{" "}
        <a
          href="https://github.com/alessiamaschio/react-dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <div>
          Icons made by{" "}
          <a
            href="https://www.freepik.com"
            rel="noopener noreferrer"
            className="Footer-link"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            rel="noopener noreferrer"
            className="Footer-link"
          >
            Flaticon
          </a>
        </div>
      </div>
    </footer>
  );
}
