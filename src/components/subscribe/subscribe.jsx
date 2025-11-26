import React from "react";
import footerImg from "../../assets/logo-footer.png";

const Subscribe = () => {
return (
  <div className="">
    <div className=" w-[90%] mx-auto mt-[4rem]  bg-[#ffffff] rounded-lg flex flex-col justify-center items-center text-center gap-10 border-1 border-box border-[#1313131a] px-12 py-3 bg-[url('./assets/bg-shadow.png')] bg-cover bg-center">
      <h2 className="font-[700] text-[2rem] items-center leading-[2.5rem] mt-[4rem] tracking-normal">
        <b>Subscribe to our Newsletter</b>
      </h2>
      <p className="text-[#131313b3] text-[24px] font-[500] leading-[1.5rem] tracking-normal items-center">
        Get the latest updates and news right in your inbox!
      </p>
      <div className="flex gap-2 mb-[4rem] flex-col md:flex-row">
        <input
          className="justify-start px-6 py-4 border rounded-xl border-box border-[#13131326]"
          type="email"
          placeholder="Enter your email"
        />
        <button className="px-6 py-3 rounded-2xl font-semibold text-black bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-400 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-l">
          Subscribe
        </button>
      </div>
    </div>
    <div className="w-[100%] bg-[#06091a] text-[white]">
      <div className="flex flex-col justify-center items-center text-center gap-4 mt-[2rem] w-[90%] mx-auto p-6 pt-[16rem]">
        <img src={footerImg} alt="footer-logo" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4">
          <div className="flex flex-col md:items-left md:justify-left md:text-left space-y-4">
            <p className="text-[18px] font-[600] leading-[23px] tracking-normal items-left">
              <b>About Us</b>
            </p>
            <p className="text-[16px] font-[400] leading-[26px] tracking-normal text-[#ffffff99]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="flex flex-col md:items-left md:justify-left md:text-left space-y-4">
            <p className="text-[18px] font-[600] leading-[23px] tracking-normal items-left">
              <b>Quick Links</b>
            </p>
            <ul className="list-disc list-inside text-[16px] font-[400] leading-[26px] tracking-normal text-[#ffffff99] marker:text-white">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col md:items-left md:justify-left md:text-left space-y-4">
            <p className="text-[18px] font-[600] leading-[23px] tracking-normal items-left">
              <b>Subscribe</b>
            </p>
            <p className="text-[16px] font-[400] leading-[26px] tracking-normal text-[#ffffff99]">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg: items-left lg:justify-left lg: text:left  mb-[2rem] ">
              <input
                className="justify-start px-4 py-2 border rounded-l-xl border-box border-[#13131326] bg-[white] text-black"
                type="email"
                placeholder="Enter your email"
              />
              <button className="px-4 py-2 rounded-r-xl font-semibold text-black bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-400 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-l">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Subscribe;
