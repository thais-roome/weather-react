import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world!</h1>
        <WeatherSearch />
      </header>
      <footer>
        Open-sourced on
        <a href="https://github.com/thais-roome/weather-react" target="blank">
          Github
        </a>
        . Coded by Thais Roome!🦋
      </footer>
    </div>
  );
}

export default App;
