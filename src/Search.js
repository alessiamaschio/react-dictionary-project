import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Results from "./Results";

import "./Search.css";

export default function Search(props) {
  const [input, setInput] = useState(props.value);
  let [output, setOutput] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setOutput(response.data[0]);
  }

  function search() {
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }
  if (loaded) {
    return (
      <div>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              className="Search-bar"
              type="search"
              autoFocus={true}
              placeholder="Search for a word..."
              defaultValue={props.value}
              onChange={handleInputChange}
            ></input>
            {/* <input type="submit" value="Search"></input> */}
          </form>{" "}
        </section>
        <Results value={output} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
