import React from "react";
import bannerImg from "../../Images/Connect_Wallet/Banner.png";
import Coinbase from "../../Images/Connect_Wallet/Coinbase.png";
import Metamask from "../../Images/Connect_Wallet/Metamask.png";
import WalletConnect from "../../Images/Connect_Wallet/WalletConnect.png";

const connectHeroSec = () => {
  return (
    <>
      <div className="bg-[#2B2B2B] flex flex-col items-center gap-[20px] md:flex-row md:gap-[40px] w-full h-full md:h-[691px] ">
        {/* left side  */}
        <div
          className="!w-full md:!w-[50%] !bg-center !bg-cover h-[232px] md:!h-[691px]  relative"
          style={{ background: `url(${bannerImg})` }}
        ></div>

        {/* right side  */}

        <div className="flex flex-col items-center gap-[30px] py-[80px] px-[1.5rem] md:px-[5rem] md:items-start md:w-[50%] ">
          <div className="w-full flex flex-col gap-[20px]">
            <p className="text-[38px] font-[600] leading-[45px] text-[#FFFFFF]">
              Connect wallet
            </p>
            <p className="text-[#FFFFFF] text-[16px] font-[400] leading-[22px]">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-[20px] w-[100%] ">
            <div className="border-[#A259FF] border-[1px] max-w-[320px] w-full h-[72px] rounded-[20px] flex items-center gap-[20px] pl-[40px] pr-[20px] hover:scale-95  duration-300 cursor-pointer">
              <div>
                <img src={Metamask} alt="Metamask" />
              </div>
              <div className="max-w-[208px] w-full">
                <p className="text-[#FFFFFF] text-[22px] font-[600] leading-[30px]">
                  Metamask
                </p>
              </div>
            </div>
            <div className="border-[#A259FF] border-[1px] max-w-[320px] w-full h-[72px] rounded-[20px] flex items-center gap-[20px] pl-[40px] pr-[20px] hover:scale-95  duration-300 cursor-pointer">
              <div>
                <img src={WalletConnect} alt="WalletConnect" />
              </div>
              <div className="max-w-[208px] w-full">
                <p className="text-[#FFFFFF] text-[22px] font-[600] leading-[30px]">
                  Wallet Connect
                </p>
              </div>
            </div>
            <div className="border-[#A259FF] border-[1px] max-w-[320px] w-full h-[72px] rounded-[20px] flex items-center gap-[20px] pl-[40px] pr-[20px] hover:scale-95  duration-300 cursor-pointer">
              <div>
                <img src={Coinbase} alt="Coinbase" />
              </div>

              <div className="max-w-[208px] w-full">
                <p className="text-[#FFFFFF] text-[22px] font-[600] leading-[30px]">
                  Coinbase
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connectHeroSec;
