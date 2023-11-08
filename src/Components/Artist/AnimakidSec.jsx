import React from "react";
import DiscordLogo from "../../assets/DiscordLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import TwitterLogo from "../../assets/TwitterLogo.svg";
import YoutubeLogo from "../../assets/YoutubeLogo.svg";
import { Link } from "react-router-dom";
import { GoCopy } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";

const AnimakidSec = () => {
  return (
    <>
      <div className="bg-[#2B2B2B] py-[60px]">
        <div className="container flex flex-col items-center md:items-start lg:flex-row">
          {/* left side  */}
          <div className="flex flex-col gap-[30px] w-[100%] md:w-[50%]">
            <p
              className="font-sans text-[28px] font-[600] leading-[39px] text-[#FFFFFF]">
              Animakid
            </p>
            <div className=" flex-col flex md:flex-row lg:hidden gap-[20px]">
              <button className="flex items-center justify-center gap-[12px] px-[30px] h-[60px] rounded-[20px] bg-[#A259FF] text-[#FFFFFF] font-[600] text-[16px] hover:scale-95  duration-300">
                <GoCopy color="#ffffff" fontSize="20px" /> 0xc0E3...B79C
              </button>

              <button className="flex items-center justify-center gap-[12px] px-[25px] h-[60px] rounded-[20px] bg-[transparent] border-[2px] border-[#A259FF]  text-[#FFFFFF] font-[600] text-[16px] hover:scale-95  duration-300">
                <AiOutlinePlus color="#A259FF" fontSize="20px" /> Follow
              </button>
            </div>

            <div className="flex gap-[20px] justify-start md:justify-start">
              <div className="max-w-[91px]">
                <p
                  className="text-[22px] sm:text-[28px] font-[700] font-mono text-[#FFFFFF]"
                >
                  250k+
                </p>
                <p
                  className="font-sans text-[16px] font-[400] text-[#FFFFFF]"
                >
                  Volume
                </p>
              </div>
              <div className="max-w-[91px]">
                <p
                  className="text-[22px] sm:text-[28px] font-[700] font-mono text-[#FFFFFF]"
                >
                  50+
                </p>
                <p
                  className="font-sans text-[16px] font-[400] text-[#FFFFFF]"
                >
                  NFTs Sold
                </p>
              </div>
              <div className="max-w-[91px]">
                <p
                  className="text-[22px] sm:text-[28px] font-[700] font-mono text-[#FFFFFF]">
                  3000k+
                </p>
                <p
                  className="font-sans text-[16px] font-[400] text-[#FFFFFF]"
                >
                  Followers
                </p>
              </div>
            </div>
            <div>
              <p
                className="text-[#858584] trext-[22px] font-mono leading-[35px] font-[700]"
              >
                Bio
              </p>

              <p
                className="text-[#FFFFFF] font-sans text-[22px] leading-[35px]"
              >
                The internet's friendliest designer kid.
              </p>
            </div>
            <div>
              <p
                className="text-[#858584] trext-[22px] font-mono leading-[35px] font-[700]"
              >
                Links
              </p>

              {/* logoos  */}
              <div className="flex gap-[10px]">
                <Link to="/">
                  <img
                    src={DiscordLogo}
                    alt="discord"
                    className="cursor-pointer"
                  />
                </Link>

                <Link to="/">
                  <img
                    src={InstagramLogo}
                    alt="InstagramLogo"
                    className="cursor-pointer"
                  />
                </Link>

                <Link to="/">
                  <img
                    src={TwitterLogo}
                    alt="InstagramLogo"
                    className="cursor-pointer"
                  />
                </Link>

                <Link to="/">
                  <img
                    src={YoutubeLogo}
                    alt="InstagramLogo"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* right side  */}

          <div className="w-[100%] md:w-[50%]">
            <div className="  hidden lg:flex gap-[20px] lg:justify-end">
              <button className="flex items-center justify-center gap-[12px] px-[30px] h-[60px] rounded-[20px] bg-[#A259FF] text-[#FFFFFF] font-[600] text-[16px] hover:scale-95  duration-300">
                <GoCopy color="#ffffff" fontSize="20px" /> 0xc0E3...B79C
              </button>

              <button className="flex items-center justify-center gap-[12px] px-[25px] h-[60px] rounded-[20px] bg-[transparent] border-[2px] border-[#A259FF]  text-[#FFFFFF] font-[600] text-[16px] hover:scale-95  duration-300">
                <AiOutlinePlus color="#A259FF" fontSize="20px" /> Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimakidSec;
