import React, { useState } from "react";
import heart from "./images/hearts.png";
import "./Footer.css";

export default function Footer() {
  // const [isClick, setClick] = useState(false);
  return (
    <footer>
      {" "}
      <div>
        <span className="Reference"> Coded with</span>
        <img src={heart} alt="heart" className="Heart" />
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
      </div>
    </footer>
  );
}
