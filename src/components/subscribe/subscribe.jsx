import React from "react";



const Subscribe = () => {
  return (
    <div>
        <div className="w-[90%] mx-auto mt-[4rem]  bg-[#ffffff] rounded-lg flex flex-col justify-center items-center text-center gap-10 border-1 border-box border-[#1313131a] px-12 py-3 bg-[url('./assets/bg-shadow.png')] bg-cover bg-center">
          <h2 className="font-[700] text-[2rem] items-center leading-[2.5rem] mt-[4rem] tracking-normal">
            <b>Subscribe to our Newsletter</b>
          </h2>
          <p className="text-[#131313b3] text-[24px] font-[500] leading-[1.5rem] tracking-normal items-center">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-2 mb-[4rem] ">
            <input
              className="justify-start px-6 py-4 border rounded-xl border-box border-[#13131326]"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="px-6 py-3 rounded-2xl font-semibold text-black 
  bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-400 
  shadow-md hover:shadow-lg transition-all duration-300 "
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-[100%]">
            <div>
                <img src="" alt="" />
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Subscribe;
