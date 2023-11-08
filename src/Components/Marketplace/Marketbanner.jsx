import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Marketbanner = () => {
  const iconStyle = {
    color: "#ffffff",
    fontSize: "24px",
    cursor: "pointer",
  };

  return (
    <>
      <div className="bg-[#2B2B2B] py-[80px]">
        <div className="container flex flex-col gap-[30px]">
          <div>
            <p className="text-[#FFFFFF] font-[600] text-[51px] font-sans

 leading-[56px]">
              Browse Marketplace
            </p>
            <p className="text-[#FFFFFF] font-[400] text-[22px] font-sans

 leading-[55px]">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>

          <div className="w-full flex items-cente py-[15px] px-[20px] border-[2px] border-[#3B3B3B] rounded-[20px]">
            <input
              type="text"
              name="name"
              placeholder="Search your favourite NFTs"
              className="bg-transparent flex-1 border-none outline-none  text-[#ffffff]"
            />
            <IoSearchOutline style={iconStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketbanner;
