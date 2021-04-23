import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Results from "./Results";
import Photos from "./Photos";

import "./Search.css";

export default function Search(props) {
  const [input, setInput] = useState(props.value);
  let [output, setOutput] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setOutput(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
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

    let apiKey = "563492ad6f9170000100000193f75f95301b47bf828108f7ae576a57";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=6`;
    let headers = { Authorization: `Bearer ${apiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
          </form>{" "}
        </section>
        <Results value={output} />
        <Photos value={photos} alt={input} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
