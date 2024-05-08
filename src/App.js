import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world!</h1>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
