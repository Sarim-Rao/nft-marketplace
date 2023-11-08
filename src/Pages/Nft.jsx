import React from "react";
import NftCom from "../Components/Nft/NftCom";
import TheOrbitians from "../Components/Nft/TheOrbitians";
import FoxyLife from "../Images/NftImages/FoxyLife.png";
import CatfromFuture from "../Images/NftImages/CatfromFuture.png";
import PsychoDog from "../Images/NftImages/PsychoDog.png";
import DesignerBear from "../Images/NftImages/DesignerBear.png";
import DancingRobot from "../Images/NftImages/DancingRobot.png";
import DancingRobot1 from "../Images/NftImages/DancingRobot1.png";
import DancingRobot2 from "../Images/NftImages/DancingRobot2.png";
import DancingRobot3 from "../Images/NftImages/DancingRobot3.png";
import DancingRobot4 from "../Images/NftImages/DancingRobot4.png";
import cardAvatar from "../Images/NftImages/OrbitinAvatar.png";
import NftCards from "../Components/Nft/NftCards";

const Nft = () => {
  const NftCardsSec = [
    {
      id: 1,
      Image: FoxyLife,
      name: "Foxy Life",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 2,
      Image: CatfromFuture,
      name: "Cat from Future",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 3,
      Image: PsychoDog,
      name: "Psycho Dog",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 4,
      Image: DesignerBear,
      name: "Designer Bear",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 5,
      Image: DancingRobot,
      name: "Dancing Robot 0375",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 6,
      Image: DancingRobot1,
      name: "Dancing Robot 0356",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 7,
      Image: DancingRobot2,
      name: "Dancing Robot 0321",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 8,
      Image: DancingRobot3,
      name: "Dancing Robot 0512",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
    {
      id: 9,
      Image: DancingRobot4,
      name: "Dancing Robot 0024",
      avatar: cardAvatar,
      avatarName: "Orbitian",
    },
  ];



  return (
    <>
      <NftCom />
      <TheOrbitians />
      <div className="bg-[#2B2B2B] py-[60px]">
        <NftCards heading={true} NftCardsSec={NftCardsSec} />
      </div>
    </>
  );
};

export default Nft;
