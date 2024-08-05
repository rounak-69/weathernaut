import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">
          Download Source Code
        </a>{"https://github.com/rounak-69/weathernaut"}
        | Developed by{" "}
        <a target="_blank" href="">
          Rounak Jhajharia
        </a>{"www.linkedin.com/in/rounak-jhajharia-0a454b232"}
      </div>
    </React.Fragment>
  );
}

export default App;
