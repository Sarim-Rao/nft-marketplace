import React, { useEffect, useState } from "react";


const Timer = ({button}) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className="w-[295px] mx-auto  h-auto p-[30px] flex flex-col  gap-[10px] rounded-[20px] custom-bg"
        id="watch"
      >
        <p className="text-[#FFFFFF] font-[400] text-[12px] leading-[13px]">
          Auction ends in:
        </p>
        <div className="flex justify-between items-start">
          <div className="flex flex-col text-[#FFFFFF] text-[38px]  font-[700]">
            {hours}
            <span className="text-[12px] font-[400] font-mono">Hours</span>
          </div>

          <div className="text-[40px] text-[#FFFFFF]">:</div>

          <div className="flex flex-col text-[#FFFFFF] text-[38px]  font-[700]">
            {minutes}
            <span className="text-[12px] font-[400] font-mono">Minutes</span>
          </div>

          <div className="text-[40px] text-[#FFFFFF]">:</div>

          <div className="flex flex-col text-[#FFFFFF] text-[38px]  font-[700]">
            {seconds}
            <span className="text-[12px] font-[400] font-mono">Seconds</span>
          </div>
        </div>
{button && <button className="bg-[#A259FF] rounded-[20px] px-[50px] h-[60px] text-[#FFFFFF] font-[600] font-sans text-[16px] hover:scale-95  duration-300">
          Place Bid
        </button>}
        
      </div>
    </>
  );
};

export default Timer;
