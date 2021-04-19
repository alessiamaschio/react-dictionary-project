import "./App.css";
import vocabulary from "./images/vocabulary.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="App-title mt-4 ">
            <img className="Image-header" src={vocabulary} alt="vocabulary" />
            Dictionary{" "}
          </h1>
        </header>
      </div>
    </div>
  );
}

export default App;
