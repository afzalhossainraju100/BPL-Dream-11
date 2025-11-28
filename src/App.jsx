import "./App.css";
import { Suspense } from "react";
import NavBar from "./components/navBar/navBar";
import AvailablePlayers from "./components/availablePlayers/availablePlayers";
import SelectedPlayers from "./components/selectedPlayers/selectedPlayers";
import Banner from "./components/banner/banner";
import Subscribe from "./components/subscribe/subscribe";
import Footer from "./components/footer/footer";
import Titlebar from "./components/titlebar/titlebar";
import { useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
  const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(2200000);

  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>
      <Banner></Banner>
      <Titlebar setToggle={setToggle} toggle={toggle}></Titlebar>
      {toggle === true ? (
        <Suspense
          fallback={
            <div className="w-[90%] mx-auto mb-[2rem] flex flex-col-reverse justify-center items-center gap-2">
              <span className="loading loading-ring loading-xs"></span>
              <span className="loading loading-ring loading-sm"></span>
              <span className="loading loading-ring loading-md"></span>
            </div>
          }
        >
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
