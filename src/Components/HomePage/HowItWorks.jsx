import React from "react";
import collection from "../../Images/How It Work/Collection.png";
import Earning from "../../Images/How It Work/StartEarning.png";
import wallet from "../../Images/How It Work/wallet.png";

const HowItWorks = () => {
  const Cards = [
    {
      id: 1,
      image: wallet,
      heading: "Setup Your wallet",
      paragraph:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      id: 2,
      image: collection,
      heading: "Create Collection",
      paragraph:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      id: 3,
      image: Earning,
      heading: "Start Earning",
      paragraph:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <>
      <div className="bg-[#2B2B2B] py-[80px]">
        <div className="container flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center">
          <div className="max-w-[703px] w-[100%]">
            <p className="font-sans text-[28px] leading-[39px] md:leading-[45px] md:text-[38px] font-[600] text-[#FFFFFF]">
              How it works
            </p>
            <p className="font-sans text-[22px] font-[400] text-[#FFFFFF]">
              Find out how to get started
            </p>
          </div>
        </div>

        {/* cards  */}
        <div className="pt-[48px]">
          <div className="md:max-w-[80%] container flex flex-col items-center gap-[20px] md:flex-row md:justify-between">
            {Cards.map((item) => (
              <div
                className="max-w-[330px] w-full bg-[#3b3b3b] p-[20px] lg:p-[20px] flex  items-center justify-between gap-[20px] rounded-[20px] md:flex-col"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt="image"
                  className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px]"
                />

                <div className="flex flex-col gap-[10px] text-left lg:items-center max-w-[155px] w-[100%] lg:max-w-[270px] lg:w-full">
                  <p
                    className="text-[#FFFFFF] text-[16px] font-[600] leading-[22px] font-sans lg:text-[18px]"
                  >
                    {item.heading}
                  </p>

                  <p
                    className="text-[12px] lg:text-[16px]  text-left lg:text-center  leading-[16px] font-[400] text-[#FFFFFF] font-sans
"
                  >
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
