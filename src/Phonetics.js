import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.value);
  return (
    <div className="Phonetics">
      <div>
        <span>
          <a
            className="Phonetic-link"
            href={props.value.audio}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.value.text}
          </a>
        </span>
      </div>
    </div>
  );
}
