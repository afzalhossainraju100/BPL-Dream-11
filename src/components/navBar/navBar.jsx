import React from 'react';
import navImg from '../../assets/logo.png';
import doller from '../../assets/doller.png';

const navBar = ({ availableBalance }) => {
  return (
    <div>
      <div className="navbar bg-base-100   w-[90%] mx-auto h-[5rem] flex flex-row justify-start items-center bg-white">
        <div className="flex-1">
          <a className=" text-xl">
            <img className="" src={navImg} alt="logo" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex gap-2 text-black">
            <span>{availableBalance}</span>
            <span>Coin</span>
            <img
              className="w-[20px] h-[20px] rounded-full"
              src={doller}
              alt="doller image"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default navBar;