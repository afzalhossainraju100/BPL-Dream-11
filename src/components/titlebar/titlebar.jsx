import React from 'react';

const Titlebar = () => {
    return (
      <div className="w-[90%] mx-auto mb-[2rem] mt-[2rem] flex justify-between items-center gap-2 pb-2">
        <div className='font-[700] text-[1.4rem] font-family: "Times New Roman", serif;'>
          <p>Selected Player (4/6)</p>
        </div>
        <div className="flex">
          <button className="px-5 py-3 flex justify-center items-center border-box  border-b border-[#1313131a] border-r border-t rounded-l-xl bg-white font-[400] text-[1rem]">
            Available
          </button>
          <button className="px-5 py-3 flex justify-center items-center border-box  border-b border-[#1313131a] border-r border-t rounded-r-xl bg-white font-[400] text-[1rem]">
            Selected (4)
          </button>
        </div>
      </div>
    );
};

export default Titlebar;