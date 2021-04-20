import React, { useState } from "react";
import "./Search.css";

export default function Search(event) {
  const [input, setInput] = useState("");
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${input}`);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }
  return (
    <form onSubmit={searchWord}>
      <input
        type="search"
        autoFocus={true}
        placeholder="Search for a word..."
        onChange={handleInputChange}
      ></input>
      {/* <input type="submit" value="Search"></input> */}
    </form>
  );
}
