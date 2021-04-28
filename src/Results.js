import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import quotationMark from "./images/quotation-mark.png";
import quotationRightMark from "./images/quotation-right-mark.png";
import pronunciation from "./images/pronunciation.png";
import WordOfTheDay from "./WordOfTheDay";

export default function Results(props) {
  if (props.value) {
    return (
      <section className="Results mt-4">
        <h2 className="Word">
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
        <img className="Phonetic-icon" src={pronunciation} alt="phonetics" />
        {props.value.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics value={phonetic} />
            </div>
          );
        })}
        <div>
          {" "}
          {props.value.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning value={meaning} />
              </section>
            );
          })}
        </div>
      </section>
    );
  } else {
    return <WordOfTheDay />;
  }
}
