import React, { use } from "react";
import PlayerCard from "../playerCard/playerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
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
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
