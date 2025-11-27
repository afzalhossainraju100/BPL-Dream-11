import React from "react";
import frame from "../../assets/frame.png";
import user from "../../assets/user 1.png";

const SelectedPlayers = () => {
  return (
    <div className="w-[90%] mx-auto border-box border border-[#1313131a] rounded-xl mb-[14rem]">
        <div className="flex justify-between p-5 items-center ">
          <div className="flex items-center gap-3">
            <div>
              <img src={user} alt="User" />
            </div>
            <div className="flex flex-col">
              <p className="font-[600] leading-[30px]">Darrell Steward</p>
              <p className="text-[#13131399] ">Left-Hand-Bat</p>
            </div>
          </div>
          <div>
            <img src={frame} alt="Delete" />
          </div>
        </div>
    </div>
  );
};

export default SelectedPlayers;
