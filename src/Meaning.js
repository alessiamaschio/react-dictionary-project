import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div>
      <h3 className="Part-of-speech">{props.value.partOfSpeech}</h3>
      {props.value.definitions.map(function (definition, index) {
        return (
          <div className="Meaning-result-container" key={index}>
            <p className="Definition">
              {index + 1}: {definition.definition}
            </p>
            <Example value={definition.example} />

            <Synonyms value={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
