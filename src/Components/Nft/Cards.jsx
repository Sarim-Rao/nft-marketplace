import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cards = ({ NftCards, heading }) => {
  const style = { fontSize: "20px", color: "#A259FF" };
  return (
    <>
      {heading && (
        <div className="bg-[#2B2B2B] py-[40px]">
          <div className="md:max-w-[80%] container flex flex-col items-center gap-[20px] md:flex-row md:justify-between md:items-center">
            <div className="max-w-[703px] w-[100%]">
              <p className="font-sans text-[28px] leading-[39px] lg:text-[38px] font-[600] text-[#FFFFFF] text-center md:text-left">
                More From This Artist
              </p>
            </div>
            <Link to="/artist">
              <button className="hidden whitespace-no-wrap h-[60px] w-[315px] md:flex items-center justify-center gap-[12px] rounded-[20px] border-[2px] border-[#A259FF]  text-center hover:scale-95 duration-300">
                <div>
                  <AiOutlineArrowRight style={style} />
                </div>
                <div className="text-[16px] font-[600] text-[#FFFFFF]">
                  Go To Artist Page
                </div>
              </button>
            </Link>
          </div>
        </div>
      )}

      <div className="pt-[30px]">
        <div className="md:max-w-[80%] container flex flex-wrap items-center justify-center gap-[30px] ">
          {NftCards.map((item) => (
            // card
            <div
              className={`max-w-[330px] w-full md:w-[45%] lg:w-[30%] bg-[#3b3b3b] rounded-[20px] cursor-pointer hover:scale-95  duration-300
              ${item.id > 2 ? "hidden md:block" : ""}
              ${item.id > 6 ? "md:hidden lg:block" : ""}
              `}
              key={item.id}
            >
              <img src={item.Image} alt="" />

              <div className="py-[20px] px-[30px] flex flex-col gap-[25px]">
                <p className="text-[#FFFFFF] leading-[30px] font-[600] text-[22px] font-sans">
                  {item.name}
                </p>

                <div className="flex items-center gap-[5px]">
                  <img src={item.avatar} alt="avatar" />
                  <p className="text-[#FFFFFF] font-[400] text-[16px] font-mono">
                    {item.avatarName}
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-[#858584] text-[12px] font-mono font-[400]">
                      Price
                    </p>
                    <p className="text-[#FFFFFF] font-mono text-[16px] font-[400] leading-[22px]">
                      1.63 ETH
                    </p>
                  </div>
                  <div>
                    <p className="text-[#858584] text-[12px] font-mono font-[400]">
                      Highest Bid
                    </p>
                    <p className="text-[#FFFFFF] font-mono text-[16px] font-[400] leading-[22px]">
                      0.33 wETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link to="/artist">
            <button className="md:hidden whitespace-no-wrap h-[60px] w-[315px] flex items-center justify-center gap-[12px] rounded-[20px] border-[2px] border-[#A259FF]  text-center hover:scale-95 duration-300">
              <div>
                <AiOutlineArrowRight style={style} />
              </div>
              <div className="text-[16px] font-[600] text-[#FFFFFF]">
                Go To Artist Page
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
