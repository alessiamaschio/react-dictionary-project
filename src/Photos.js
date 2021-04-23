import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.value);
  if (props.value) {
    if (props.value.length > 0) {
      return (
        <section>
          <details>
            <summary className="Images-button ">Show images</summary>
            <div className="Photo-container">
              {props.value.map(function (photo, index) {
                return (
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <img
                      className="Photo img-fluid"
                      src={photo.src.landscape}
                      alt={props.alt}
                      loading="lazy"
                    />
                  </a>
                );
              })}
            </div>
          </details>
        </section>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}
