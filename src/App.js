import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./Preloader/preloader";
import Timer from "./Countdown/timer" ;
import Optin from "./Optin/optin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;