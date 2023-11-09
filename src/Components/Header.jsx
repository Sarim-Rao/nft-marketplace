import React, { useState } from "react";
import logo from "../assets/Storefront.svg";
import LogoName from "../assets/NFT Marketplace.svg";
import { AiOutlineUser } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNav, setShownav] = useState(false);
  const iconStyle = {
    fontSize: "24px",
  };
  return (
    <>
      <div className="py-[20px] bg-[#2B2B2B] box-border">
        {/* desktop nav  */}
        <div className="px-[50px] hidden lg:flex justify-between">
          <Link to="/" className="flex gap-[10px] max-w-[199px] w-full">
            <img src={logo} alt="Storefront" />
            <img src={LogoName} alt="LogoName" />
          </Link>

          {/* links  */}
          <ul className="flex gap-[10px]">
            <Link
              to="/marketplace"
              className="p-4 text-[16px] font-[600] text-[#FFFFFF] font-sans leading-[22px] cursor-pointer hover:scale-95  duration-300 "
            >
              Marketplace
            </Link>
            <Link
              to="/ranking"
              className="p-4 text-[16px] font-[600] text-[#FFFFFF] cursor-pointer hover:scale-95  duration-300 font-sans"
            >
              Rankings
            </Link>
            <Link
              to="/connectwallet"
              className="p-4 text-[16px] text-[#FFFFFF] font-[600] font-sans cursor-pointer hover:scale-95  duration-300 "
            >
              Connect a wallet
            </Link>
            <li>
              <Link
                to="/createaccount"
                className="cursor-pointer text-[16px] text-[#FFFFFF]  font-[600] h-[60px] px-[30px] bg-[#A259FF]  rounded-[20px] flex justify-center items-center gap-[12px] hover:scale-95  duration-300 font-sans"
              >
                <AiOutlineUser style={iconStyle} /> Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile navbar  */}

        <div className="px-[20px] md:px-[50px] flex justify-between items-center text-[#FFFFFF] lg:hidden">
          <Link to="/" className="flex gap-[10px] max-w-[149px] w-full">
            <img src={logo} alt="Storefront" />
            <img src={LogoName} alt="LogoName" />
          </Link>

          <button onClick={() => setShownav(!showNav)}>
            <FaBarsStaggered style={iconStyle} />
          </button>

          {/* links  */}
        </div>
        <div className="container  text-[#ffffff] ease-out duration-500">
          {showNav && (
            <ul>
              <li className="py-[15px] hover:scale-95  duration-300">
                <Link
                  to="/marketplace"
                  className="p-4 text-[16px] font-[600] font-sans cursor-pointer hover:scale-95  duration-300"
                >
                  Marketplace
                </Link>
              </li>
              <li className="py-[15px] hover:scale-95  duration-300">
                <Link
                  to="/ranking"
                  className="p-4 text-[16px] font-[600] font-sans cursor-pointer hover:scale-95  duration-300"
                >
                  Rankings
                </Link>
              </li>
              <li className="py-[15px] hover:scale-95  duration-300">
                <Link
                  to="/connectwallet"
                  className="p-4 text-[16px] font-[600] font-sans cursor-pointer hover:scale-95  duration-300"
                >
                  Connect a wallet
                </Link>
              </li>
              <li className="py-[15px] ">
                <Link
                  to="/createaccount"
                  className="cursor-pointer h-[50px] bg-[#A259FF]  rounded-[20px] flex justify-center items-center gap-[12px] hover:scale-95  duration-300"
                >
                  <div>
                    <AiOutlineUser style={iconStyle} />
                  </div>
                  <div className="text-[16px] font-[600] font-sans">
                    Sign Up
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
