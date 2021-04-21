import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Results from "./Results";

import "./Search.css";

export default function Search() {
  const [input, setInput] = useState("");
  let [output, setOutput] = useState(null);

  function handleResponse(response) {
    setOutput(response.data[0]);
  }
  function searchWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() =>
        swal({
          title: "Error, error...",
          text: "Are you sure you typed the word correctly? 😉",
          icon: "error",
          button: "Try again!",
        })
      );
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={searchWord}>
        <input
          className="Search-bar"
          type="search"
          autoFocus={true}
          placeholder="Search for a word..."
          onChange={handleInputChange}
        ></input>
        {/* <input type="submit" value="Search"></input> */}
      </form>{" "}
      <Results value={output} />
    </div>
  );
}
