import React, { use } from "react";
import PlayerCard from "../playerCard/playerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
  influenceBalance,
  maxPlayerSelect
}) => {
  const playerData = use(playersPromise);
  //   const mountedRef = useRef(false);

  //   useEffect(() => {
  //     // In development StrictMode React mounts, unmounts and remounts components
  //     // to help find side-effects. Guard so this log runs only once when data arrives.
  //     if (mountedRef.current) return;
  //     if (!playerData) return;
  //     mountedRef.current = true;
  //     console.log(playerData);
  //   }, [playerData]);
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[14rem]">
      {playerData.map((player) => (
        <PlayerCard
          key={player.id}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          player={player}
          influenceBalance={influenceBalance}
          maxPlayerSelect={maxPlayerSelect}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
