import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { AiFillLock } from "react-icons/ai";

import CreateBanner from "../../Images/Create_Account/CreateBanner.png";

const CreateAccCom = () => {
  const iconStyle = {
    fontSize: "20px",
    color: "#BDBDBD",
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[20px] md:flex-row md:gap-[40px] w-full h-full md:h-[691px] pb-[40px] md:pb-[0] md:pt-[0]">
        {/* left side  */}
        <div
          className="!w-full md:!w-[50%] !bg-center !bg-cover h-[232px] md:!h-[691px]  relative"
          style={{ background: `url(${CreateBanner})` }}
        ></div>

        {/* right side  */}

        <div className="flex flex-col items-center gap-[30px] md:py-[80px] w-full md:items-start md:w-[50%]">

          <div className="flex flex-col md:gap-[20px] w-[90%] text-center md:text-left">
          <p className="text-[38px] md:text-[51px] font-[600] leading-[45px] md:leading-[56px] text-[#FFFFFF]">
            Create Account
          </p>
          <p className="capitalize  text-[#FFFFFF] text-[16px] md:text-[22px] font-[400] leading-[22px] md:leading-[35px]">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
          </div>

          <form className="w-[100%]">
            <div className="flex flex-col items-center md:items-start gap-[15px] ">
              <div className="w-[330px] py-[13px] px-[22px] bg-[#FFFFFF] rounded-[20px] flex items-center gap-[12px]">
                <AiOutlineUser style={iconStyle} />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-transparent text-[#2B2B2B] font-[400] text-[16px] leading-[22px] border-none outline-none"
                  required
                />
              </div>
              <div className="w-[330px] py-[13px] px-[20px] bg-[#FFFFFF] rounded-[22px] flex items-center gap-[12px]">
                <GoMail style={iconStyle} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="bg-transparent text-[#2B2B2B] font-[400] text-[16px] leading-[22px] border-none outline-none"
                  required
                />
              </div>
              <div className="w-[330px] py-[13px] px-[22px] bg-[#FFFFFF] rounded-[20px] flex items-center gap-[12px]">
                <AiFillLock style={iconStyle} />
                <input
                  type="password"
                  name="Password"
                  placeholder="password"
                  className=" bg-transparent border-none outline-none text-[#2B2B2B] font-[400] text-[16px] leading-[22px]"
                  required
                />
              </div>
              <div className="w-[330px] py-[13px] px-[22px] bg-[#FFFFFF] rounded-[20px] flex items-center gap-[12px]">
                <AiFillLock style={iconStyle} />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="bg-transparent text-[#2B2B2B] font-[400] text-[16px] leading-[22px] border-none outline-none"
                  required
                />
              </div>

              <button
                className="w-[330px] px-[50px] text-[16px] font-[600] leading-[22px] text-[#FFFFFF] flex items-center justify-center gap-[12px] bg-[#A259FF] rounded-[20px] h-[46px] hover:scale-95  duration-300"
                type="submit"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccCom;
