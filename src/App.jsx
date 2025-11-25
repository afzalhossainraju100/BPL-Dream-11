import "./App.css";
import { Suspense } from "react";
import NavBar from "./components/navBar/navBar";
import AvailablePlayers from "./components/availablePlayers/availablePlayers";
import SelectedPlayers from "./components/selectedPlayers/selectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      <NavBar></NavBar>
      <Suspense
        fallback={
          <div>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
          </div>
        }
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
