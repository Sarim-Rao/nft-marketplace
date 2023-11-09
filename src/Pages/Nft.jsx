import React from "react";
import BannerImage from "../Components/Nft/BannerImage.jsx";
import TheOrbitians from "../Components/Nft/TheOrbitians";
import Cards from "../Components/Nft/Cards.jsx";


import {
  FoxyLife,
    CatfromFuture,
    PsychoDog,
    DesignerBear,
    DancingRobot,
    DancingRobot1,
    DancingRobot2,
    DancingRobot3,
    DancingRobot4,
    cardAvatar
} from "../Images/NftImages/index.js"


const Nft = () => {
  const NftCards = [
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
      <BannerImage />
      <TheOrbitians />
      <div className="bg-[#2B2B2B] py-[60px]">
        <Cards heading={true} NftCards={NftCards} />
      </div>
    </>
  );
};

export default Nft;
