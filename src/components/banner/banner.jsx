import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = ({ setAvailableBalance, availableBalance }) => {
    return (
      <div className="w-[90%] mx-auto mb-[1rem] mt-[1rem]">
        <div className="bg-[url('./assets/bg-shadow.png')] bg-cover bg-center bg-black h-[100%] rounded-lg flex flex-col justify-center items-center text-center gap-4 mb-[2rem] text-[white] space-y-2">
          <img
            className="w-[16rem] h-[13rem] mt-[4rem]"
            src={bannerImg}
            alt="banner image"
          />
          <h1 className='font-[700] text-[1.5rem] w-[80%] font-family: "Times New Roman", serif;'>
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className='font-[400] text-[1rem] w-[80%] font-family: "Times New Roman", serif;'>
            Beyond Boundaries Beyond Limits
          </p>
          <button onClick={()=>{
            setAvailableBalance(availableBalance+500000)
          }} className="border-2 border-box border-[#E7FE29] rounded-3xl  hover:bg-[#E7FE29] hover:text-black transition duration-300 flex justify-center items-center p-2 mb-[4rem]">
            <span className="bg-[#E7FE29] rounded-3xl text-black px-4 py-2">
              Claim Free Credit
            </span>
          </button>
        </div>
      </div>
    );
};

export default Banner;