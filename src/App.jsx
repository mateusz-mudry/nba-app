// import "./App.css";
import React from "react";
import { Navigation } from "./components/NavigationBar/Navigation";
import { Boxscore } from "./components/BoxscoreBar/Boxscore";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Boxscore></Boxscore>
    </div>
  );
}

export default App;
