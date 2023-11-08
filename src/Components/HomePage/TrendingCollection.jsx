import React from "react";
import dogCard from "../../Images/dogCard.png";
import mashroom from "../../Images/Mashroom.png";
import robot from "../../Images/robot.png";
import miniCat from "../../Images/mini-Cat.png";
import miniDog from "../../Images/mini-Dog.png";
import miniMashroom from "../../Images/mini-mashroom.png";
import miniRobot from "../../Images/mini-robot.png";
import fox_avatar from "../../Images/Fox_Avatar.png";
import robot_avatar from "../../Images/Robot_Avatar.png";
import hero_avatar from "../../Images/Hero_Avatar.png";

const TrendingCollection = () => {
  const heading1 = "DSGN Animals";
  const heading2 = "Magic Mushrooms";
  const heading3 = "Disco Machines";
  const avatarName1 = "MrFox";
  const avatarName2 = "Shroomie";
  const avatarName3 = "BeKind2Robots";
  
  const TrendingCards = [
    {
      id: 1,
      coverImg: dogCard,
      miniImg1: miniCat,
      miniImg2: miniDog,
      heading: heading1,
      avatar: fox_avatar,
      avatarName: avatarName1,
    },
    {
      id: 2,
      coverImg: mashroom,
      miniImg1: miniMashroom,
      miniImg2: miniMashroom,
      heading: heading2,
      avatar: robot_avatar,
      avatarName: avatarName2,
    },
    {
      id: 3,
      coverImg: robot,
      miniImg1: miniRobot,
      miniImg2: miniRobot,
      heading: heading3,
      avatar: hero_avatar,
      avatarName: avatarName3,
    },
  ];
  return (
    <>
      <div className="bg-[#2B2B2B] py-[30px] md:py-[80px]">
        <div className="container md:max-w-[80%]">
          <p className="text-[28px] font-[600] font-sans text-[#FFFFFF]">
            Trending Collection
          </p>
          <p className="text-[16px] md:text-[22px] font-[400] leading-[22px] md:leading-[45px] font-sans text-[#FFFFFF]">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        {/* card container  */}

        <div className="md:max-w-[80%] container flex flex-col items-center md:gap-4 md:flex-row md:justify-between lg:flex-row lg:justify-around">
          {TrendingCards.map((item) => (
            <div
              className={` max-w-[330px] w-[100%] pt-[60px] ${
                item.id > 1 ? "hidden md:block" : ""
              }${item.id > 2 ? "hidden lg:block" : ""} `}
              key={item.id}
            >
              <img src={item.coverImg} alt="coverImg" className="hover:scale-95  duration-300 cursor-pointer" />
              <div className="flex  gap-[10px] py-[10px]  w-full">
                <img
                  src={item.miniImg1}
                  alt="miniImg1"
                  className="w-[32%] h-auto  rounded-[20px] hover:scale-95  duration-300 cursor-pointer"
                />
                <img
                  src={item.miniImg2}
                  alt="miniImg2"
                  className="w-[32%] h-auto  rounded-[20px] hover:scale-95  duration-300 cursor-pointer"
                />
                <div className="w-[33%] bg-[#A259FF] rounded-[20px] text-center flex flex-col justify-center hover:scale-95  duration-300 cursor-pointer">
                  <p className="  text-[22px] font-[700] font-mono text-[#FFFFFF] ">
                    1025+
                  </p>
                </div>
              </div>
              <p className="text-[#ffffff] text-[22px] font-[600] py-[15px] font-sans">{item.heading}</p>

              <div className="flex gap-[12px]">
                <img src={item.avatar} alt="avatar" />
                <p className="text-[#ffffff] font-sans text-[16px] font-[400]">{item.avatarName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingCollection;
