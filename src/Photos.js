import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.value) {
    return (
      <section className="Photo-container">
        {props.value.map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" key={index}>
              <img
                className="Photo img-fluid"
                src={photo.src.landscape}
                alt={props.alt}
                loading="lazy"
              />
            </a>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
