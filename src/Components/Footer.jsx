import React from "react";
import logo from "../assets/Storefront.svg";
import LogoName from "../assets/NFT Marketplace.svg";
import DiscordLogo from "../assets/DiscordLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#3B3B3B] py-[40px] box-border">
        <div className="container flex flex-col gap-[30px] lg:flex-row lg:justify-between">
          {/* child 1 */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[10px]">
              <img src={logo} alt="Storefront" />
              <img src={LogoName} alt="LogoName" />
            </div>
            <p className="text-[#CCCCCC] text-[16px] font-[400] font-sans
">
              NFT marketplace UI created <br /> with Anima for Figma.
            </p>
            <p className="text-[#CCCCCC] text-[16px] font-[400] font-sans
">
              Join our community
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

          {/* cild 2 */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[#FFFFFF] font-[700] text-[22px] font-mono
">
              Explore
            </h2>
            <p className="text-[#CCCCCC] text-[16px] font-[400] font-sans">
              Marketplace
            </p>
            <p className="text-[#CCCCCC] text-[16px] font-[400] font-sans">
              Rankings
            </p>
            <p className="text-[#CCCCCC] text-[16px] font-[400] font-sans">
              Connect a wallet
            </p>
          </div>

          {/* child 3  */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[#FFFFFF] font-[700] text-[22px] font-mono
">
              Join our weekly digest
            </h2>
            <p className="text-[#CCCCCC] text-[16px] font-[400] font-sans
">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <div className="hidden md:flex max-w-[420px] w-full pl-[20px] bg-[#FFFFFF] rounded-[20px]">
              <input
                type="text"
                placeholder="Enter your email here"
                className="flex-1 border-none outline-none"
              />
              <button className=" h-[60px] px-[50px] bg-[#A259FF] rounded-[20px] text-[#FFFFFF] text-[16px] font-[600] font-sans
 hover:scale-95  duration-300">
                Subscribe
              </button>
            </div>

            {/* for mobile  */}
            <div className="flex flex-col gap-[16px] md:hidden ">
              <input
                type="text"
                placeholder="Enter your email here"
                className="pl-[20px] bg-[#FFFFFF] rounded-[20px] px-[20px] py-[16px] border-none outline-none"
              />
              <button className=" h-[46px] px-[50px] bg-[#A259FF] rounded-[20px] flex justify-center gap-[12px] items-center text-[#FFFFFF] text-[16px] font-[600] font-sans
">
                <AiOutlineMail /> Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#3B3B3B] py-[30px]">
          <div className="container">
            <div className="bg-[#858584] h-[1px] w-[100%]"></div>

            <p className="text-[#CCCCCC] text-[12px] font-[400] font-sans
 py-[20px]">
              Ⓒ NFT Market. Use this template freely.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
