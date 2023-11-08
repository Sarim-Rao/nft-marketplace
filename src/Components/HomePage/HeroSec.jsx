import React from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import animatedImage from "../../Images/animated-image.gif";
import { Link } from "react-router-dom";


const HeroSec = () => {
  return (
    <>
      <div className="bg-[#2B2B2B] py-[30px] md:py-[80px]">
        <div className="container flex flex-col items-center gap-[30px] md:flex-row md:justify-around md:max-w-[80%]">
          {/* left side  */}
          <div className="flex flex-col mx-[auto] items-center md:items-start gap-[30px] ">
            <p className="text-[27px] md:text-[38px] leading-[39px] lg:text-[67px]  lg:leading-[67px] font-sans font-[700] text-capitalize text-[#FFFFFF]">
            Discover Digital Art & Collect Nfts 
            </p>
            <p className="text-[16px] md:text-[22px] font-sans font-[400] text-[#FFFFFF] text-center md:text-left">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>


            <img src={animatedImage} alt="animatedImage" className="md:hidden md:w-[50%]" />
            <Link to="/createaccount">

            <button className="max-w-[224px] bg-[#A259FF] font-sans rounded-[20px] px-[50px] flex justify-center items-center h-[60px] text-[16px] text-[#FFFFFF] font-[600] gap-[12px] hover:scale-95 duration-300">
              <BsRocketTakeoff /> Get Started
            </button>
            </Link>

            <div className="flex gap-[30px]">
              <div>
                <p className="text-[18px] md:text-[28px] sm:text-[28px] font-[700] font-mono text-[#FFFFFF]">
                  240k+
                </p>
                <p className="font-sans text-[23px] md:text-[16px]  font-[400]  text-[#FFFFFF]">
                  
                  Total Sale
                </p>
              </div>
              <div>
                <p className="text-[18px] md:text-[28px] sm:text-[28px] font-[700] font-mono text-[#FFFFFF]">
                  240k+
                </p>
                <p className="font-sans text-[23px] md:text-[16px] font-[400] text-[#FFFFFF]">
                  
                Auctions
                </p>
              </div>
              <div>
                <p className="text-[18px] md:text-[28px] sm:text-[28px] font-[700] font-mono text-[#FFFFFF]">
                  240k+
                </p>
                <p className="font-sans text-[23px] md:text-[16px] font-[400] text-[#FFFFFF]">
                  
                Artists
                </p>
              </div>
            </div>
          </div>



          {/* right side  */}
            <img src={animatedImage} alt="animatedImage" className="hidden md:block md:w-[50%]" />
          {/* <div className="w-[50%]">
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSec;
