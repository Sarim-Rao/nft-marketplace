import React from "react";
import orbitin from "../../Images/NftImages/OrbitinAvatar.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
import Timer from "../Timer";

const TheOrbitians = () => {
  const isonStyle = {
    color: "#858584",
    fontSize: "32px",
  };
  return (
    <>
      <div className="bg-[#2B2B2B] pt-[40px]">
        
          

          <div className="lg:max-w-[80%] container flex flex-col gap-[20px] items-start md:flex-row md:justify-between ">
            <div className="flex flex-col gap-[30px]">
              <div>

            <p className="text-[28px] md:text-[38px] lg:text-[51px] font-[600] leadig-[39px] md:leading-[56px] text-[#FFFFFF]">
              The Orbitians
            </p>
            <p className="text-[22px] font-[400] leading-[35px] text-[#858584]">
              Minted on Sep 30, 2022
            </p>
              </div>
            <div>
              <p className="text-[22px] font-[700] font-mono  leading-[35px] text-[#858584]">
                Created By
              </p>
              <Link to="/artist">
                <div className="flex gap-[12px] items-center cursor-pointer hover:scale-95  duration-300">
                  <img
                    src={orbitin}
                    alt="orbitin"
                    className="w-[24px] h-[24px]"
                  />
                  <p className="text-[22px] font-[700] font-mono leading-[35px] text-[#FFFFFF]">
                    Orbitian
                  </p>
                </div>
              </Link>
            </div>
            <p className="text-[22px] hidden md:block font-[700] font-mono leading-[35px] text-[#858584]">
              Description
            </p>

            </div>

            <div className="mx-auto sm:mx-0">

              <Timer button={true} />

            </div>

          </div>




          <div className="lg:max-w-[80%] container  md:flex-row md:justify-between h-auto">
          <div className=" flex flex-col items-start gap-[25px] md:w-[50%]">
          
            <div className="flex flex-col gap-[20px]">
            <p className="text-[22px] md:hidden font-[700] font-mono leading-[35px] text-[#858584]">
              Description
            </p>
              <p className="text-[16px] md:text-[22px] font-sans font-[400] leading-[22px] md:leading-[35px] text-[#FFFFFF]">
                The Orbitians is a collection of 10,000 unique NFTs on the
                Ethereum blockchain,
              </p>

              <p className="text-[16px] md:text-[22px] font-sans font-[400] leading-[22px] md:leading-[35px] text-[#FFFFFF]">
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians.
              </p>

              <p className="text-[16px] md:text-[22px] font-sans font-[400] leading-[22px] md:leading-[35px] text-[#FFFFFF]">
                They live in a metal space machines, high up in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know
                any other way to be. Upside-Downs believe that they will be able
                to win this war if they could only get an eye into Orbitian
                territory, so they've taken to make human beings their target.
              </p>
            </div>

            <p className="text-[22px] font-[700] font-mono leading-[35px] text-[#858584]">
              Details
            </p>

            <div className="flex gap-[10px] items-center">
              <AiOutlineGlobal style={isonStyle} />
              <p className="font-sans text-[16px] md:text-[22px] text-[#FFFFFF] font-[400] leading-[35px]">
                View on Etherscan
              </p>
            </div>

            <div className="flex gap-[10px] items-center">
              <AiOutlineGlobal style={isonStyle} />
              <p className="font-sans text-[16px] md:text-[22px] text-[#FFFFFF] font-[400] leading-[35px]">
                View Original
              </p>
            </div>

            <p className="text-[22px] font-[700] font-mono leading-[35px] text-[#858584]">
              Tags
            </p>
            {/* parent  */}
            <div className="flex flex-col md:flex-row gap-[20px]">
              <div className="bg-[#3B3B3B] rounded-[20px] max-w-[150px] w-full px-[30px] h-[46px] flex justify-center items-center text-[#FFFFFF] text-[16px] font-[600] leading-[22px] uppercase">
                ANIMATIOn
              </div>
              <div className="bg-[#3B3B3B] rounded-[20px] max-w-[150px] w-full px-[30px] h-[46px] flex justify-center items-center text-[#FFFFFF] text-[16px] font-[600] leading-[22px] uppercase">
                illustration
              </div>
              <div className="bg-[#3B3B3B] rounded-[20px] max-w-[150px] w-full px-[30px] h-[46px] flex justify-center items-center text-[#FFFFFF] text-[16px] font-[600] leading-[22px] uppercase">
                moon
              </div>
              <div className="bg-[#3B3B3B] rounded-[20px] max-w-[150px] w-full px-[30px] h-[46px] flex justify-center items-center text-[#FFFFFF] text-[16px] font-[600] leading-[22px] uppercase">
                moon
              </div>
            </div>
          </div>

        

        </div>
      </div>
    </>
  );
};

export default TheOrbitians;
