import React from "react";

const AnimakidCards = ({ AnimakidCardsSec }) => {
  return (
    <>
      <div className="pt-[60px] bg-[#3b3b3b]">
        <div className="container flex flex-wrap justify-center  gap-[30px] ">
          {AnimakidCardsSec.map((item) => (
            // card
            <div
              className={`max-w-[330px] w-full md:w-[45%]   bg-[#2b2b2b] rounded-[20px] cursor-pointer hover:scale-95  duration-300
              
              ${item.id > 3 ? "hidden md:block" : ""}
              ${item.id > 6 ? " md:hidden lg:block" : ""}
              `}
              key={item.id}
            >
              <img src={item.Image} alt="" />

              <div className="py-[20px] px-[30px] flex flex-col gap-[25px]">
                <p className="text-[#FFFFFF] leading-[30px] font-[600] text-[22px] font-sans

">
                  {item.name}
                </p>

                <div className="flex items-center gap-[5px]">
                  <img src={item.avatar} alt="avatar" />
                  <p className="text-[#FFFFFF] font-[400] text-[16px] font-mono
">
                    {item.avatarName}
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-[#858584] text-[12px] font-mono
 font-[400]">
                      Price
                    </p>
                    <p className="text-[#FFFFFF] font-mono
 text-[16px] font-[400] leading-[22px]">
                      1.63 ETH
                    </p>
                  </div>
                  <div>
                    <p className="text-[#858584] text-[12px] font-mono
 font-[400]">
                      Highest Bid
                    </p>
                    <p className="text-[#FFFFFF] font-mono
 text-[16px] font-[400] leading-[22px]">
                      0.33 wETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimakidCards;
