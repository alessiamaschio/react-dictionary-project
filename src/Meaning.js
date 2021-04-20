import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.value);
  return (
    <div>
      <h3>{props.value.partOfSpeech}</h3>
      {props.value.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index + 1}: {definition.definition}
            </p>
            <p className="Example">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
