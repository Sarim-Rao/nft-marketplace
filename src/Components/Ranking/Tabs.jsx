import React from 'react'

const Tabs = ({tab,setTab}) => {

  const handleTab = (tab)=>{
      setTab(tab)
  }

  return (
    <>

    <div className="bg-[#2B2B2B] ">
        <div className="max-w-[90%] container flex justify-around ">
          <div className={`cursor-pointer  max-w-[350px] w-full text-center p-[15px]
          ${tab === 1 ? "border-b-2 border-[#858584] text-[#FFFFFF]":"text-[#858584]"}
          `}
          onClick={()=>handleTab(1)}
          >
            <p className=" font-sans text-[22px] font-[600] leading-[30px] hidden md:block">
            Today
            </p>
            <p className="text-[#FFFFFF] font-sans text-[16px] font-[600] leading-[22px] md:hidden block">
            1d
            </p> 
          </div>

          <div className={`cursor-pointer max-w-[350px] w-full text-center p-[15px] ${tab === 2 ? "border-b-2 border-[#858584] text-[#FFFFFF]" :"text-[#858584]"}`}
          onClick={()=>handleTab(2)}
          >
            <p className=" font-sans text-[22px] font-[600] leading-[30px] hidden md:block">
            This Week
            </p>
            <p className="text-[#FFFFFF] font-sans text-[16px] font-[600] leading-[22px] md:hidden block">
            7d
            </p> 
          </div>

          <div className={`cursor-pointer max-w-[350px] w-full text-center p-[15px] ${tab === 3 ? "border-b-2 border-[#858584] text-[#FFFFFF]" :"text-[#858584]"}`}
          onClick={()=>handleTab(3)}
          >
            <p className=" font-sans text-[22px] font-[600] leading-[30px] hidden md:block">
            This Month
            </p>
            <p className="text-[#FFFFFF] font-sans text-[16px] font-[600] leading-[22px] md:hidden block">
            30d
            </p> 
          </div>
          <div className={`cursor-pointer max-w-[350px] w-full text-center p-[15px] ${tab === 4 ? "border-b-2 border-[#858584] text-[#FFFFFF]" :"text-[#858584]"}`}
          onClick={()=>handleTab(4)}
          >
            <p className=" font-sans text-[16px] md:text-[22px] font-[600] whitespace-nowrap leading-[22px] md:leading-[30px]">
            All Time
              
            </p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Tabs
