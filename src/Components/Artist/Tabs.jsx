import React from "react";

const Tabs = ({ tab, setTab }) => {
  const handleTab = (tab) => {
    setTab(tab);
  };

  return (
    <>
      <div className="bg-[#2B2B2B] ">
        <div className="container flex  justify-center">
          <div
            className={`max-w-[350px] w-full ${
              tab === 1
                ? "border-b-2 border-[#858584] text-[#FFFFFF]"
                : "text-[#858584]"
            }  text-center flex items-center justify-center h-[60px] cursor-pointer`}
            onClick={() => handleTab(1)}
          >
            <p className=" font-sans text-[16px] md:text-[22px] md:leadinf-[30px] font-[600] leading-[22px]">
              Created
            </p>
            <span className="hidden md:block text-[#FFFFFF] ml-[10px] text-[12px] md:text-[16px] font-mono font-[400] leading-[22px] bg-[#858584] rounded-[20px] py-[5px] px-[10px]">
              302
            </span>
          </div>

          <div
            className={`max-w-[350px] w-full text-center flex items-center justify-center h-[60px] cursor-pointer ${
              tab === 2
                ? "border-b-2 border-[#858584] text-[#FFFFFF]"
                : "text-[#858584]"
            }`}
            onClick={() => handleTab(2)}
          >
            <p className=" font-sans text-[16px] md:text-[22px] font-[600] leading-[22px]">
              Owned
            </p>
            <span className="hidden md:block text-[#FFFFFF] ml-[10px] text-[12px] md:text-[16px] font-mono font-[400] leading-[22px] bg-[#858584] rounded-[20px] py-[5px] px-[10px]">
              67
            </span>
          </div>

          <div
            className={`max-w-[350px] w-full text-center flex items-center justify-center h-[60px] cursor-pointer ${
              tab === 3
                ? "border-b-2 border-[#858584] text-[#FFFFFF]"
                : "text-[#858584] "
            }`}
            onClick={() => handleTab(3)}
          >
            <p className="font-sans text-[16px] md:text-[22px] font-[600] leading-[22px]">
              Collection
            </p>
            <span className="hidden md:block text-[#FFFFFF] ml-[10px] text-[12px] md:text-[16px] font-mono font-[400] leading-[22px] bg-[#858584] rounded-[20px] py-[5px] px-[10px]">
              4
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
