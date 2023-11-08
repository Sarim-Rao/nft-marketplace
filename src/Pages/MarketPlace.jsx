import React, { useState } from "react";
import Marketbanner from "../Components/Marketplace/Marketbanner";
import MarketTabs from "../Components/Marketplace/MarketTabs";
import MagicMushroom from "../Images/MarketPlace/MagicMushroom0325.png";
import HappyRobot032 from "../Images/MarketPlace/HappyRobot032.png";
import HappyRobot024 from "../Images/MarketPlace/HappyRobot024.png";
import DesignerBear from "../Images/MarketPlace/DesignerBear.png";
import ColorfulDog0356 from "../Images/MarketPlace/ColorfulDog0356.png";
import DancingRobot0312 from "../Images/MarketPlace/DancingRobot0312.png";
import CherryBlossomGirl from "../Images/MarketPlace/CherryBlossomGirl.png";
import SpaceTravel from "../Images/MarketPlace/SpaceTravel.png";
import SunsetDimension from "../Images/MarketPlace/SunsetDimension.png";
import DesertWalk from "../Images/MarketPlace/DesertWalk.png";
import IceCreamApe0324 from "../Images/MarketPlace/IceCreamApe0324.png";
import ShroomieAsset from "../Images/MarketPlace/ShroomieAsset.png";
import BeKind2RobotsAsset from "../Images/MarketPlace/BeKind2RobotsAsset.png";
import MrFoxAvatar from "../Images/MarketPlace/MrFoxAvatar.png";
import KeepitrealAvatar from "../Images/MarketPlace/KeepitrealAvatar.png";
import RoboticaAvatar from "../Images/MarketPlace/RoboticaAvatar.png";
import MoonDancerAvatar from "../Images/MarketPlace/MoonDancerAvatar.png";
import NebulaKidavatar from "../Images/MarketPlace/NebulaKidAvatar.png";
import AnimakidAvatar from "../Images/MarketPlace/AnimakidAvatar.png";
import Catch22Avatar from "../Images/MarketPlace/Catch22Avatar.png";
import IceApeClubAvatar from "../Images/MarketPlace/IceApeClubAvatar.png";
import PuppyPowerAvatar from "../Images/MarketPlace/PuppyPowerAvatar.png";
import MarketplaceCards from "../Components/Marketplace/MarketplaceCards";

const MarketPlace = () => {
  const [tab, setTab] = useState(1);
  const MarketCardsSec = [
    {
      id: 1,
      Image: MagicMushroom,
      name: "Magic Mushroom 0325",
      avatar: ShroomieAsset,
      avatarName: "Shroomie",
    },
    {
      id: 2,
      Image: HappyRobot032,
      name: "Happy Robot 032",
      avatar: BeKind2RobotsAsset,
      avatarName: "BeKind2Robots",
    },
    {
      id: 3,
      Image: HappyRobot024,
      name: "Happy Robot 024",
      avatar: BeKind2RobotsAsset,
      avatarName: "BeKind2Robots",
    },
    {
      id: 4,
      Image: DesignerBear,
      name: "Designer Bear",
      avatar: MrFoxAvatar,
      avatarName: "Mr Fox",
    },
    {
      id: 5,
      Image: ColorfulDog0356,
      name: "Colorful Dog 0356",
      avatar: KeepitrealAvatar,
      avatarName: "Keepitreal",
    },
    {
      id: 6,
      Image: DancingRobot0312,
      name: "Dancing Robot 0312",
      avatar: RoboticaAvatar,
      avatarName: "Robotica",
    },
    {
      id: 7,
      Image: CherryBlossomGirl,
      name: "Cherry Blossom Girl 035",
      avatar: MoonDancerAvatar,
      avatarName: "MoonDancer",
    },
    {
      id: 8,
      Image: SpaceTravel,
      name: "Space Travel",
      avatar: NebulaKidavatar,
      avatarName: "NebulaKid",
    },
    {
      id: 9,
      Image: SunsetDimension,
      name: "Sunset Dimension",
      avatar: AnimakidAvatar,
      avatarName: "Animakid",
    },
    {
      id: 10,
      Image: DesertWalk,
      name: "Desert Walk",
      avatar: Catch22Avatar,
      avatarName: "Catch22",
    },
    {
      id: 11,
      Image: IceCreamApe0324,
      name: "IceCream Ape 0324",
      avatar: IceApeClubAvatar,
      avatarName: "Ice Ape Club",
    },
    {
      id: 12,
      Image: ColorfulDog0356,
      name: "Colorful Dog 0356",
      avatar: PuppyPowerAvatar,
      avatarName: "PuppyPower sAvatar",
    },
  ];


  const ReverseMarketCards = [...MarketCardsSec].reverse()
  

  return (
    <>
      <Marketbanner />
      <MarketTabs tab={tab} setTab={setTab}/>
      <div className="bg-[#3b3b3b] mb-[2px] py-[40px]">
      <MarketplaceCards MarketCardsSec={tab === 1 ? MarketCardsSec : ReverseMarketCards} />
      </div>
    </>
  );
};

export default MarketPlace;
