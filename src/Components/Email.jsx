import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const Email = () => {
  return (
    <>
      <div className="hidden lg:flex max-w-[420px] w-full pl-[20px] bg-[#FFFFFF] rounded-[20px]">
        <input
          type="text"
          className="flex-1 border-none outline-none text-[#2B2B2B]"
          placeholder="Enter your email here"
        />
        <button className=" h-[60px] px-[50px] bg-[#A259FF] rounded-[20px] text-[#FFFFFF] text-[16px] font-[600] font-sans hover:scale-95  duration-300 flex justify-center gap-[12px] items-center ">
          <AiOutlineMail /> Subscribe
        </button>
      </div>

      {/* for mobile  */}
      <div className="flex flex-col gap-[16px] lg:hidden ">
        <input
          type="text"
          placeholder="Enter your email here"
          className="pl-[20px] bg-[#FFFFFF] text-[#2B2B2B] rounded-[20px] px-[20px] py-[16px] border-none outline-none font-sans
                  "
        />
        <button
          className=" h-[46px] px-[50px] bg-[#A259FF] rounded-[20px] flex justify-center gap-[12px] items-center text-[#FFFFFF] text-[16px] font-[600] font-sans
"
        >
          <AiOutlineMail /> Subscribe
        </button>
      </div>
    </>
  );
};

export default Email;
