// import "./App.css";
import React from "react";
// import { Navigation } from "./components/NavigationBar/Navigation";
// import { Boxscore } from "./components/BoxscoreBar/Boxscore";
// import { FetchPlayers } from "./components/FetchData/FetchPlayers";
// import { PhotoSlider } from "./components/PhotoSlider/PhotoSlider";
import { AppRouter } from "./routing/AppRoutes";
import { BrowserRouter } from 'react-router-dom'

// const config =  [
//   {
//       title: 'image one',
//       image: 'https://www.pexels.com/pl-pl/zdjecie/mezczyzna-zanurzajacy-pilke-163452/'
//   },
//   {
//       title: 'image two',
//       image: 'https://www.pexels.com/pl-pl/zdjecie/sylwetka-mezczyzn-gry-w-koszykowke-69773/'
//   }
// ]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
      {/* <Navigation></Navigation> */}
      {/* <Boxscore></Boxscore> */}
      {/* <FetchPlayers></FetchPlayers> */}
      {/* <PhotoSlider config={config}></PhotoSlider> */}
    </div>
  );
}

export default App;
