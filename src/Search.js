import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import "./Search.css";

export default function Search(event) {
  const [input, setInput] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
