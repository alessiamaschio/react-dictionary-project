import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.value);
  if (props.value) {
    return (
      <div className="Results mt-4">
        <h2>{props.value.word}</h2>
        <div>
          {" "}
          {props.value.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning value={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null; //add word of the day or picture
  }
}
