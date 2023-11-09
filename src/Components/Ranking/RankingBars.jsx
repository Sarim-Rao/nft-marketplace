import React from "react";
import { BiHash } from "react-icons/bi";

const RankingBars = ({ RankingCards }) => {
  const iconStyle = {
    color: "#858584",
    fontSize: "16px",
  };
  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[80%] container w-[100%] p-[20px] rounded-[20px] border-[1px] border-[#3B3B3B] flex justify-between">
          <div className="w-[40%] flex items-center gap-[8px] md:gap-[20px] py-[12px]">
            <div>
              <BiHash style={iconStyle} />
            </div>

            <div className="text-[16px] font-mono font-[400] leading-[22px] text-[#858584]">
              Artist
            </div>
          </div>

          <div className="w-[60%] flex items-center justify-end sm:justify-around lg:justify-between py-[12px]">
            <p className="text-[16px] hidden md:block font-[400] leading-[22px] font-mono text-[#858584]">
              Change
            </p>
            <p className="text-[16px] hidden lg:block font-[400] leading-[22px] font-mono text-[#858584]">
              NFTsSold
            </p>
            <p className="text-[16px] font-[400] leading-[22px] font-mono text-[#858584]">
              Volume
            </p>
          </div>
        </div>
      </div>

      {
        RankingCards.map((item)=>(
         <div className="max-w-[80%] container w-[100%] bg-[#3B3B3B] rounded-[20px] my-[20px] py-[12px] flex" key={item.id}>

          <div className="w-[60%] md:w-[40%] py-[12px]  relative">
            <div className="flex items-center gap-[20px] hover:scale-95  duration-300 cursor-pointer">
           <img src={item.ArtistImage} alt="ArtistImage" className="h-[24px] md:h-[60px] " />
           <p className="text-[16px] font-[400] leading-[22px] md:text-[22px] md:font-[600] md:leading-[30px] font-sans text-[#FFFFFF] whitespace-nowrap">
            {item.name}
            </p>
            
           <div className="absolute left-[-25px] md:left-[-50px] text-[12px] md:text-[16px] w-[30px] h-[30px] md:bg-[#2B2B2B] rounded-[20px] flex items-center justify-center text-[#858584]">
                      {item.id} 
                    </div>
            </div>

          </div>

          <div className="w-[40%] md:w-[60%] py-[12px] flex items-center justify-around lg:justify-between ">
           <div className="text-[16px] hidden md:block font-mono text-[#00AC4F] font-[400] leading-[22px]">
           +1.41%
           </div>
           <div className="text-[16px] hidden lg:block font-mono text-[#FFFFFF] font-[400] leading-[22px]">
           602
           </div>
           <div className="text-[12px] md:text-[16px] font-mono text-[#FFFFFF] font-[400] leading-[22px]">
           12.4 ETH
           </div>
          </div>
         </div>
       
        ))
      }
    

    </>
  );
};

export default RankingBars;
