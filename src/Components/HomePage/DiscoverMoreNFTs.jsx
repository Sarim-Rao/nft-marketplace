import React from "react";
import { FiEye } from "react-icons/fi";
import AstroFictionAvatar from "../../Images/Discover More NFTs/AstroFictionAvatar.png";
import AstroFictionPlaceholder from "../../Images/Discover More NFTs/AstroFictionPlaceholder.png";
import DistantGalaxyAvatar from "../../Images/Discover More NFTs/DistantGalaxyAvatar.png";
import DistantGalaxyPlaceholder from "../../Images/Discover More NFTs/DistantGalaxyPlaceholder.png";
import LifeOnEdenaAvatar from "../../Images/Discover More NFTs/LifeOnEdenaAvatar.png";
import LifeOnEdenaPlaceholder from "../../Images/Discover More NFTs/LifeOnEdenaPlaceholder.png";
import { Link } from "react-router-dom";

const DiscoverMoreNFTs = ({ heading }) => {
  const style = { fontSize: "20px", color: "#A259FF" };

  const DiscoverData = [
    {
      id: 1,
      Image: DistantGalaxyPlaceholder,
      name: "Distant Galaxy",
      avatar: DistantGalaxyAvatar,
      avatarName: "MoonDancer",
    },
    {
      id: 2,
      Image: LifeOnEdenaPlaceholder,
      name: "Life On Edena",
      avatar: LifeOnEdenaAvatar,
      avatarName: "NebulaKid",
    },
    {
      id: 3,
      Image: AstroFictionPlaceholder,
      name: "AstroFiction",
      avatar: AstroFictionAvatar,
      avatarName: "Spaceone",
    },
  ];

  return (
    <>
      <div className="bg-[#2B2B2B] py-[40px] md:py-[80px]">
        {heading && (
          <div className="md:max-w-[80%] container flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center">
            <div className="max-w-[703px] w-[100%]">
              <p className="font-sans text-[28px] lg:text-[38px] font-[600] text-[#FFFFFF]">
                Discover More NFTs
              </p>
              <p className="font-sans text-[16px] md:text-[22px] font-[400] text-[#FFFFFF]">
                Explore new trending NFTs
              </p>
            </div>

            <button className=" h-[60px] max-w-[187px] w-full  items-center  gap-[12px] rounded-[20px] border-[2px] border-[#A259FF] text-[#FFFFFF] text-[16px] font-[600] font-sans text-center hover:scale-95 duration-300 hidden md:flex md:justify-center">
              <FiEye style={style} />
              <div className="max-w-[55px]">See All</div>
            </button>
          </div>
        )}

        {/* cards  */}

        <div className="pt-[60px]">
          <div className="md:max-w-[80%] container flex flex-col items-center md:flex-row justify-between gap-[20px]">
            {DiscoverData.map((item) => (
              // card
              <Link
                to="/nft"
                className={`max-w-[330px] w-full bg-[#3b3b3b] rounded-[20px] cursor-pointer hover:scale-95  duration-300
              ${item.id > 2 ? "md:hidden lg:block" : ""}
              `}
                key={item.id}
              >
                <img src={item.Image} alt="" />

                <div className="py-[20px] px-[30px] flex flex-col gap-[25px]">
                  <p
                    className="text-[#FFFFFF] leading-[30px] font-[600] text-[22px] font-sans">
                    {item.name}
                  </p>

                  <div className="flex items-center gap-[12px]">
                    <img src={item.avatar} alt="avatar" />
                    <p
                      className="text-[#FFFFFF] font-[400] text-[16px] font-mono">
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
              </Link>
            ))}

            <button className=" h-[60px] w-full  items-center  gap-[12px] rounded-[20px] border-[2px] border-[#A259FF] text-[#FFFFFF] text-[16px] font-[600] font-sans text-center hover:scale-95 duration-300  flex justify-center md:hidden">
              <FiEye style={style} />
              <div className="max-w-[55px]">See All</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverMoreNFTs;
