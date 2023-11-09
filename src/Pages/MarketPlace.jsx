import React, { useState } from "react";
import Banner from "../Components/Marketplace/Banner.jsx";
import Tabs from "../Components/Marketplace/Tabs.jsx";
import Cards from "../Components/Marketplace/Cards.jsx";

import {
  MagicMushroom,
  HappyRobot032,
  HappyRobot024,
  DesignerBear,
  ColorfulDog0356,
  DancingRobot0312,
  CherryBlossomGirl,
  SpaceTravel,
  SunsetDimension,
  DesertWalk,
  IceCreamApe0324,
  ShroomieAsset,
  BeKind2RobotsAsset,
  MrFoxAvatar,
  KeepitrealAvatar,
  RoboticaAvatar,
  MoonDancerAvatar,
  NebulaKidavatar,
  AnimakidAvatar,
  Catch22Avatar,
  IceApeClubAvatar,
  PuppyPowerAvatar,
} from "../Images/MarketPlace/index.js";

const MarketPlace = () => {
  const [tab, setTab] = useState(1);

  const MarketCards = [
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

  const ReverseMarketCards = [...MarketCards].reverse();

  return (
    <>
      <Banner />
      <Tabs tab={tab} setTab={setTab} />
      <div className="bg-[#3b3b3b] mb-[2px] py-[40px]">
        <Cards
          MarketCards={tab === 1 ? MarketCards : ReverseMarketCards}
        />
      </div>
    </>
  );
};

export default MarketPlace;
