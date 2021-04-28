import React, { useState } from "react";
import axios from "axios";
import Results2 from "./Results2";

export default function WordOfTheDay() {
  let [output, setOutput] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setOutput(response.data);
  }

  function display() {
    let apiKey = `evw5e6nwg3z8peiykns7tziuxcjl5cwter6hzlku2i3n866of`;
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let day = String(today.getDate()).padStart(2, "0");

    let apiUrl = `https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${year}-${month}-${day}&api_key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    display();
  }

  if (loaded) {
    return (
      <div>
        <Results2 value={output} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
