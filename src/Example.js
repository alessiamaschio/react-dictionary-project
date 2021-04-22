import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.value) {
    return (
      <p className="Example">
        <strong>Example:</strong> {props.value}
      </p>
    );
  } else {
    return null;
  }
}
