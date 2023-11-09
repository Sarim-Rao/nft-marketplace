import React from "react";
import weeklyDigest from "../../Images/weeklyDigest.png";

import Email from "../Email";

const Subscribe = () => {
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

            
              <Email/>
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
