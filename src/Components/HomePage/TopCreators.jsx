import React from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { Link } from "react-router-dom";

const TopCreators = ({ TopCreatorsCards, heading }) => {
  const style = { fontSize: "20px", color: "#A259FF" };
  return (
    <>
      {heading && (
        <div className="bg-[#2B2B2B] py-[40px] md:py-[80px]">
          <div className="md:max-w-[80%] container flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center">
            <div className="max-w-[703px] w-[100%]">
              <p className="font-sans text-[28px] leading-[39px] md:leading-[45px] md:text-[38px] font-[600] text-[#FFFFFF]">
                Top creators
              </p>
              <p className="font-sans text-[16px] md:text-[22px] font-[400] text-[#FFFFFF]">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>

          <Link to="/ranking" className="hidden md:block">
           <div className="w-[247px] whitespace-no-wrap h-[60px] px-[50px] flex items-center justify-center gap-[12px] rounded-[20px] border-[2px] border-[#A259FF] text-[#FFFFFF] text-[16px] font-[600] font-sans text-center hover:scale-95 duration-300">
              <div>
              <BsRocketTakeoff style={style} /> 
              </div>
              <p className="w-[115px]">View Rankings</p>

            </div>
          </Link>
          </div>
        </div>
      )}

      {/* cards  */}

      <div className="bg-[#2B2B2B]">
        <div className="md:max-w-[80%] container flex flex-wrap justify-center items-center gap-[20px] sm:gap-[30px] ">
          {TopCreatorsCards.map((item) => (
            // card 
            <Link to="/artist"
              className={`lg:max-w-[240px] w-[100%] md:w-[46%] lg:w-[100%]  flex  lg:flex-col items-center justify-center gap-[20px]  bg-[#3b3b3b] rounded-[20px] p-[10px] hover:scale-95  duration-300 cursor-pointer
                ${item.id > 5 ? "hidden md:flex" : ""}
                ${item.id > 6 ? "md:hidden lg:flex " : ""}`}
              key={item.id}
            >
              <div className="relative">
              <div className="absolute top-[-8px] left-[-7px] lg:top-[10px] lg:left-[-40px] text-[12px] md:text-[16px] w-[30px] h-[30px] bg-[#2B2B2B] rounded-[20px] flex items-center justify-center text-[#858584]">
                      {item.id}
                    </div>
              <img
                src={item.userImg}
                alt="userImg"
                className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px]"
              />
              </div>
              <div className="flex flex-col  items-start lg:items-center gap-[10px] ">
                <p className="text-[22px] font-sans  font-[600] text-[#FFFFFF] leading-[30px]">
                  {item.name}
                </p>

                <div className="flex gap-[5px]">
                  <p className="text-[#858584] text-[16px] font-sans font-[400]">
                    Total Sales:
                  </p>
                  <p className="text-[#FFFFFF] text-[16px] font-mono font-[400] ">
                    34.53ETH
                  </p>
                </div>
              </div>
            </Link>
          ))}


        <Link to="/ranking" className="md:hidden ">
           <div className="w-[247px] whitespace-no-wrap h-[60px] px-[50px] flex items-center justify-center gap-[12px] rounded-[20px] border-[2px] border-[#A259FF] text-[#FFFFFF] text-[16px] font-[600] font-sans text-center hover:scale-95 duration-300">
              <div>
              <BsRocketTakeoff style={style} /> 
              </div>
              <p className="w-[115px]">View Rankings</p>

            </div>
          </Link>

        </div>
      </div>
    </>
  );
};

export default TopCreators;
