import React from "react";
import frame from "../../assets/frame.png";

const SelectedPlayers = ({
  purchasedPlayers,
  setPurchasedPlayers,
  availableBalance,
  setAvailableBalance,
  toggle,
  setToggle,
}) => {
  const handleDelete = (player) => {
    const playerID = player.id;
    const updated = purchasedPlayers.filter((p) => p.id !== playerID);
    setAvailableBalance(availableBalance + player.price);
    setPurchasedPlayers(updated);
  };
  return (
    <div className="mb-[14rem] w-[90%] mx-auto">
      <div>
        {purchasedPlayers.map((player, index) => (
          <div
            key={index}
            className="border-box border border-[#1313131a] rounded-xl mb-[1.5rem]"
          >
            <div className="flex justify-between p-5 items-center ">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    className="w-[50px] h-[50px] rounded-xl  overflow-hidden"
                    src={player.img}
                    alt="User"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-[600] leading-[30px]">{player.name}</p>
                  <p className="text-[#13131399] ">{player.battingStyle}</p>
                </div>
              </div>
              <div>
                <img
                  onClick={() => {
                    handleDelete(player);
                  }}
                  src={frame}
                  alt="Delete"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => setToggle(!toggle)}
          className="border-2 border-box border-[#E7FE29] rounded-3xl  hover:bg-[#E7FE29] hover:text-black transition duration-300 flex justify-center items-center p-1 mb-[4rem]"
        >
          {" "}
          <span className="bg-[#E7FE29] rounded-3xl text-black px-2 py-1 font-[700]">
            Add More Player
          </span>
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
