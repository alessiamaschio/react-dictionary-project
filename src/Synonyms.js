import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.value) {
    return (
      <div>
        <strong>Synonyms:</strong>
        <div className="Synonyms">
          {" "}
          <p className="Synonym-item">
            {props.value.map(function (synonym, index) {
              console.log(props.value.length);
              if (index < props.value.length - 1) {
                return <span key={index}>{synonym}, </span>;
              } else {
                return <span key={index}>{synonym} </span>;
              }
            })}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
