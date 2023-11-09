import React from "react";
import { Link } from "react-router-dom";

const MarketTabs = ({tab,setTab}) => {
  


  const handleTab = (tab) => {
    setTab(tab);
  };


  return (
    <>
      <div className="bg-[#2B2B2B]">
        <div className="container flex justify-around">
          <div
            className={`w-[350px] ${
              tab === 1 ? "border-b-2 border-[#858584] text-[#FFFFFF] " :"text-[#858584]"
            } text-center p-[15px]`}
            onClick={() => handleTab(1)}
          >
            <Link>
              <div className="  flex justify-center gap-[16px] font-sans text-[16px] md:text-[22px] font-[600] leading-[22px] md:leading-[30px]">
                <p>NFTs</p>
                <span className="hidden md:block text-[#FFFFFF]  ml-[10px] text-[16px] font-mono font-[400] leading-[22px] bg-[#858584] rounded-[20px] py-[5px] px-[10px]">
                  302
                </span>
              </div>
            </Link>
          </div>

          <div
            className={`max-w-[350px] w-full text-center p-[15px] ${
              tab===2 ? "border-b-2 border-[#858584] text-[#FFFFFF]" :"text-[#858584]"
            }`}
            onClick={() => handleTab(2)}
          >
            <Link>
              <div className=" flex justify-center gap-[16px] font-sans text-[16px] md:text-[22px] font-[600] leading-[22px] md:leading-[30px]">
                <p>Collections</p>
                <span className="hidden md:block text-[#FFFFFF] ml-[10px] text-[16px] font-mono font-[400] leading-[22px] bg-[#858584] rounded-[20px] py-[5px] px-[10px]">
                  67
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketTabs;
