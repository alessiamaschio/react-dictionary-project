import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.value) {
    return (
      <div className="Example">
        <strong>Example:</strong>
        <div className="Example-result">{props.value}</div>
      </div>
    );
  } else {
    return null;
  }
}
