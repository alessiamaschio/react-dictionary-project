import React from "react";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="App-title ">Dictionary </h1>
        </header>
        <main>
          <Search value="dictionary" />
        </main>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
