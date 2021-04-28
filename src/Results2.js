import React from "react";
import "./Results.css";
import "./Meaning.css";
import "./Example.css";
import quotationMark from "./images/quotation-mark.png";
import quotationRightMark from "./images/quotation-right-mark.png";

export default function Results2(props) {
  if (props.value) {
    return (
      <section className="Results mt-4">
        <h2 className="Word-of-the-day">
          <span className="Color-1">Word</span>{" "}
          <span className="Color-2">of</span>{" "}
          <span className="Color-3">the</span>{" "}
          <span className="Color-4">day</span>
        </h2>
        <h2 className="Word">
          {" "}
          <img
            className="Quotation-mark Left"
            src={quotationMark}
            alt="quotation mark"
            loading="lazy"
          />
          {props.value.word}
          <img
            className="Quotation-mark Right"
            src={quotationRightMark}
            alt="quotation mark"
            loading="lazy"
          />
        </h2>{" "}
        <h3 className="Part-of-speech">
          {props.value.definitions[0].partOfSpeech}
        </h3>
        <p className="Definition">{props.value.definitions[0].text}</p>
        <div className="Example">
          <strong>Example:</strong>
          <h4 className="Example-result-title">
            {props.value.examples[0].title}
          </h4>
          <h4 className="Example-result-description">
            {props.value.examples[0].text}
          </h4>{" "}
          <strong>Note:</strong>
          <h4 className="Example-result-note">{props.value.note}</h4>
        </div>
        {/* <div>
          {" "}
          {props.value.definitions.map(function (definition, index) {
            console.log(props.value.definitions);

            return (
              <section key={index}>
                <Meaning value={definition} />
              </section>
            );
          })}
        </div> */}
      </section>
    );
  } else {
    return null;
  }
}
