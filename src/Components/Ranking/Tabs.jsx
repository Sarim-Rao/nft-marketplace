import React from 'react'

const Tabs = () => {
  return (
    <>

    <div className="bg-[#2B2B2B] ">
        <div className="max-w-[90%] container flex justify-around ">
          <div className="border-b-2 border-[#858584] max-w-[350px] w-full text-center p-[15px]">
            <p className="text-[#FFFFFF] font-sans text-[22px] font-[600] leading-[30px] hidden md:block">
            Today
            </p>
            <p className="text-[#FFFFFF] font-sans text-[16px] font-[600] leading-[22px] md:hidden block">
            1d
            </p> 
          </div>

          <div className="max-w-[350px] w-full text-center p-[15px]">
            <p className="text-[#858584] font-sans text-[22px] font-[600] leading-[30px] hidden md:block">
            This Week
            </p>
            <p className="text-[#FFFFFF] font-sans text-[16px] font-[600] leading-[22px] md:hidden block">
            7d
            </p> 
          </div>

          <div className="max-w-[350px] w-full text-center p-[15px]">
            <p className="text-[#858584] font-sans text-[22px] font-[600] leading-[30px] hidden md:block">
            This Month
            </p>
            <p className="text-[#FFFFFF] font-sans text-[16px] font-[600] leading-[22px] md:hidden block">
            30d
            </p> 
          </div>
          <div className="max-w-[350px] w-full text-center p-[15px]">
            <p className="text-[#858584] font-sans text-[16px] md:text-[22px] font-[600] whitespace-nowrap leading-[22px] md:leading-[30px]">
            All Time
              
            </p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Tabs
