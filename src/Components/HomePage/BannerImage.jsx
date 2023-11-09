import React from "react";
import nftBannerImage from "../../Images/nft-BannerImage.png";
import {OrbitinAvatar} from "../../Images/NftImages/index.js"
import Timer from "../Timer";
import { FiEye } from "react-icons/fi";

const BannerImage = () => {
  const iconStyle = {
    fontSize: "20px",
    color: "#A259FF",
  };

  return (
    <>
      <div
        className="!bg-cover bg-center bg-no-repeat w-full h-[660px] flex flex-col items-center"
        style={{ backgroundImage: `URL(${nftBannerImage})` }}
      >
        <div className=" h-[100%] w-[100%] pt-[180px] md:pt-[330px] lg:hidden bg-gradient-to-b from-transparent to-purple-600">
          <div className=" w-[315px] flex flex-col items-start  mx-auto gap-[30px] md:flex-row md:w-[90%] md:mx-auto md:items-center">
            <div className="flex flex-col gap-[30px]">
              <div className="bg-[#3B3B3B] h-[44px] w-[151px]  rounded-[20px] py-[10px] px-[20px] flex gap-[12px] items-center justify-center">
                <div>
                  <img src={OrbitinAvatar} alt="avatar" />
                </div>

                <div className="text-[16px] font-[400] leading-[22px] text-[#FFFFFF] font-sans">
                  Shroomie
                </div>
              </div>

              <div className="text-[38px] font-[600] leading-[45px] font-sans text-[#FFFFFF]">
                Magic Mashrooms
              </div>

              <div className="h-[60px] hidden  bg-[#FFFFFF] w-[315px] md:w-[198px] px-[50px] py-[22px] md:flex md:justify-center items-center gap-[12px] rounded-[20px]">
                <div>
                  <FiEye style={iconStyle} />
                </div>
                <div className="font-sans text-[16px] font-[600] leading-[22px] text-[#2B2B2B]">
                  See NFT
                </div>
              </div>
            </div>

            <Timer button={false} />

            <div className="h-[60px] md:hidden bg-[#FFFFFF] w-[315px] px-[50px] py-[22px] flex justify-center items-center gap-[12px] rounded-[20px]">
              <div>
                <FiEye style={iconStyle} />
              </div>
              <div className="font-sans text-[16px] font-[600] leading-[22px] text-[#2B2B2B]">
                See NFT
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerImage;
