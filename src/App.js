import React from "react";
import Search from "./Search";

import "./App2.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="App-title ">Dictionary </h1>
        </header>
        <main>
          <Search />
        </main>
      </div>
    </div>
  );
}

export default App;
