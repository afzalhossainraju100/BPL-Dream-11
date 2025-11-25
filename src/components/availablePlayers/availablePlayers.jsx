import React, { use } from "react";
import userImg from "../../assets/user 1.png";
import flag from "../../assets/report 1.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
console.log(playerData)
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
    <div className="w-[90%] mx-auto">

    {playerData.map(player => (
            <div key={player.id} className="card bg-base-100 w-96 shadow-sm p-[1rem] bg-white space-y-4">
              <figure className="mb-[1rem]">
                <img
                  src={player.img}
                  alt={`${player.name} image`}
                  className="object-cover h-[200px] w-full rounded-lg"
                />
              </figure>
              <div className="bg-white mb-[1rem] ">
                <h2 className="card-title ml-2">
                  {" "}
                  <img src={userImg} alt="user image" /> {player.name}
                </h2>
              </div>
              <div className="bg-white  ml-2 flex justify-between mr-2">
                <p className="flex items-center gap-2 opacity-[0.5]">
                  <img src={flag} alt="flag" /> India
                </p>
                <button className="p-2 rounded bg-[#1313130D]">
                  All-Rounder
                </button>
              </div>
              <p className="ml-2">
                <b>Rating</b>
              </p>
              <div className="bg-white mb-[1rem] ml-2 flex justify-between mr-2">
                <p>
                  <b>Left-Hand-Bat</b>
                </p>
                <p className="text-[#131313b3]">Left-Hand-Bat</p>
              </div>

              <div className="card-actions justify-between items-center ml-2 mr-2 mb-1">
                <p>
                  <b>Price:$ 1500000</b>
                </p>
                <button className="border border-box border-[#1313131a] p-2 rounded-lg">
                  Choose Player
                </button>
              </div>
            </div>
        ))
    }
      
    </div>
  );
};

export default AvailablePlayers;
