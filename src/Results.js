import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import quotationMark from "./images/quotation-mark.png";
import quotationRightMark from "./images/quotation-right-mark.png";

export default function Results(props) {
  if (props.value) {
    return (
      <section className="Results mt-4">
        <h2 className="Word">
          <img
            className="Quotation-mark Left"
            src={quotationMark}
            alt="quotation mark"
          />
          {props.value.word}
          <img
            className="Quotation-mark Right"
            src={quotationRightMark}
            alt="quotation mark"
          />
        </h2>
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
      </section>
    );
  } else {
    return null; //add word of the day or picture
  }
}
