import React from "react";
import weeklyDigest from "../../Images/weeklyDigest.png";
import { AiOutlineMail } from "react-icons/ai";

const WeeklyDigest = () => {
  return (
    <>
      <div className="bg-[#2b2b2b] pb-[80px] ">
        <div className="md:max-w-[80%] container ">
          <div className=" md:bg-[#3b3b3b] w-full md:px-[40px] md:py-[30px] flex flex-col items-center gap-[30px] md:flex-row   rounded-[20px]">
            {/* left side  */}
            <div className="max-w-[300px] w-full sm:max-w-[425px] md:w-full">
              <img src={weeklyDigest} alt="WeeklyDigest" />
            </div>

            {/* right side  */}
            <div className="flex flex-col gap-[30px] max-w-[425px] w-full">
              <p className="font-sans text-[28px] font-[600] leading-[39px] text-[#FFFFFF]">
                Join our weekly digest
              </p>

              <p className="font-sans text-[16px] leading-[22px] font-[400] text-[#FFFFFF]">
                Get exclusive promotions & updates straight to your inbox.
              </p>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyDigest;
