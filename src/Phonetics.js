import React from "react";
import useSound from "use-sound";

import "./Phonetics.css";

export default function Phonetics(props) {
  let soundUrl = props.value.audio;

  const [play] = useSound(soundUrl, {
    volume: 0.5,
  });

  function handleClick(event) {
    event.preventDefault();
    play();
  }
  console.log(props.value);

  return (
    <div className="Phonetics">
      <div>
        <span>
          <a className="Phonetic-link" href="/" onClick={handleClick}>
            {props.value.text}
          </a>
        </span>
      </div>
    </div>
  );
}
